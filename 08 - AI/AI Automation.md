# AI Automation

## Objetivo

Automatizar trabalho com LLMs e tools onde o ROI é claro — com gatilhos, políticas, medições e handoff humano — sem confundir automação com “chatbot no Slack”.

Resolve automações frágeis que quebram quietas, custam tokens sem economizar horas e geram risco operacional.

---

## Filosofia

- Automação = trigger → decisão → ação → verificação. Chat é só uma UI.
- Comece pelo processo que já existe (SOP). IA preenche ambiguidade; código faz o determinístico.
- ROI em horas/$/erro evitados > “parece mágico”.
- Idempotência e dead-letter queues importam mais que o modelo do mês.
- Human-in-the-loop nos pontos de irreversibilidade; full-auto onde o erro é barato e reversível.
- Observabilidade de negócio (SLA do processo), não só logs de API.
- Uma automação excelente > dez PoCs abandonados.
- Versionar prompts e policies como código do workflow.

---

## Framework

### 1. Escolha do processo

Score rápido:

| Critério | Alto = bom candidato |
|----------|----------------------|
| Volume | Muitas repetições/semana |
| Variabilidade | Linguagem/ambiguidade real |
| Custo do erro | Baixo a médio (ou mitigável) |
| Dados acessíveis | Sistemas/APIs existem |
| Tempo humano | Caro ou bottleneck |

Se é 100% regras claras → RPA/código sem LLM.

### 2. Anatomia da automação

```
Trigger (evento / cron / inbox)
        ↓
Normalizar input
        ↓
Classificar / extrair (LLM ou regras)
        ↓
Decidir rota (policy)
        ↓
Ações (tools/APIs) com permissões
        ↓
Verificar resultado
        ↓
Approve se risco alto
        ↓
Métricas + dead-letter
```

### 3. Níveis de autonomia

| Nível | Comportamento |
|-------|---------------|
| L0 Suggest | Só rascunho / sugestão |
| L1 Draft-auto | Cria, humano envia |
| L2 Auto + audit | Executa, amostra revisada |
| L3 Full-auto | Executa com guardrails e rollback |

Suba de nível só com success rate e incidente sob controle.

### 4. Guardrails operacionais

- Allowlist de ações e sistemas
- Caps de volume/$/hora
- Schemas de I/O em cada passo
- Retry com backoff; poison message → fila humana
- Correlation id extremo a extremo
- Kill switch

### 5. Medição

- Tempo economizado / ciclo
- Taxa de acerto vs golden / amostragem
- % escalation humano
- Custo por execução
- Incidentes e tempo até remediação

Sem baseline humano pré-automação, “ganho” é fanfic.

### 6. Build path

1. Shadow mode: roda em paralelo, não age
2. Suggest mode: UI/humano confirma
3. Auto em subset (tenant, tipo, horário)
4. Expand + endurecer evals

---

## Aplicações

### SaaS

Automações in-product: tagging, roteamento, fill de campos, digests. Expor status e undo.

### IA

Vender automação de um job vertical com SLA. Preço por run ou por outcome.

### Empresas B2B

Backoffice: invoice → extract → ERP; support triage; contract clause flag. Compliance e audit trail.

### Produtos Digitais

Pipelines de conteúdo/moderation com amostragem humana. Triggers de lifecycle do user.

### Startups

Uma inbox, um outcome (ex.: qualificar lead). Não construa “plataforma de automações” no dia 1.

---

## Erros Comuns

| Erro | Efeito | Correção |
|------|--------|----------|
| Chat sem trigger | Não escala | Event-driven |
| Full-auto cedo | Incidentes | Shadow → suggest |
| Sem dead-letter | Falhas invisíveis | Filas + alertas |
| LLM no passo determinístico | Custo/ruído | Código/regras |
| Sem baseline | ROI inventado | Medir antes |
| Zero kill switch | Escalada de dano | Stop imediato |
| Prompt não versionado | Regressão | Git + deploy |

---

## Checklist

- [ ] Processo e SOP mapeados
- [ ] Baseline de tempo/erro humano
- [ ] Trigger e contratos de dados definidos
- [ ] Separação regras vs LLM
- [ ] Nível de autonomia explícito
- [ ] Permissões e caps de ação
- [ ] Dead-letter + alertas
- [ ] Shadow/suggest antes do full-auto
- [ ] Métricas de ROI e qualidade
- [ ] Kill switch testado

---

## Modelo Mental

```
Processo + baseline
        ↓
Trigger
        ↓
Extract / decide
        ↓
Agir com guardrails
        ↓
Verificar / escalate
        ↓
Medir ROI
```

---

## Relacionados

- AI Agents
- LLM Patterns
- AI Strategy
- AI Products
- Prompt Engineering
- AI UX
- AI Business Opportunities
