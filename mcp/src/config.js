import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const MCP_ROOT = path.resolve(__dirname, "..");
const DEFAULT_BRAIN_ROOT = path.resolve(MCP_ROOT, "..");

function envBool(name, fallback) {
  const v = process.env[name];
  if (v === undefined || v === "") return fallback;
  return ["1", "true", "yes", "on"].includes(v.toLowerCase());
}

export const config = {
  mcpRoot: MCP_ROOT,
  brainRoot: process.env.LUCAS_BRAIN_ROOT
    ? path.resolve(process.env.LUCAS_BRAIN_ROOT)
    : DEFAULT_BRAIN_ROOT,
  port: Number(process.env.PORT || 7337),
  host: process.env.HOST || "127.0.0.1",
  apiKey: process.env.LUCAS_BRAIN_API_KEY || "",
  corsOrigin: process.env.CORS_ORIGIN || "",
  watch: envBool(
    "WATCH",
    process.env.NODE_ENV !== "production"
  ),
  version: "1.0.0",
};

export function isLocalhostBind() {
  return config.host === "127.0.0.1" || config.host === "localhost";
}
