# Dashboards

## Objetivo

Criar visão acionável da saúde do negócio e das iniciativas — poucas métricas certas, no ritmo certo — para decidir mais rápido sem afogar em gráficos.

Resolve “data theater”: 40 charts que ninguém usa para mudar comportamento na semana.

---

## Filosofia

- Dashboard existe para decidir, não para impressionar.
- Menos métricas, mais ownership.
- Leading indicators + lagging; só lagging chega tarde.
- Definição única de cada métrica (fonte da verdade).
- Ritmo importa: diário ≠ semanal ≠ trimestral.
- Se a métrica não tem dono nem limiar, é decoração.
- Contexto > número absoluto (cohort, baseline, meta).
- Privacidade e acesso: nem todo dado é de todo mundo.

---

## Framework

### 1. Pirâmide de dashboards

```
Executivo (semanal/mensal): 5–8 North Stars + saúde
        ↓
Área (semanal): Growth / Product / CS / Finance
        ↓
Operacional (diário): filas, erros, burn de custo
```

Não misture os três no mesmo canvas sem abas claras.

### 2. Carta da métrica

Para cada KPI:

1. Nome e definição precisa
2. Fórmula / filtro
3. Fonte (sistema)
4. DRI
5. Cadência de olhar
6. Limiar verde/amarelo/vermelho
7. Ação típica quando vermelho

### 3. Conjunto mínimo (exemplo SaaS)

| Nível | Exemplos |
|-------|----------|
| Aquisição | Visitas qualificadas, SQLs, CAC |
| Ativação | Time-to-value, % ativados |
| Retenção | Logo churn, NRR |
| Receita | MRR, pipeline coverage |
| Entrega | Ship rate, lead time |
| Qualidade | Bugs P0, uptime, suporte |

Adapte ao modelo (IA: custo/request, eval pass rate).

### 4. Design anti-teatro

- Uma pergunta por seção do dashboard
- Tendência + comparação com meta/período
- Anotações de eventos (“lançamos X”)
- Evite dual-axes e vanity metrics
- Mobile só se alguém realmente olha no celular

### 5. Ritual de uso

```
Abrir dashboard na cadência
        ↓
Desvios vs limiar
        ↓
Hipótese causal (1 frase)
        ↓
Ação ou investigação dono
        ↓
Registrar no Weekly Review
```

Dashboard sem ritual = wallpaper.

### 6. Higiene

- Auditoria trimestral: o que ninguém abriu?
- Versionar mudanças de definição
- Separar “debug exploration” de “dashboard oficial”

---

## Aplicações

### SaaS

Board: MRR, NRR, churn, pipeline, burn. Product: activation, feature adoption, support load.

### IA

Custo de inference, latency p95, eval suites, % humanos no loop, abuso/safety alerts.

### Empresas B2B

Pipeline por estágio, win rate, cycle time, forecast accuracy, capacity de CS.

### Produtos Digitais

DAU/WAU com qualidade (não só vanity), funis, retention D1/D7/D30, contribuição de canais.

### Startups

Uma página. Se precisa de Looker complexo no dia 30, você está postergando falar com cliente.

---

## Erros Comuns

| Erro | Efeito | Correção |
|------|--------|----------|
| 40 KPIs | Paralisia | Cortar para decisões reais |
| Sem definição | Números divergentes | Carta da métrica |
| Só vanity | Otimização falsa | Amarrar a receita/retention/custo |
| Sem limiar | Discussão eterna | Verde/amarelo/vermelho |
| Sem ritual | Dashboard morto | Weekly Review |
| Fonte instável | Perda de confiança | Donos + QA de dados |

---

## Checklist

- [ ] Cada métrica tem definição escrita
- [ ] Fonte única acordada
- [ ] DRI por métrica/área
- [ ] Limiares definidos
- [ ] Cadência de review alinhada
- [ ] Leading + lagging balanceados
- [ ] Eventos anotáveis
- [ ] Acesso/roles corretos
- [ ] Auditoria do que não é usado
- [ ] Ligado ao Quarterly OKRs / bets
- [ ] Sem dual-axis enganoso
- [ ] Ação típica no vermelho documentada

---

## Modelo Mental

```
Pergunta de decisão
        ↓
Métrica com definição + limiar
        ↓
Dashboard no ritmo certo
        ↓
Desvio → hipótese → ação
        ↓
Weekly / Quarter review
```

---

## Relacionados

- Weekly Review
- Quarter Planning
- Execution Framework
- Business Processes
- Operating Systems
- Automation Systems
- Knowledge Management
- Decision Trees
