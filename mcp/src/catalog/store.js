import { loadCatalog } from "./loader.js";
import { config } from "../config.js";

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
 * @param {(info: { playbooks: number }) => void} [onReload]
 */
export async function startWatcher(onReload) {
  if (!config.watch) return null;
  const chokidar = await import("chokidar");
  const watcher = chokidar.watch(
    [
      "01 - */*.md",
      "02 - */*.md",
      "03 - */*.md",
      "04 - */*.md",
      "05 - */*.md",
      "06 - */*.md",
      "07 - */*.md",
      "08 - */*.md",
      "09 - */*.md",
      "10 - */*.md",
      "11 - */*.md",
      "12 - */*.md",
    ],
    {
      cwd: config.brainRoot,
      ignoreInitial: true,
      awaitWriteFinish: { stabilityThreshold: 300, pollInterval: 100 },
    }
  );

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

  watcher.on("add", schedule);
  watcher.on("change", schedule);
  watcher.on("unlink", schedule);
  return watcher;
}
