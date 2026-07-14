import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { createServer } from "./server.js";
import { getCatalog, startWatcher } from "./catalog/store.js";
import { config } from "./config.js";

async function main() {
  console.error(`[lucas-brain] starting stdio MCP v${config.version}`);
  console.error(`[lucas-brain] BRAIN_ROOT=${config.brainRoot}`);

  const catalog = await getCatalog();
  console.error(
    `[lucas-brain] loaded ${catalog.playbooks.length} playbooks in ${catalog.folders.length} folders`
  );

  await startWatcher(({ playbooks }) => {
    console.error(`[lucas-brain] reindexed (${playbooks} playbooks)`);
  });

  const server = createServer();
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error("[lucas-brain] stdio transport connected");
}

main().catch((err) => {
  console.error("[lucas-brain] fatal:", err);
  process.exit(1);
});
