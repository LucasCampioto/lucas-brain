# Product Metrics

## Objetivo

Escolher e operar métricas que revelam se o produto cria valor e negócio — ligando comportamento do usuário a decisões de roadmap, não a dashboards de vaidade.

Resolve times que “estão data-driven” mas otimizam o número errado.

---

## Filosofia

- Métrica boa muda comportamento do time. Métrica ruim muda slide.
- Output (ship, velocity) ≠ outcome (ativação, retenção, receita).
- Uma métrica Norte + poucas input metrics vencem 40 KPIs.
- Lagging sem leading = dirigir pelo retrovisor.
- Instrumentação é parte do definition of done.
- Segmentação (ICP, plano, canal) evita média mentirosa.
- Gaming da métrica é sinal de má escolha — redefine, não treine fraudadores.
- Densidade de dado sem decisão é teatro analítico.

---

## Framework

### 1. Pirâmide de métricas

```
Business outcome (receita, NRR, profit)
        ↓
Product outcome (retenção, ativação, expansão)
        ↓
Input / leading (aha rate, syncs/semana, seats invited)
        ↓
Diagnostics (funil, latência, erros, suporte)
```

Decisões de produto moram sobretudo em product outcome + inputs. Diagnostics explicam o “por quê”.

### 2. Escolha a North Star

Critérios:

1. Reflete valor entregue (job completado), não vanity
2. Precede receita de forma crível
3. Time de produto consegue movê-la
4. Dificilmente gameável sem criar valor

Exemplos de forma (não copie cego):

- Weekly tasks concluídas no workflow core
- Seats que atingiram aha em D7
- Documentos “vivos” editados na semana

Evite: page views, signups crus, tokens gerados sem aceite.

### 3. Funil mínimo instrumentado

| Estágio | Exemplo de métrica |
|---------|-------------------|
| Aquisição | Visitantes → signup (qualidade do ICP) |
| Ativação | Signup → aha (definição comportamental) |
| Retenção | D1 / D7 / D30 ou WAU/MAU no core |
| Monetização | Trial → paid, upgrade |
| Expansão | Seats, uso, NRR |
| Referral | Invite aceito útil |

Defina **aha** em evento observável, não em feeling.

### 4. Retenção e coortes

- Coortes por semana de signup / canal / plano
- Retenção do job (ação core), não só login
- Habit moment: frequência esperada vs observada

Login sem ação core é métrica de app aberto, não de produto.

### 5. Cadência de review

| Ritual | Foco |
|--------|------|
| Semanal | Funil + inputs da aposta do ciclo |
| Mensal | Coortes, NRR/expansão, saúde |
| Por ship | Critério de sucesso da feature |
| Incidente | Erro, latência, drop súbito |

Cada aposta material no roadmap leva métrica de sucesso e data de review.

### 6. Evite armadilhas

| Armadilha | Alternativa |
|-----------|-------------|
| Vanity (MAU sem uso) | Ação core / WAU qualificado |
| Média global | Segmento ICP |
| Otimizar early funnel | Checar retenção da coorte |
| Proxies fáceis | Ligar a job / $ |
| Dashboard museum | 5–7 números operacionais |

---

## Aplicações

### SaaS

North Star perto do valor recorrente (ex.: workspaces ativos com ação X). Ativação e time-to-value dominam o early stage; NRR e expansão no later.

### IA

Meça accept rate, edit distance, tarefas concluídas, custo por tarefa ok, não só prompts. Qualidade e margem entram no mesmo quadro.

### Empresas B2B

Além de uso: time-to-first-value no piloto, adoption por seat, health score ligado a renovação. Uso só do champion é alerta.

### Produtos Digitais

Retenção por frequência natural do job. Session length alto pode ser fricção, não engajamento.

### Startups

Poucas métricas. Uma North Star + ativação + retenção + burn/runway. Não construa data team antes de instrumentar o core.

---

## Erros Comuns

| Erro | Sintoma | Correção |
|------|---------|----------|
| Vanity KPIs | Celebração vazia | North Star de valor |
| Sem aha definido | Ativação subjetiva | Evento comportamental |
| Feature sem evento | Debate eterno | Instrumentation no DoD |
| Otimizar signup | Churn D1 | Coorte + retenção |
| Um número para todos | Decisões ruins | Segmentar ICP |
| Gaming | Time hackeia o KPI | Redesenhar métrica |

---

## Checklist

- [ ] North Star definida e ligada ao job
- [ ] 3–5 input metrics da aposta do ciclo
- [ ] Aha e ativação em eventos claros
- [ ] Coortes de retenção no uso core (não só login)
- [ ] Funil mínimo instrumentado ponta a ponta
- [ ] Features materiais com sucesso métrico + review
- [ ] Segmentação por ICP / plano / canal
- [ ] Dashboard operacional curto (não museu)
- [ ] Qualidade/latência/erros no radar
- [ ] Ritual semanal/mensal com decisões explícitas

---

## Modelo Mental

```
Job → evidência de valor (evento)
        ↓
North Star + inputs
        ↓
Instrumentar → observar coortes
        ↓
Diagnosticar funil
        ↓
Decidir (dobrar / cortar / experimentar)
```

---

## Relacionados

- [[Product Strategy]]
- [[Product Roadmap]]
- [[Feature Prioritization]]
- [[Product Discovery]]
- [[Product-Led Growth]]
- [[Hook Model]]
- [[AI First Products]]
- [[Jobs To Be Done]]
