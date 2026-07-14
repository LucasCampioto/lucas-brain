# Growth Dashboard

## Objetivo

Ter um painel vivo — poucas métricas certas — que mostra saúde do crescimento, gargalos e impacto de experimentos em tempo de decisão.

Resolve slides bonitos, planilhas mortas e “mês passado a gente olhou”.

---

## Filosofia

- Dashboard serve decisão. Se não muda ação, é decoração.
- Poucas métricas bem definidas > dezenas de gráficos.
- Leading + lagging juntos. Só receita atrasada vira direção de carro pelo espelho.
- Cohort e segmento obrigatórios. Totais mentem.
- Uma fonte da verdade. Três ferramentas com números diferentes matam confiança.
- Atualização automática. Manual semanal vira abandono.
- Dashboard sem dono apodrece. Dashboard sem ritual é wallpaper.
- Clareza > estética. Mas ilegível também não serve.

---

## Framework

### 1. Camadas do painel

```
Nível 1: NSM + receita / NRR (saúde)
        ↓
Nível 2: AARRR (gargalos)
        ↓
Nível 3: Inputs por squad / canal
        ↓
Nível 4: Experimentos ativos + resultados
```

Executivo vive no 1–2. Operação no 3–4. Não misture tudo numa sopa.

### 2. Métricas mínimas recomendadas

| Bloco | Exemplos |
|-------|----------|
| Valor | NSM, core action rate |
| Funil | Signup → aha → retained |
| Receita | New MRR, churn, NRR, ARPU |
| Aquisição | CAC, payback, qualidade por canal |
| Experimentos | Wins/kills, learning velocity |

Guardrails: suporte, erro, custo IA, NPS/CSAT se relevante.

### 3. Regras de design

1. Definição da métrica escrita (hover ou doc link)
2. Comparação: WoW / MoM / vs meta
3. Cohort charts para retenção
4. Filtros: plano, canal, região, ICP
5. Alertas quando sai da banda

### 4. Rituales

| Cadência | Quem | Foco |
|----------|------|------|
| Diário | Growth ops | Anomalias |
| Semanal | Product + Growth | Funil + experimentos |
| Mensal | Leadership | NSM, NRR, canais |
| Trimestre | Company | Estratégia de gargalo |

### 5. Implementação pragmática

1. Liste decisões que o dashboard deve habilitar
2. Escolha eventos → warehouse / analytics
3. Monte v0 em 1–2 semanas (feio ok)
4. Valide números contra billing/CRM
5. Só então polish

Ferramenta importa menos que definição e confiança.

### 6. Anti-vanidade

Remova se:

- Ninguém usou em 30 dias
- Não tem dono
- Não liga a NSM/AARRR
- Incentiva gaming óbvio

---

## Aplicações

### SaaS

MRR + activation + retention cohorts no mesmo lugar. Sales e product veem o mesmo signup→paid.

### IA

Inclua custo por job, latência, taxa de regenerate/reject como guardrail ao growth de usage.

### Empresas B2B

Pipeline + product usage da conta. Health e expansion no mesmo radar.

### Produtos Digitais

Retention curves e viral K ao lado de install. Spend só com qualidade do cohort.

### Startups

Um Notion/Metabase simples batendo certo > BI enterprise vazio. Cresça o painel com o time.

---

## Erros Comuns

| Erro | Efeito | Correção |
|------|--------|----------|
| 80 gráficos | Paralisia | Camadas 1–4 |
| Números divergentes | Desconfiança | Fonte única |
| Só vanity | Otimização errada | NSM + guardrails |
| Sem cohort | Ilusão de growth | Retenção por entrada |
| Sem ritual | Abandono | Cadência na agenda |
| Manual eterno | Dado podre | Automação mínima |

---

## Checklist

- [ ] NSM e AARRR no nível executivo
- [ ] Definições documentadas e estáveis
- [ ] Cohorts de retenção visíveis
- [ ] Canais comparados por qualidade, não só volume
- [ ] Experimentos aparecem no painel
- [ ] Alertas para anomalias críticas
- [ ] Ritual semanal de review
- [ ] Dono do dashboard nomeado
- [ ] Números reconciliam com billing
- [ ] Métricas mortas removidas trimestralmente

---

## Modelo Mental

```
Decisões necessárias
        ↓
Métricas mínimas
        ↓
Eventos confiáveis
        ↓
Painel em camadas
        ↓
Ritual de review
        ↓
Ação no gargalo
```

---

## Relacionados

- North Star Metric
- Pirate Metrics
- Growth Experiments
- Experimentation
- Retention
- Activation
- Growth Systems
- Growth Automation
