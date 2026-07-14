# Automation Systems

## Objetivo

Remover trabalho repetível, propenso a erro e de baixo aprendizado — com automações confiáveis, observáveis e reversíveis — para liberar atenção humana ao que exige julgamento.

Resolve times “ocupados” digitando, syncando planilhas e reenviando o mesmo e-mail.

---

## Filosofia

- Automatize o estável; padronize o caótico antes.
- Automação sem dono é bomba-relógio.
- Observabilidade > cleverness. Se quebrou e ninguém sabe, é pior que manual.
- Comece pelo ROI de tempo/risco, não pela ferramenta da moda.
- Humano no loop quando o custo do erro for alto.
- Idempotência e retry consciente batem “fire and forget”.
- Documente o “porquê” da automação; senão ninguém ousa mexer.
- Automação multiplica processo ruim — corrija o processo primeiro.

---

## Framework

### 1. Fila de candidatos

Liste tarefas mensais com:

| Critério | Pergunta |
|----------|----------|
| Frequência | ≥ semanal? |
| Regras | São claras e estáveis? |
| Erro | Manual falha com custo? |
| Aprendizado | Humano ainda aprende fazendo? |
| Dados | Inputs estruturados? |

Se regras instáveis → SOP primeiro. Se humano aprende muito → não automatize ainda.

### 2. Matriz priorizar

```
Alto volume × regras claras × baixo risco de erro catastrófico
        ↓
Primeiro candidato
```

Alto risco (billing, acesso, comunicação legal) → automação com aprovação humana.

### 3. Camadas de automação

1. **Templates / snippets** (baixo risco)
2. **Zap/n8n/Make** conectando ferramentas
3. **Scripts** no repositório com testes
4. **Workflows no produto** (feature)
5. **Agentes de IA** com evals e limites

Escale a complexidade só quando a camada anterior saturou.

### 4. Contrato da automação

Todo job precisa de:

1. Trigger e pré-condições
2. Inputs / outputs
3. DRI (humano)
4. Alertas de falha
5. Runbook de recovery
6. Critério de “desligar”

### 5. Ciclo de vida

```
Processo estável (SOP)
        ↓
Prova manual 10×
        ↓
Automação mínima
        ↓
Monitorar 2 semanas
        ↓
Endurecer (retry, idempotência)
        ↓
Revisar trimestralmente
```

### 6. Métricas

- Horas/mês economizadas (realistas)
- Taxa de falha / retries
- Tempo até detecção de falha
- Exceções manuais restantes

---

## Aplicações

### SaaS

Provisioning, trial reminders, churn alerts, sync CRM↔billing, digest de métricas — com cuidado em qualquer e-mail ao cliente.

### IA

Pipelines de ingestão, eval noturnos, alertas de drift/custo, fine-tune jobs — sempre com gates de qualidade e custo.

### Empresas B2B

Lead routing, SLA de resposta, geração de QBR drafts, handoffs — mantenha override comercial.

### Produtos Digitais

Moderation queues, notificação inteligente, A/B harness — instrumente falsos positivos.

### Startups

Automatize só o que dói toda semana. Spreadsheet + Zap bem feitas batem plataforma “enterprise” cedo demais.

---

## Erros Comuns

| Erro | Efeito | Correção |
|------|--------|----------|
| Automatizar caos | Amplifica erro | SOP primeiro |
| Sem alerta | Falha silenciosa | Notify + healthcheck |
| Sem DRI | Ninguém conserta | Nomear dono |
| Over-engineering | Atraso + fragilidade | Camada mínima |
| IA sem limites | Alucinação em produção | Avaliação + humano no loop |
| Nunca revisar | Automação obsoleta | Review trimestral |

---

## Checklist

- [ ] Processo documentado antes de automatizar
- [ ] Prova manual repetida
- [ ] ROI estimado (tempo/risco)
- [ ] DRI atribuído
- [ ] Falhas geram alerta acionável
- [ ] Recovery runbook existe
- [ ] Idempotência/retry pensados
- [ ] Ambiente de teste quando crítico
- [ ] “Kill switch” conhecido
- [ ] Não toca billing/acesso sem gate humano
- [ ] Revisada no último trimestre
- [ ] Ligada a SOP/Business Process

---

## Modelo Mental

```
Dor repetível
        ↓
Padronizar (SOP)
        ↓
Validar manual
        ↓
Automatar mínimo
        ↓
Observar + alertar
        ↓
Revisar / matar
```

---

## Relacionados

- SOP
- Business Processes
- Operating Systems
- Knowledge Management
- Execution Framework
- Dashboards
- Operating Rules
- Decision Trees
