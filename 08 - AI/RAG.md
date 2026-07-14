# RAG

## Objetivo

Aumentar respostas com evidência recuperável do seu corpus — com indexing, retrieval e grounding mensuráveis — em vez de “jogamos PDFs num vector DB”.

Resolve alucinação com ar de autoridade e search que puxa o chunk errado com confiança alta.

---

## Filosofia

- RAG é search + geração ancorada. Se o retrieve falha, o LLM só maquia o erro.
- Corpus e permissões são produto. Embeddings são detalhe.
- Chunking é decisão de domínio, não default de lib.
- Hybrid search (lexical + vetorial) quase sempre bate “só cosine”.
- Cite ou recuse. “Parecer informado” sem fonte é dívida.
- Atualização do índice é feature operacional: freshness importa.
- Avalie retrieval antes de culpar o modelo.
- RAG simples bem feito > agentic RAG caríssimo com eval zero.

---

## Framework

### 1. Quando usar RAG

Use quando:

- Respostas dependem de docs/dados privados ou mutáveis
- Precisa de atribuição / citação
- O conhecimento não cabe (ou não deve) no prompt estável

Não use quando:

- O job é transformação pura (rewrite, classificar texto já dado)
- Precisa de ação em sistemas (aí é tools/agente)
- O corpus é minúsculo e cabe inteiro com qualidade

### 2. Pipeline

```
Corpus (com ACL)
        ↓
Parse / limpeza / metadados
        ↓
Chunk + enrich
        ↓
Index (lexical + vector + filtros)
        ↓
Query → rewrite / expand (se preciso)
        ↓
Retrieve → rerank
        ↓
Pack no contexto
        ↓
Gerar ancorado + citar
        ↓
Eval retrieval + answer
```

### 3. Chunking que funciona

| Princípio | Prática |
|-----------|---------|
| Unidade semântica | Seção, FAQ, cláusula, ticket — não N tokens cegos |
| Overlap só se precisar | Evite duplicata massiva |
| Metadados ricos | Título, data, produto, tenant, ACL, tipo |
| Parent/child | Retrieve child, mostre parent se contexto faltar |
| Tabelas/código | Parsers específicos; não force texto fluente |

### 4. Retrieval

1. Normalizar query (idioma, acrônimos do domínio)
2. Filtros duros primeiro (tenant, produto, data)
3. Hybrid: BM25/keyword + embeddings
4. Rerank (cross-encoder ou modelo leve) no top-N
5. Diversidade: evitar 5 chunks do mesmo parágrafo

Query rewrite ajuda em conversas; cuidado para não driftar do pedido.

### 5. Grounding e geração

- Instrua: responder só com evidência; listar ids/citas
- Se evidência insuficiente → perguntar ou “não encontrado”
- Separar “resumo do fonte” de “opinião do assistente”
- Para números/datas: extractive bias (copie o que está no doc)

### 6. Operação do índice

- Incremental ingest + reprocess de docs mudados
- Tombstones / delete propagado
- Versionamento de embedding model (reindex planificado)
- Observabilidade: queries com zero hits, docs órfãos, lag de freshness

### 7. Eval (nessa ordem)

1. **Retrieval**: recall@k, MRR, nDCG em golden queries
2. **Answer**: faithfulness, correctness, citation accuracy
3. **Negatives**: perguntas fora do corpus devem recusar
4. **ACL**: usuário A não recupera doc de B

Só depois otimize prompts/modelos.

---

## Aplicações

### SaaS

Knowledge base por workspace. Sync de Notion/Drive/tickets. Cite link nativo no produto.

### IA

RAG como motor + UX de fontes clicáveis. Modos: “só docs” vs “docs + web”.

### Empresas B2B

Governança: classificação, retenção, e-discovery. Separar corpora jurídico/ops/support.

### Produtos Digitais

RAG sobre conteúdo do usuário (notas, projetos) com privacidade explícita.

### Startups

Um corpus, um tipo de doc, hybrid + rerank simples. Adie graphRAG até o teto do baseline.

---

## Erros Comuns

| Erro | Efeito | Correção |
|------|--------|----------|
| Chunks aleatórios | Misses | Chunk por unidade semântica |
| Só vector search | Falha em IDs/nomes | Hybrid |
| Sem metadados/ACL | Leak / ruído | Filtros duros |
| Citar sem validar | Fake citations | IDs do retrieve only |
| Índice stale | Respostas velhas | Sync + freshness SLOs |
| Avaliar só o LLM | Otimização errada | Eval de retrieval first |
| RAG agentic cedo | Custo/latência | Baseline sólido |

---

## Checklist

- [ ] Corpus e ownership definidos
- [ ] ACL aplicada no retrieve (não só na UI)
- [ ] Chunking alinhado ao domínio
- [ ] Metadados suficientes pra filtro
- [ ] Hybrid + rerank em produção ou justificado
- [ ] Pack com budget e citations
- [ ] Política de recusa sem evidência
- [ ] Golden set de queries do domínio
- [ ] Métricas de retrieval e faithfulness
- [ ] Pipeline de ingest/update/delete

---

## Modelo Mental

```
Corpus + ACL
        ↓
Chunk + metadados
        ↓
Index híbrido
        ↓
Retrieve + rerank
        ↓
Pack ancorado
        ↓
Resposta + citação / recusa
```

---

## Relacionados

- Context Engineering
- Memory Systems
- Prompt Engineering
- AI Agents
- LLM Patterns
- AI Products
- Multimodal AI
