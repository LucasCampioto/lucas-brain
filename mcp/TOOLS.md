# Tool contract v1.0.0

Stable API for clients (Cursor, HTTP agents, future chat SaaS). Breaking input/output changes require a minor/major bump in `package.json`.

| Tool | Inputs | Output |
|------|--------|--------|
| `list_folders` | — | `{ folders[], totalPlaybooks, loadedAt, brainRoot }` |
| `list_playbooks` | `folder?` | `{ count, playbooks[{ id, title, folder, path, objective }] }` |
| `get_playbook` | `id?` \| `title?` | `{ id, title, folder, path, objective, related, markdown }` |
| `get_section` | `id`, `section` enum | `{ id, title, section, content }` |
| `search_playbooks` | `query`, `folder?`, `limit?` | `{ query, count, results[] }` |
| `get_related` | `id` | `{ id, title, related[{ name, id, title, folder, found }] }` |
| `recommend_for_intent` | `intent` | `{ intent, recommendations[] }` |
| `reindex` | — | `{ ok, loadedAt, totalPlaybooks }` |

Errors return JSON `{ error, message }` with `isError: true` when applicable (`NOT_FOUND`, `INVALID_SECTION`, `INVALID_INPUT`).

HTTP auth errors: `401 UNAUTHORIZED`, `503 MISCONFIGURED`.
