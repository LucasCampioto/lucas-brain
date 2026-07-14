import { describe, it } from "node:test";
import assert from "node:assert/strict";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { loadCatalog, resolvePlaybook, extractSections } from "../src/catalog/loader.js";

const brainRoot = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  "../.."
);

describe("catalog loader", () => {
  it("loads playbooks from numbered folders", async () => {
    const catalog = await loadCatalog(brainRoot);
    assert.ok(catalog.folders.length >= 12);
    assert.ok(catalog.playbooks.length >= 100);
    assert.equal(catalog.playbooks.length, catalog.byId.size);
  });

  it("resolves visibility engine playbook", async () => {
    const catalog = await loadCatalog(brainRoot);
    const p =
      resolvePlaybook(catalog, "branding/visibility-engine") ||
      resolvePlaybook(catalog, "Visibility Engine");
    assert.ok(p, "expected Visibility Engine");
    assert.match(p.title, /Visibility/i);
    assert.ok(p.body.length > 100);
  });

  it("extracts sections", () => {
    const md = `# Title\n\n## Objetivo\n\nFoo bar.\n\n## Filosofia\n\n- a\n`;
    const sections = extractSections(md);
    assert.equal(sections.Objetivo.includes("Foo"), true);
    assert.ok(sections.Filosofia);
  });
});
