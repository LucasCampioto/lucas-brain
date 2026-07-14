# Context Engineering

## Objetivo

Montar, filtrar e orquestrar o contexto que o modelo vê em cada chamada — para maximizar relevância, fidelidade e custo/token — em vez de despejar documentos e torcer.

Resolve a ilusão de que “mais contexto = mais inteligência” e o sintoma clássico: resposta certeira na demo, aleatória com documento longo.

---

## Filosofia

- Contexto é o produto invisível. Quase todo ganho de qualidade vem daqui, não do prompt genérico.
- O modelo só sabe o que está na janela. Se não caber, não existe.
- Relevância > volume. Token ocupado por ruído é token roubado da tarefa.
- Separar: instruções estáveis, estado da tarefa, evidências recuperadas, dados do usuário.
- Ordenação importa. Início e fim da janela costumam pesar mais — use isso de propósito.
- Cite fontes no contexto quando a resposta precisa ser auditável; inventar citação é pior que omitir.
- Compactar ≠ sumarizar cego. Preserve fatos críticos; descarte floreio.
- Meça: recall da evidência certa + fidelidade da resposta + custo médio por request.

---

## Framework

### 1. Camadas de contexto

| Camada | Conteúdo | Longevidade |
|--------|----------|-------------|
| System / policy | Papel, limites, formato | Estável, versionada |
| Task state | Objetivo, passos, decisões | Por sessão/run |
| Retrieved | Chunks, rows, tickets | Por query |
| User / entity | Preferências, perfil, conta | Com política |
| Tools results | Saídas de APIs | Efêmero, tipado |

Nunca misture everything numa string amorfa.

### 2. Pipeline padrão

```
Query / evento
        ↓
Intent + entidades
        ↓
Seleção de fontes (allowlist)
        ↓
Retrieve / filter / rank
        ↓
Budget de tokens por camada
        ↓
Pack (ordem + marcadores)
        ↓
Chamada ao modelo
        ↓
Eval: usou a evidência certa?
```

### 3. Budget consciente

1. Reserve tokens para: system + output esperado + margem de geração.
2. O resto é “working set” de evidências.
3. Se não cabe: rank → compact → pergunta de esclarecimento — nesta ordem.
4. Logue `tokens_por_camada` em todo request crítico.

### 4. Packing (como empacotar)

- Marcadores explícitos: `<policy>`, `<evidence id=…>`, `<user_msg>`.
- Evidências com id/fonte/data quando relevante.
- Instruções de uso: “só use evidence; se faltar, diga o que falta”.
- Coloque regras críticas e o pedido do usuário em posições de alta atenção (início/fim).
- Remova duplicatas e near-duplicates antes dogenário.

### 5. Compactação com regra

| Técnica | Quando |
|---------|--------|
| Truncar por score | Muitos chunks ok-ish |
| Extractive keep | Precisa de quotes/números |
| Summary com schema | Histórico longo de chat |
| Slide window | Conversas longas |
| Hierarchical map-reduce | Corpus enorme, síntese |

Teste regressão: fatos críticos não podem desaparecer no resumo.

### 6. Eval de contexto

Golden sets com: query → evidências esperadas → resposta aceitável.

Meça:

- Context precision / recall (veio o chunk certo?)
- Attribution (resposta ancorada?)
- Negatives (saber dizer “não sei”)
- Custo e latência do packing

---

## Aplicações

### SaaS

Contexto por tenant: só docs/permissoões da conta. Pack por feature (support vs search vs write).

### IA

Contexto é feature: “working set” editável, fontes visíveis, toggle de modo (rápido vs profundo).

### Empresas B2B

Política de retenção + classificação de docs. Contexto por papel (jurídico ≠ vendas). Audit trail do que entrou na chamada.

### Produtos Digitais

Estado da criação (brief, drafts, brand kit) como camadas tipadas — não um chat infinito sem estrutura.

### Startups

Comece com packing manual e ranking simples. Só invista em graph/hierarchy quando o eval mostrar teto.

---

## Erros Comuns

| Erro | Efeito | Correção |
|------|--------|----------|
| Dump de PDF inteiro | Ruído + perda de foco | Chunk + rank + budget |
| Misturar system e data | Injection / inconsistência | Camadas separadas |
| Sumarizar sem schema | Fatos sumindo | Extractive + checks |
| Mesmo pack pra tudo | Qualidade irregular | Templates por job |
| Sem citação/fonte | Alucinação “bonita” | IDs na evidence |
| Ignorar permissões | Data leak | Filter pré-retrieve |
| Otimizar só o prompt | Plateau | Instrumentar contexto |

---

## Checklist

- [ ] Camadas de contexto nomeadas e versionadas
- [ ] Budget de tokens por camada definido
- [ ] Fontes allowlisted e filtradas por ACL
- [ ] Rank/filter antes de empurrar pro modelo
- [ ] Marcadores e ids nas evidências
- [ ] Política de “não inventar” explícita
- [ ] Compactação testada em golden facts
- [ ] Métricas de context precision/recall
- [ ] Logs de tokens e fontes usadas
- [ ] Template de pack por job (não um genérico)

---

## Modelo Mental

```
Intent
        ↓
Fontes permitidas
        ↓
Retrieve + rank
        ↓
Budget / compact
        ↓
Pack ordenado
        ↓
Modelo + atribuição
```

---

## Relacionados

- Prompt Engineering
- RAG
- Memory Systems
- AI Agents
- LLM Patterns
- AI UX
- Multimodal AI
