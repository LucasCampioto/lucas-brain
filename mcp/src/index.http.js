import express from "express";
import { StreamableHTTPServerTransport } from "@modelcontextprotocol/sdk/server/streamableHttp.js";
import { createServer } from "./server.js";
import { getCatalog, startWatcher, reindex } from "./catalog/store.js";
import { config, isLocalhostBind } from "./config.js";

function unauthorized(res) {
  res.status(401).json({
    error: "UNAUTHORIZED",
    message: "Missing or invalid Authorization: Bearer <LUCAS_BRAIN_API_KEY>",
  });
}

function authMiddleware(req, res, next) {
  const key = config.apiKey;
  if (!key) {
    if (!isLocalhostBind()) {
      return res.status(503).json({
        error: "MISCONFIGURED",
        message:
          "LUCAS_BRAIN_API_KEY is required when HOST is not localhost",
      });
    }
    return next();
  }
  const header = req.headers.authorization || "";
  const token = header.startsWith("Bearer ") ? header.slice(7) : "";
  if (token !== key) return unauthorized(res);
  return next();
}

async function main() {
  console.error(`[lucas-brain] starting HTTP MCP v${config.version}`);
  console.error(`[lucas-brain] BRAIN_ROOT=${config.brainRoot}`);

  const catalog = await getCatalog();
  console.error(
    `[lucas-brain] loaded ${catalog.playbooks.length} playbooks in ${catalog.folders.length} folders`
  );

  await startWatcher(({ playbooks }) => {
    console.error(`[lucas-brain] reindexed (${playbooks} playbooks)`);
  });

  const app = express();
  app.use(express.json({ limit: "4mb" }));

  // CORS (optional)
  app.use((req, res, next) => {
    const origin = config.corsOrigin;
    if (origin) {
      const allowed = origin.split(",").map((s) => s.trim());
      const reqOrigin = req.headers.origin;
      if (reqOrigin && allowed.includes(reqOrigin)) {
        res.setHeader("Access-Control-Allow-Origin", reqOrigin);
        res.setHeader("Vary", "Origin");
        res.setHeader(
          "Access-Control-Allow-Headers",
          "Authorization, Content-Type, Accept, Mcp-Session-Id, MCP-Protocol-Version"
        );
        res.setHeader(
          "Access-Control-Allow-Methods",
          "GET,POST,DELETE,OPTIONS"
        );
      }
      if (req.method === "OPTIONS") {
        return res.status(204).end();
      }
    }
    next();
  });

  app.get("/health", async (_req, res) => {
    const c = await getCatalog();
    res.json({
      ok: true,
      name: "lucas-brain",
      version: config.version,
      playbooks: c.playbooks.length,
      loadedAt: c.loadedAt,
    });
  });

  app.post("/admin/reindex", authMiddleware, async (_req, res) => {
    const c = await reindex();
    res.json({
      ok: true,
      playbooks: c.playbooks.length,
      loadedAt: c.loadedAt,
    });
  });

  // Stateless Streamable HTTP (KISS): new transport + server per request
  app.all("/mcp", authMiddleware, async (req, res) => {
    try {
      const server = createServer();
      const transport = new StreamableHTTPServerTransport({
        sessionIdGenerator: undefined,
        enableJsonResponse: true,
      });
      res.on("close", () => {
        transport.close().catch(() => {});
      });
      await server.connect(transport);
      await transport.handleRequest(req, res, req.body);
    } catch (err) {
      console.error("[lucas-brain] /mcp error:", err);
      if (!res.headersSent) {
        res.status(500).json({
          error: "INTERNAL",
          message: String(err?.message || err),
        });
      }
    }
  });

  app.listen(config.port, config.host, () => {
    console.error(
      `[lucas-brain] HTTP listening on http://${config.host}:${config.port}`
    );
    console.error(`[lucas-brain] MCP endpoint: http://${config.host}:${config.port}/mcp`);
    console.error(
      `[lucas-brain] auth: ${config.apiKey ? "API key required" : "open (localhost)"}`
    );
  });
}

main().catch((err) => {
  console.error("[lucas-brain] fatal:", err);
  process.exit(1);
});
