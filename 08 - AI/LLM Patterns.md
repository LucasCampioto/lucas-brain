# LLM Patterns

## Objetivo

Escolher e combinar padrões de uso de LLMs (classify, extract, generate, route, tool-use, critique…) com contratos claros de I/O — para sistemas previsíveis, não chats ad hoc.

Resolve reinventar a roda a cada feature e misturar cinco jobs numa única prompt monstro.

---

## Filosofia

- Cada chamada deveria ter um job único e um contrato de saída.
- Compose padrões simples > um “superprompt” onisciente.
- Determinístico no envelope (schema, validação); estocástico no miolo útil.
- Roteie cedo: modelo certo, temperatura certa, tools certas.
- Falha tipada > prosa de desculpas. Sistemas precisam de enums e códigos.
- Cache e structured output são parte do padrão, não afterthought.
- Padronize evals por padrão (classificação ≠ geração criativa).
- Troque o modelo sem reescrever o produto — se o contrato for estável.

---

## Framework

### 1. Catálogo de padrões

| Padrão | Job | Saída típica |
|--------|-----|--------------|
| Classify | Rotular | Enum + confiança |
| Extract | Estruturar fatos | JSON schema |
| Generate | Criar texto/assets | Draft + constraints |
| Transform | Reescrever/formatar | Texto no schema |
| Route | Escolher caminho | Intent / skill |
| Rank / Score | Ordenar opções | Lista scored |
| Plan | Quebrar tarefa | Steps |
| Tool-use | Agir no mundo | Tool calls |
| Critique / Review | Achados vs critérios | Issues tipados |
| Self-consistency | Reduzir erro | Vote / merge |
| Guard / Moderate | Safety & policy | allow/block + reason |
| Summarize | Comprimir | Summary schema |

### 2. Anatomia de um passo

```
Input tipado
        ↓
Validação / normalização
        ↓
Prompt template versionado
        ↓
Modelo + params
        ↓
Output estruturado
        ↓
Validate / repair
        ↓
Próximo passo ou UI
```

### 3. Composição (pipelines)

Exemplos que pagam:

```
Route → Classify risco → Extract → Generate draft → Critique → Human approve
```

```
Retrieve (RAG) → Generate ancorado → Citation check
```

```
Plan → Tool-use loop → Summarize for user
```

Um único chat sem graph só raramente escala.

### 4. Contratos e robustez

- JSON Schema / Zod / Pydantic no output
- Retry com “repair prompt” só para erros de forma
- Temperature baixa em classify/extract; maior em brainstorm com filtros depois
- Idempotency keys em efeitos colaterais

### 5. Escolha de modelo por padrão

| Padrão | Preferência típica |
|--------|--------------------|
| Classify / extract | Modelo menor, barato, rápido |
| Route | Menor ainda ou regras + LLM fallback |
| Generate crítico | Modelo forte + eval |
| Tool-use | Modelo com function calling estável |
| Critique | Forte ou segundo modelo |

Não use frontier pra tudo. Reserve qualidade onde o custo do erro é alto.

### 6. Eval por padrão

- Classify: accuracy / F1 / matriz de confusão
- Extract: field-level exact / partial match
- Generate: rubric humana + LLM-as-judge calibrado
- Route: intent accuracy + custo de misroute
- Tool-use: task success, tool error rate

---

## Aplicações

### SaaS

Biblioteca interna de “skills LLM” reutilizáveis por feature (triage, fill form, summarize thread).

### IA

Produto = orquestração de padrões com SLAs distintos (latência vs qualidade).

### Empresas B2B

Padronize extract/classify em pipelines auditáveis. Generate com review humano.

### Produtos Digitais

Transform + critique no fluxo criativo; user vê diffs, não só texto final.

### Startups

Liste 5 padrões que o produto usa. Implemente contratos. Só então experimente agents.

---

## Erros Comuns

| Erro | Efeito | Correção |
|------|--------|----------|
| Um prompt para 6 jobs | Fragilidade | Split por padrão |
| Texto livre em integração | Parsers quebrando | Schema + validate |
| Frontier pra classificar | Custo sem ganho | Modelo pequeno |
| Sem versionamento | Regressões | Templates + changelog |
| Eval só “vibes” | Drift silencioso | Métricas por padrão |
| Agent onde pipeline basta | Lentidão | Graph fixo |
| Ignorar repair/retry | Falhas de forma | Loop tipado |

---

## Checklist

- [ ] Jobs mapeados para padrões nomeados
- [ ] Contrato de I/O por passo
- [ ] Validação de output em produção
- [ ] Modelo/params escolhidos por padrão
- [ ] Pipeline composto documentado
- [ ] Versionamento de templates
- [ ] Evals e golden sets por padrão
- [ ] Observabilidade (latency, $, error type)
- [ ] Fallback quando o passo falha
- [ ] Alternativa sem LLM considerada onde regra basta

---

## Modelo Mental

```
Job
        ↓
Padrão certo
        ↓
Contrato I/O
        ↓
Modelo adequado
        ↓
Validate / compose
        ↓
Eval do padrão
```

---

## Relacionados

- Prompt Engineering
- AI Agents
- Context Engineering
- RAG
- AI Automation
- AI Products
- AI UX
