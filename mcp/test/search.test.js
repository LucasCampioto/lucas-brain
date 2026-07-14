import { describe, it } from "node:test";
import assert from "node:assert/strict";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { loadCatalog, searchPlaybooks } from "../src/catalog/loader.js";
import { tokenize } from "../src/catalog/search.js";

const brainRoot = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  "../.."
);

describe("search", () => {
  it("tokenizes text", () => {
    const t = tokenize("Precificação e Pricing!");
    assert.ok(t.includes("pricing") || t.includes("precificacao"));
  });

  it("finds pricing-related playbooks", async () => {
    const catalog = await loadCatalog(brainRoot);
    const results = searchPlaybooks(catalog, "pricing precificacao", {
      limit: 5,
    });
    assert.ok(results.length > 0);
    assert.ok(
      results.some(
        (r) =>
          r.id.includes("pricing") ||
          /pric/i.test(r.title) ||
          /preci/i.test(r.title)
      )
    );
  });
});
