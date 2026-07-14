# AI Products

## Objetivo

Desenhar produtos de IA que entregam outcome confiável no job do usuário — com UX, pricing e qualidade que sustentam retenção.

Resolve demos virais que não viram hábito nem receita.

---

## Filosofia

- Produto de IA vende resultado, não “acesso a um modelo”.
- Confiabilidade > criatividade máxima na maioria dos B2B jobs.
- O usuário precisa de controle, preview e undo — magia opaca gera medo.
- Escopo estreito e excelente vence assistente genérico medíocre.
- Feedback do uso é feature: coleta, eval, melhoria.
- Empty state e defaults determinam ativação mais que o backbone.
- Preço alinhado a valor e custo variável.
- Latency e falha são parte da experiência; desenhe para elas.

---

## Framework

### 1. Job → outcome → interface

```
Job crítico
        ↓
Outcome mensurável
        ↓
Inputs mínimos do usuário
        ↓
Sistema (prompt/RAG/tools)
        ↓
Output editável + confiança
        ↓
Feedback → melhoria
```

### 2. Escopo do v1

Defina:

- O que sempre fazemos bem
- O que recusamos / encaminhamos a humano
- Critério de “bom o suficiente” (eval)

Narrow wedge. Expanda depois da retenção.

### 3. Camadas do produto

| Camada | Função |
|--------|--------|
| UX | Intent, controle, revisão |
| Orchestration | Routes, tools, memory |
| Retrieval / data | Contexto certo |
| Model | Geração / raciocínio |
| Evals / telemetry | Qualidade e custo |

Tratar só a camada Model é amadorismo.

### 4. Trust UX (mínimo)

- Mostrar fontes quando houver grounding
- Permitir editar antes de commit
- Estados: thinking, partial, failed, low-confidence
- Histórico e versions
- Cap de ação destrutiva (approve)

### 5. Qualidade em produção

1. Golden set do job
2. Eval online (thumbs, edits, regenerate)
3. Error budget / alertas
4. Prompt/versionamento como release

### 6. Monetização

Ligue preço a:

- Seats + usage inclusos
- Outcome packs
- Premium quality / velocidade / limites

Surpresa de fatura mata o produto mesmo com magia boa.

---

## Aplicações

### SaaS

Copilot no workflow existente. Deep link do insight à ação no produto.

### IA

Produto é o sistema ponta a ponta. Differentials: dados, UX de confiança, integrations.

### Empresas B2B

Admin, audit log, SSO, data residency cedo se ACV exigir. Piloto com success criteria escritos.

### Produtos Digitais

Geração com edição prazerosa. Templates que ensinam o job.

### Startups

Um outcome wow em <2 minutos. Resto do roadmap depois do aha.

---

## Erros Comuns

| Erro | Efeito | Correção |
|------|--------|----------|
| Chat genérico como produto | Commodity | Workflow específico |
| Sem edição/undo | Desconfiança | Trust UX |
| Launch sem eval | Churn surpresa | Golden set |
| Ignorar latência | Abandono | Streaming + expectativas |
| Feature dump de modelos | Complexidade | Escopo do job |
| Pricing só flat com custo variável | Margem morta | Usage-aware packaging |

---

## Checklist

- [ ] Outcome do v1 cabe em uma frase
- [ ] Trust UX (edit, fontes, undo) no core flow
- [ ] Evals e telemetria ativos
- [ ] Custo por outcome conhecido
- [ ] Latency aceitável para o job
- [ ] Pricing alinhado a uso/valor
- [ ] Recusas e limites explícitos
- [ ] Feedback loop melhora o sistema
- [ ] Ativação até primeiro outcome medido
- [ ] Roadmap segue retenção, não hype de modelo

---

## Modelo Mental

```
Job → outcome
        ↓
Escopo estreito
        ↓
Sistema em camadas
        ↓
Trust UX
        ↓
Evals + custo
        ↓
Retenção e preço
```

---

## Relacionados

- AI Strategy
- AI UX
- Prompt Engineering
- RAG
- LLM Patterns
- AI Agents
- Pricing
- Activation
