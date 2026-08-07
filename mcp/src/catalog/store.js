import fs from "node:fs";
import fsp from "node:fs/promises";
import path from "node:path";
import { loadCatalog } from "./loader.js";
import { config } from "../config.js";

const FOLDER_RE = /^\d{2} - /;

/** @type {Awaited<ReturnType<typeof loadCatalog>> | null} */
let catalog = null;

export async function getCatalog() {
  if (!catalog) {
    catalog = await loadCatalog(config.brainRoot);
  }
  return catalog;
}

export async function reindex() {
  catalog = await loadCatalog(config.brainRoot);
  return catalog;
}

/**
 * Optional hot-reload when playbooks change.
 * Uses native fs.watch per numbered folder (chokidar v4 dropped globs).
 * @param {(info: { playbooks: number }) => void} [onReload]
 * @returns {Promise<{ close: () => Promise<void> } | null>}
 */
export async function startWatcher(onReload) {
  if (!config.watch) return null;

  const entries = await fsp.readdir(config.brainRoot, { withFileTypes: true });
  const folders = entries
    .filter((e) => e.isDirectory() && FOLDER_RE.test(e.name))
    .map((e) => e.name);

  if (!folders.length) {
    console.error("[lucas-brain] watcher: no numbered folders found");
    return null;
  }

  let timer = null;
  const schedule = () => {
    clearTimeout(timer);
    timer = setTimeout(async () => {
      try {
        const c = await reindex();
        onReload?.({ playbooks: c.playbooks.length });
      } catch (err) {
        console.error("[lucas-brain] reindex failed:", err);
      }
    }, 400);
  };

  /** @type {fs.FSWatcher[]} */
  const watchers = [];
  for (const folder of folders) {
    const dir = path.join(config.brainRoot, folder);
    try {
      const w = fs.watch(dir, (_event, filename) => {
        if (!filename || !String(filename).toLowerCase().endsWith(".md")) return;
        schedule();
      });
      w.on("error", (err) => {
        console.error(`[lucas-brain] watcher error (${folder}):`, err.message);
      });
      watchers.push(w);
    } catch (err) {
      console.error(`[lucas-brain] failed to watch ${folder}:`, err);
    }
  }

  return {
    close: async () => {
      clearTimeout(timer);
      for (const w of watchers) w.close();
    },
  };
}
