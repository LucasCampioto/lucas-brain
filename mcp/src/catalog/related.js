/**
 * Parse ## Relacionados markdown into title strings.
 * @param {string} section
 * @returns {string[]}
 */
export function parseRelated(section) {
  if (!section) return [];
  const items = [];
  for (const line of section.split(/\r?\n/)) {
    const m = line.match(/^\s*[-*]\s+(.+?)\s*$/);
    if (!m) continue;
    let name = m[1].trim();
    // strip markdown links [text](url)
    const link = name.match(/^\[(.+?)\]\(.+?\)$/);
    if (link) name = link[1].trim();
    // strip trailing .md
    name = name.replace(/\.md$/i, "");
    if (name) items.push(name);
  }
  return items;
}

/**
 * Resolve related titles to catalog playbooks when possible.
 * @param {import('./loader.js').Playbook} playbook
 * @param {{ byTitle: Map<string, any>, playbooks: any[] }} catalog
 */
export function resolveRelated(playbook, catalog) {
  return playbook.related.map((name) => {
    const key = name.toLowerCase();
    let found = catalog.byTitle.get(key);
    if (!found) {
      found = catalog.playbooks.find(
        (p) =>
          p.title.toLowerCase() === key ||
          p.slug === key.replace(/[^a-z0-9]+/g, "-")
      );
    }
    return {
      name,
      id: found?.id ?? null,
      title: found?.title ?? name,
      folder: found?.folder ?? null,
      found: Boolean(found),
    };
  });
}
