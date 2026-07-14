# AI Agents

## Objetivo

Usar agentes (plano → ferramentas → ação) só onde autonomia aumenta throughput com risco aceitável — com limites, memória e supervisão claros.

Resolve “agent” como buzzword para chatbot com tools descontroladas.

---

## Filosofia

- Agente = loop de decisão + ferramentas. Sem tools, é só LLM falante.
- Autonomia proporcional ao custo do erro. Email draft ≠ transferência bancária.
- Mais passos ≠ mais inteligência. Agente verboso e lento perde para fluxo guiado.
- Determinismo onde dá (código, regras); LLM onde há ambiguidade.
- Observabilidade é obrigatória: o que fez, por quê, com quais tools.
- Human approve nos commits irreversíveis.
- Avalie task success, não “parecer inteligente”.
- Comece single-agent estreito. Multi-agent é complexidade, não status.

---

## Framework

### 1. Quando usar agente

Use quando:

- Tarefa multi-step com branching
- Precisa consultar sistemas / agir
- O caminho não cabe em um form fixo

Não use quando:

- Um prompt + RAG resolve
- Workflow é linear e conhecido
- Risco alto sem ROI de autonomia

### 2. Anatomia mínima

```
Goal do usuário
        ↓
Planner (plano curto)
        ↓
Tool calls (APIs, busca, código)
        ↓
Observação / resultado
        ↓
Decisão: continuar / perguntar / parar
        ↓
Output + log
```

### 3. Guardrails

| Tipo | Exemplo |
|------|---------|
| Scope | Só tools allowlisted |
| Budget | Max steps / tokens / $ |
| Permissions | Read vs write separado |
| Policy | PII, brand, legal |
| Escalation | Humano se confiança baixa |

### 4. Design de tools

- Tools pequenas, nomes claros, schemas estritos
- Idempotência quando possível
- Erros acionáveis de volta ao agente
- Evite “supertool” que faz tudo

### 5. Memória e estado

- Estado da tarefa (scratchpad)
- Memória de longo prazo só com política (ver Memory Systems)
- Não misture segredos no prompt eterno

### 6. Eval de agentes

Meça:

- Task success rate
- Steps médios / custo
- Taxa de escalation
- Incidentes (ações erradas)

Golden tasks do domínio. Replay regressivo a cada mudança.

---

## Aplicações

### SaaS

Agente que executa no produto (criar registros, preencher, triage) com preview.

### IA

Agente como produto: defina jobs, SLAs de sucesso, e preços por run/outcome.

### Empresas B2B

Comece por research + draft. Write actions com approval. Audit trail para compliance.

### Produtos Digitais

Autonomia em tarefas criativas com checkpoints. Evite agir em nome do user sem UX clara.

### Startups

Um agente, um job, cinco tools. Cresça tools depois do success rate.

---

## Erros Comuns

| Erro | Efeito | Correção |
|------|--------|----------|
| Agent para tudo | Custo/lentidão | Workflow fixo quando basta |
| Sem budget de steps | Loop infinito | Caps rígidos |
| Write sem approve | Incidentes | Permission tiers |
| Tools vagas | Alucinação de ação | Schemas estritos |
| Zero logs | Debug impossível | Trace completo |
| Multi-agent cedo | Caos | Single-agent first |

---

## Checklist

- [ ] Job do agente cabe em uma frase
- [ ] Tools allowlisted e schemas definidos
- [ ] Budget de steps/$ imposto
- [ ] Writes sensíveis com approval
- [ ] Traces/logs acessíveis
- [ ] Success rate em golden tasks
- [ ] Política de PII/memória clara
- [ ] Escalation para humano definida
- [ ] Custo por run conhecido
- [ ] Alternativa não-agente considerada e rejeitada com motivo

---

## Modelo Mental

```
Goal
        ↓
Plano curto
        ↓
Tools + observação
        ↓
Guardrails / budget
        ↓
Approve se preciso
        ↓
Sucesso medido
```

---

## Relacionados

- AI Products
- LLM Patterns
- Memory Systems
- Prompt Engineering
- Context Engineering
- AI Automation
- AI UX
- RAG
