import fs from "node:fs/promises";
import path from "node:path";
import { parseRelated } from "./related.js";
import { buildSearchIndex, searchIndex } from "./search.js";

const FOLDER_RE = /^\d{2} - /;

/** @typedef {{ id: string, slug: string, title: string, folder: string, folderNumber: string, path: string, relativePath: string, objective: string, sections: Record<string, string>, related: string[], body: string }} Playbook */

/**
 * @param {string} name
 */
function slugify(name) {
  return name
    .replace(/\.md$/i, "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/**
 * @param {string} folderName e.g. "04 - Branding"
 */
function folderSlug(folderName) {
  const withoutNum = folderName.replace(/^\d{2} - /, "");
  return slugify(withoutNum);
}

/**
 * @param {string} markdown
 */
function extractTitle(markdown) {
  const m = markdown.match(/^#\s+(.+)$/m);
  return m ? m[1].trim() : "";
}

/**
 * @param {string} markdown
 * @returns {Record<string, string>}
 */
export function extractSections(markdown) {
  /** @type {Record<string, string>} */
  const sections = {};
  const parts = markdown.split(/^##\s+/m);
  for (let i = 1; i < parts.length; i++) {
    const block = parts[i];
    const nl = block.indexOf("\n");
    const name = (nl === -1 ? block : block.slice(0, nl)).trim();
    const body = (nl === -1 ? "" : block.slice(nl + 1)).trim();
    if (name) sections[name] = body;
  }
  return sections;
}

/**
 * @param {string} objectiveSection
 */
function firstObjectiveLine(objectiveSection) {
  if (!objectiveSection) return "";
  const line = objectiveSection
    .split(/\r?\n/)
    .map((l) => l.trim())
    .find((l) => l && !l.startsWith("---"));
  return line || "";
}

/**
 * @param {string} brainRoot
 */
export async function loadCatalog(brainRoot) {
  const entries = await fs.readdir(brainRoot, { withFileTypes: true });
  const folders = entries
    .filter((e) => e.isDirectory() && FOLDER_RE.test(e.name))
    .map((e) => e.name)
    .sort();

  /** @type {Playbook[]} */
  const playbooks = [];

  for (const folder of folders) {
    const folderPath = path.join(brainRoot, folder);
    const files = (await fs.readdir(folderPath)).filter((f) =>
      f.toLowerCase().endsWith(".md")
    );
    const fSlug = folderSlug(folder);
    const folderNumber = folder.slice(0, 2);

    for (const file of files) {
      const abs = path.join(folderPath, file);
      const body = await fs.readFile(abs, "utf8");
      const sections = extractSections(body);
      const title = extractTitle(body) || file.replace(/\.md$/i, "");
      const fileSlug = slugify(file);
      const id = `${fSlug}/${fileSlug}`;

      playbooks.push({
        id,
        slug: fileSlug,
        title,
        folder,
        folderNumber,
        path: abs,
        relativePath: path.join(folder, file).replace(/\\/g, "/"),
        objective: firstObjectiveLine(sections.Objetivo || ""),
        sections,
        related: parseRelated(sections.Relacionados || ""),
        body,
      });
    }
  }

  playbooks.sort((a, b) =>
    a.id < b.id ? -1 : a.id > b.id ? 1 : 0
  );

  const byId = new Map(playbooks.map((p) => [p.id, p]));
  const byTitle = new Map();
  for (const p of playbooks) {
    byTitle.set(p.title.toLowerCase(), p);
    byTitle.set(p.slug, p);
  }

  const index = buildSearchIndex(playbooks);

  /** @type {{ brainRoot: string, folders: { name: string, count: number }[], playbooks: Playbook[], byId: Map<string, Playbook>, byTitle: Map<string, Playbook>, index: ReturnType<typeof buildSearchIndex>, loadedAt: string }} */
  const catalog = {
    brainRoot,
    folders: folders.map((name) => ({
      name,
      count: playbooks.filter((p) => p.folder === name).length,
    })),
    playbooks,
    byId,
    byTitle,
    index,
    loadedAt: new Date().toISOString(),
  };

  return catalog;
}

/**
 * @param {Awaited<ReturnType<typeof loadCatalog>>} catalog
 * @param {string} query
 */
export function resolvePlaybook(catalog, query) {
  if (!query) return null;
  const q = query.trim();
  if (catalog.byId.has(q)) return catalog.byId.get(q);
  const lower = q.toLowerCase();
  if (catalog.byTitle.has(lower)) return catalog.byTitle.get(lower);

  // allow id without folder if unique slug
  const slugMatches = catalog.playbooks.filter(
    (p) => p.slug === slugify(q) || p.title.toLowerCase() === lower
  );
  if (slugMatches.length === 1) return slugMatches[0];

  // fuzzy: title contains
  const contains = catalog.playbooks.filter(
    (p) =>
      p.title.toLowerCase().includes(lower) ||
      p.id.includes(slugify(q))
  );
  if (contains.length === 1) return contains[0];
  return null;
}

/**
 * @param {Awaited<ReturnType<typeof loadCatalog>>} catalog
 * @param {string} query
 * @param {{ folder?: string, limit?: number }} [opts]
 */
export function searchPlaybooks(catalog, query, opts = {}) {
  return searchIndex(catalog.index, catalog.playbooks, query, opts);
}

export const SECTIONS = [
  "Objetivo",
  "Filosofia",
  "Framework",
  "Aplicações",
  "Erros Comuns",
  "Checklist",
  "Modelo Mental",
  "Relacionados",
];
