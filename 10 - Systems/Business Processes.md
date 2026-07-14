# Business Processes

## Objetivo

Desenhar e manter processos de negócio ponta a ponta — com donos, SLAs, handoffs e métricas — para que o valor flua com previsibilidade sem depender de heróis.

Resolve trabalho que “acontece”, mas ninguém consegue explicar de ponta a ponta nem onde quebrou.

---

## Filosofia

- Processo serve o outcome do cliente/negócio, não o organograma.
- Handoff é onde a qualidade morre — desenhe a interface.
- Processo leve e usado > processo ISO que ninguém abre.
- Dono do processo ≠ faz tudo; é accountable pelo fluxo.
- Métrica de processo (lead time, WIP, taxa de erro) complementa métrica de negócio.
- Exceção é dado: ou o processo muda ou a exceção vira política.
- Ferramenta segue processo; não o contrário.
- Maturidade cresce com estágio — não copie Fortune 500 no seed.

---

## Framework

### 1. Mapa do processo (SIPOC leve)

Para cada processo crítico:

| Elemento | Conteúdo |
|----------|----------|
| Suppliers | Quem alimenta |
| Inputs | Dados / artefatos |
| Process | Etapas 5–9 |
| Outputs | Entregável |
| Customers | Quem recebe valor |

### 2. Diagrama operacional

```
Trigger
        ↓
Etapa 1 (DRI, SLA)
        ↓
Handoff / critério de aceite
        ↓
Etapa 2 ...
        ↓
Done + métrica
        ↓
Feedback loop
```

### 3. Processos núcleo do Business OS

Priorize tipicamente:

1. Aquisição → opportunity
2. Venda → onboarding
3. Onboarding → valor
4. Sucesso / renovação
5. Product discovery → ship
6. Hire → rampa
7. Financeiro: cash in/out

### 4. Carta do processo (1 página)

1. Nome e outcome
2. Escopo in/out
3. DRI do processo
4. Etapas + SLAs
5. Ferramentas oficiais
6. Métricas e canários
7. Exceções permitidas
8. SOP filhos / playbooks

### 5. Melhoria contínua

| Cadência | Ação |
|----------|------|
| Semanal | Ver filas e bloqueios |
| Mensal | Top 3 falhas de handoff |
| Trimestral | Redesign se throughput ou qualidade caiu |

Regra: mude uma variável por vez; instrumente antes de “reorganizar tudo”.

### 6. Maturidade

1. Ad-hoc (herói)
2. Documentado
3. Executado com disciplina
4. Medido
5. Automatizado onde faz sentido

Não pule estágios.

---

## Aplicações

### SaaS

Trial→paid, expansion, churn save: SLAs claros entre Growth, Sales, CS e Product.

### IA

Data pipeline → modelo → eval → deploy: processo de qualidade antes de “ship no Friday”.

### Empresas B2B

Ciclo RFP/demo/proposta/negociação/handoff CS com criterios de aceite por etapa.

### Produtos Digitais

Content/ops ou marketplace: processos de supply, qualidade e dispute resolution.

### Startups

3–5 processos críticos documentados batem “playbook completo”. O resto pode viver em notas até doer.

---

## Erros Comuns

| Erro | Efeito | Correção |
|------|--------|----------|
| Processo sem DRI | Ninguém conserta | Nomear owner |
| 40 etapas | Ignorado | 5–9 etapas visíveis |
| Sem SLA de handoff | Pingue-pongue | Critério + prazo |
| Tool-first | Processo fráágil | Desenhar fluxo primeiro |
| Otimizar local | Throughput piora | Olhar ponta a ponta |
| Congelar | Divergência real×doc | Review mensal/trimestral |

---

## Checklist

- [ ] Outcome do processo está escrito
- [ ] DRI nomeado
- [ ] Etapas ≤9 com donos
- [ ] Handoffs com critério de aceite
- [ ] SLAs realistas
- [ ] Métrica(s) de fluxo definidas
- [ ] Ferramenta oficial única por etapa
- [ ] Exceções documentadas
- [ ] SOP filhos linkados
- [ ] Review cadenciada
- [ ] Maturidade compatível com estágio
- [ ] Automação só depois de estável

---

## Modelo Mental

```
Trigger de valor
        ↓
Etapas + DRIs
        ↓
Handoffs com aceite
        ↓
Done mensurável
        ↓
Falhas → redesign
        ↓
Automatizar o estável
```

---

## Relacionados

- SOP
- Operating Systems
- Automation Systems
- Execution Framework
- Dashboards
- Operating Rules
- Weekly Review
- Knowledge Management
