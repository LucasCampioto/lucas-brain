# Lucas Brain MCP

MCP server for the **Lucas Brain Business OS** playbooks.

KISS by design: JavaScript ESM, in-memory full-text search, dual transport (stdio + Streamable HTTP). No TypeScript build, no vector DB.

## Tools (stable contract v1.0.0)

| Tool | Purpose |
|------|---------|
| `list_folders` | Folders 01–12 + counts |
| `list_playbooks` | List / filter by folder |
| `get_playbook` | Full markdown by id or title |
| `get_section` | One section (Objetivo, Framework, …) |
| `search_playbooks` | Full-text search |
| `get_related` | Resolve Relacionados |
| `recommend_for_intent` | Heuristic recommendations |
| `reindex` | Reload disk → memory |

Resources:

- `brain://catalog`
- `brain://playbook/{slug}` (prefer `get_playbook` for ids with `/`)

## Setup

```bash
cd mcp
npm install
```

## Cursor / Claude Desktop (stdio)

Repo already includes `.cursor/mcp.json`. Reload Cursor window, then check **Settings → MCP**.

Manual:

```json
{
  "mcpServers": {
    "lucas-brain": {
      "command": "node",
      "args": ["ABS_PATH/lucas-brain/mcp/src/index.stdio.js"],
      "env": {
        "LUCAS_BRAIN_ROOT": "ABS_PATH/lucas-brain"
      }
    }
  }
}
```

```bash
npm run start:stdio
```

## HTTP (plug any agent / future chat SaaS)

```bash
# localhost, no key required
npm run start:http

# production-style
set LUCAS_BRAIN_API_KEY=your-secret
set HOST=0.0.0.0
npm run start:http
```

| Endpoint | Notes |
|----------|--------|
| `GET /health` | Liveness + playbook count |
| `ALL /mcp` | MCP Streamable HTTP |
| `POST /admin/reindex` | Reload catalog (auth if key set) |

Auth: send `Authorization: Bearer <LUCAS_BRAIN_API_KEY>` when the key is set. Key is **required** if `HOST` is not localhost.

### Plug a chat agent (checklist)

1. Run this HTTP server (Docker or Node).
2. Point your MCP client at `http://host:7337/mcp`.
3. Pass the Bearer token if configured.
4. System prompt the agent: use Lucas Brain tools before strategic answers; cite playbook ids.
5. Do **not** re-implement playbook reading in the front — only call MCP tools.

Example env for clients:

```
MCP_URL=http://127.0.0.1:7337/mcp
MCP_API_KEY=your-secret
```

## Docker

```bash
cd mcp
docker build -t lucas-brain-mcp .
docker run --rm -p 7337:7337 \
  -e LUCAS_BRAIN_API_KEY=secret \
  -v "ABS_PATH/lucas-brain:/brain:ro" \
  lucas-brain-mcp
```

## Env

See `.env.example`.

| Variable | Default |
|----------|---------|
| `LUCAS_BRAIN_ROOT` | parent of `mcp/` |
| `PORT` | `7337` |
| `HOST` | `127.0.0.1` |
| `LUCAS_BRAIN_API_KEY` | empty (open on localhost) |
| `CORS_ORIGIN` | empty |
| `WATCH` | on in non-production |

## Tests

```bash
npm test
```

## Design notes

- One process, catalog in memory, file watcher in dev.
- Same tools for stdio and HTTP.
- Embeddings / multi-tenant / OAuth = out of scope v1.
