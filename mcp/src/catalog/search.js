/**
 * Tiny full-text index (KISS — no deps).
 */

/** @param {string} text */
export function tokenize(text) {
  return text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .split(/[^a-z0-9]+/)
    .filter((t) => t.length > 1);
}

/**
 * @param {Array<{ id: string, title: string, objective: string, folder: string, body: string }>} playbooks
 */
export function buildSearchIndex(playbooks) {
  /** @type {Map<string, Map<string, number>>} */
  const inverted = new Map();

  for (const p of playbooks) {
    /** @type {Map<string, number>} */
    const tf = new Map();
    const weighted = [
      ...tokenize(p.title).map((t) => [t, 5]),
      ...tokenize(p.objective).map((t) => [t, 3]),
      ...tokenize(p.folder).map((t) => [t, 2]),
      ...tokenize(p.body).map((t) => [t, 1]),
    ];
    for (const [token, w] of weighted) {
      tf.set(token, (tf.get(token) || 0) + w);
    }
    for (const [token, score] of tf) {
      if (!inverted.has(token)) inverted.set(token, new Map());
      inverted.get(token).set(p.id, score);
    }
  }

  return { inverted };
}

/**
 * @param {{ inverted: Map<string, Map<string, number>> }} index
 * @param {Array<{ id: string, title: string, objective: string, folder: string, body: string, relativePath?: string }>} playbooks
 * @param {string} query
 * @param {{ folder?: string, limit?: number }} [opts]
 */
export function searchIndex(index, playbooks, query, opts = {}) {
  const limit = opts.limit ?? 8;
  const tokens = tokenize(query);
  if (!tokens.length) return [];

  /** @type {Map<string, number>} */
  const scores = new Map();
  for (const token of tokens) {
    const postings = index.inverted.get(token);
    if (!postings) continue;
    for (const [id, w] of postings) {
      scores.set(id, (scores.get(id) || 0) + w);
    }
  }

  const byId = new Map(playbooks.map((p) => [p.id, p]));
  let ranked = [...scores.entries()]
    .sort((a, b) => b[1] - a[1])
    .map(([id, score]) => {
      const p = byId.get(id);
      if (!p) return null;
      if (opts.folder && p.folder !== opts.folder) return null;
      return {
        id: p.id,
        title: p.title,
        folder: p.folder,
        objective: p.objective,
        score,
        snippet: makeSnippet(p.body, tokens),
        relativePath: p.relativePath,
      };
    })
    .filter(Boolean);

  return ranked.slice(0, limit);
}

/**
 * @param {string} body
 * @param {string[]} tokens
 */
function makeSnippet(body, tokens) {
  const lower = body.toLowerCase();
  let idx = -1;
  for (const t of tokens) {
    idx = lower.indexOf(t);
    if (idx !== -1) break;
  }
  if (idx === -1) {
    return body.replace(/\s+/g, " ").trim().slice(0, 160);
  }
  const start = Math.max(0, idx - 60);
  const end = Math.min(body.length, idx + 120);
  let snip = body.slice(start, end).replace(/\s+/g, " ").trim();
  if (start > 0) snip = "…" + snip;
  if (end < body.length) snip = snip + "…";
  return snip;
}
