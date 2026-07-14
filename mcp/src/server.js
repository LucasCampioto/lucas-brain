import {
  McpServer,
  ResourceTemplate,
} from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";
import { config } from "./config.js";
import { getCatalog, reindex } from "./catalog/store.js";
import {
  resolvePlaybook,
  searchPlaybooks,
  SECTIONS,
} from "./catalog/loader.js";
import { resolveRelated } from "./catalog/related.js";

function jsonText(data) {
  return {
    content: [{ type: "text", text: JSON.stringify(data, null, 2) }],
  };
}

function errText(code, message) {
  return {
    content: [
      {
        type: "text",
        text: JSON.stringify({ error: code, message }, null, 2),
      },
    ],
    isError: true,
  };
}

/**
 * Shared MCP server (tools + resources). Same for stdio and HTTP.
 */
export function createServer() {
  const server = new McpServer(
    {
      name: "lucas-brain",
      version: config.version,
    },
    {
      instructions:
        "You are connected to Lucas Brain, a Business OS of operational playbooks. " +
        "Before strategic business decisions, search and read relevant playbooks. " +
        "Cite playbook titles/ids in answers. Do not invent principles outside the catalog. " +
        "Adapt guidance to the user's context; do not treat playbooks as company-specific.",
    }
  );

  server.tool(
    "list_folders",
    "List Business OS folders (01–12) and playbook counts in Lucas Brain.",
    {},
    async () => {
      const catalog = await getCatalog();
      return jsonText({
        loadedAt: catalog.loadedAt,
        brainRoot: catalog.brainRoot,
        folders: catalog.folders,
        totalPlaybooks: catalog.playbooks.length,
      });
    }
  );

  server.tool(
    "list_playbooks",
    "List playbooks. Optionally filter by exact folder name (e.g. \"04 - Branding\").",
    {
      folder: z
        .string()
        .optional()
        .describe('Exact folder name, e.g. "06 - Sales"'),
    },
    async ({ folder }) => {
      const catalog = await getCatalog();
      let list = catalog.playbooks;
      if (folder) {
        list = list.filter((p) => p.folder === folder);
        if (!list.length) {
          return errText(
            "NOT_FOUND",
            `No playbooks in folder: ${folder}. Use list_folders.`
          );
        }
      }
      return jsonText({
        count: list.length,
        playbooks: list.map((p) => ({
          id: p.id,
          title: p.title,
          folder: p.folder,
          path: p.relativePath,
          objective: p.objective,
        })),
      });
    }
  );

  server.tool(
    "get_playbook",
    "Get a full playbook by id (e.g. branding/visibility-engine) or title.",
    {
      id: z
        .string()
        .optional()
        .describe("Playbook id like branding/pricing"),
      title: z.string().optional().describe("Playbook title"),
    },
    async ({ id, title }) => {
      const catalog = await getCatalog();
      const key = id || title;
      if (!key) {
        return errText("INVALID_INPUT", "Provide id or title");
      }
      const p = resolvePlaybook(catalog, key);
      if (!p) return errText("NOT_FOUND", `Playbook not found: ${key}`);
      return jsonText({
        id: p.id,
        title: p.title,
        folder: p.folder,
        path: p.relativePath,
        objective: p.objective,
        related: p.related,
        markdown: p.body,
      });
    }
  );

  server.tool(
    "get_section",
    "Get one section of a playbook (Objetivo, Filosofia, Framework, Checklist, etc.).",
    {
      id: z.string().describe("Playbook id or title"),
      section: z
        .enum(SECTIONS)
        .describe("Section name exactly as in playbooks"),
    },
    async ({ id, section }) => {
      const catalog = await getCatalog();
      const p = resolvePlaybook(catalog, id);
      if (!p) return errText("NOT_FOUND", `Playbook not found: ${id}`);
      const content = p.sections[section];
      if (content === undefined) {
        return errText(
          "INVALID_SECTION",
          `Section "${section}" missing. Available: ${Object.keys(p.sections).join(", ")}`
        );
      }
      return jsonText({
        id: p.id,
        title: p.title,
        section,
        content,
      });
    }
  );

  server.tool(
    "search_playbooks",
    "Full-text search across playbooks. Use for discovering relevant OS principles.",
    {
      query: z.string().describe("Search query"),
      folder: z.string().optional().describe("Exact folder filter"),
      limit: z.number().int().min(1).max(30).optional(),
    },
    async ({ query, folder, limit }) => {
      const catalog = await getCatalog();
      const results = searchPlaybooks(catalog, query, { folder, limit });
      return jsonText({ query, count: results.length, results });
    }
  );

  server.tool(
    "get_related",
    "List related playbooks from a playbook's Relacionados section.",
    {
      id: z.string().describe("Playbook id or title"),
    },
    async ({ id }) => {
      const catalog = await getCatalog();
      const p = resolvePlaybook(catalog, id);
      if (!p) return errText("NOT_FOUND", `Playbook not found: ${id}`);
      return jsonText({
        id: p.id,
        title: p.title,
        related: resolveRelated(p, catalog),
      });
    }
  );

  server.tool(
    "recommend_for_intent",
    "Recommend 3–7 playbooks for a business intent or question (heuristic search).",
    {
      intent: z
        .string()
        .describe("What the founder/PM wants to decide or do"),
    },
    async ({ intent }) => {
      const catalog = await getCatalog();
      const hits = searchPlaybooks(catalog, intent, { limit: 7 });
      return jsonText({
        intent,
        recommendations: hits.map((h) => ({
          id: h.id,
          title: h.title,
          folder: h.folder,
          objective: h.objective,
          reason: `Matched search score ${h.score} for intent terms`,
        })),
      });
    }
  );

  server.tool(
    "reindex",
    "Reload playbooks from disk into the in-memory catalog (after edits).",
    {},
    async () => {
      const catalog = await reindex();
      return jsonText({
        ok: true,
        loadedAt: catalog.loadedAt,
        totalPlaybooks: catalog.playbooks.length,
      });
    }
  );

  server.resource(
    "catalog",
    "brain://catalog",
    {
      description: "Full Lucas Brain catalog (JSON inventory)",
      mimeType: "application/json",
    },
    async (uri) => {
      const catalog = await getCatalog();
      const payload = {
        loadedAt: catalog.loadedAt,
        folders: catalog.folders,
        playbooks: catalog.playbooks.map((p) => ({
          id: p.id,
          title: p.title,
          folder: p.folder,
          path: p.relativePath,
          objective: p.objective,
        })),
      };
      return {
        contents: [
          {
            uri: uri.href,
            mimeType: "application/json",
            text: JSON.stringify(payload, null, 2),
          },
        ],
      };
    }
  );

  server.resource(
    "playbook",
    new ResourceTemplate("brain://playbook/{slug}", {
      list: undefined,
    }),
    {
      description:
        "Playbook markdown by id or slug (e.g. branding/visibility-engine)",
      mimeType: "text/markdown",
    },
    async (uri, { slug }) => {
      const catalog = await getCatalog();
      const key = decodeURIComponent(slug || "");
      const p = resolvePlaybook(catalog, key);
      if (!p) {
        return {
          contents: [
            {
              uri: uri.href,
              mimeType: "text/plain",
              text: `NOT_FOUND: ${key}`,
            },
          ],
        };
      }
      return {
        contents: [
          {
            uri: `brain://playbook/${p.id}`,
            mimeType: "text/markdown",
            text: p.body,
          },
        ],
      };
    }
  );

  return server;
}
