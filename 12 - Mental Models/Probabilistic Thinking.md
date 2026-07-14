# Probabilistic Thinking

## Objetivo

Decidir sob incerteza com probabilidades, faixas e valor esperado — em vez de falsas certezas binárias — e atualizar crenças com evidência.

Resolve planos que assumem um único futuro e surpresas tratadas como “azar” em vez de distribuição.

---

## Filosofia

- O mundo de negócios é estocástico; certezas absolutas são teatro.
- Pense em distribuições, não pontos.
- Valor esperado (EV) > storytelling do best case.
- Calibração: se você diz 70%, deveria acertar ~70% das vezes.
- Base rates (referências externas) batem intuição isolada.
- Atualize (Bayes informal) quando o dado chegar.
- Assimetria: upside e downside não são simétricos — modele caudas.
- Probabilístico ≠ paralisia: decida com EV e revise.

---

## Framework

### 1. Substitua frases

| Em vez de | Use |
|-----------|-----|
| “Vai dar certo” | “~60% de bater meta; downside X” |
| “Cliente Y fecha” | “40% / 70% / 20% por estágio” |
| “Sem risco” | “Riscos A/B com P e impacto” |

### 2. Carta de aposta

1. Outcomes possíveis (2–5)
2. Probabilidades (somam ~100%)
3. Payoff de cada um
4. EV = Σ pᵢ × payoffᵢ
5. Ruin/downside não absorvível?
6. Sinal que atualiza as probs

### 3. Base rates

Antes de único case:

- Qual a taxa histórica de deals semelhantes?
- Qual % de features move métrica?
- Qual taxa de sucesso de hires nessa função?

Ajuste a partir da base, não do zero.

### 4. Calibração prática

- Previsões numéricas em forecasting leve (pipeline, ship dates)
- Review: Brier score informal no quarter
- Time aprende a não ser overconfident

### 5. Árvore de decisão sob incerteza

```
Opções
        ↓
Cenários × probs
        ↓
EV + cauda ruim
        ↓
Se ruin possível → hedge ou não
        ↓
Senão → maior EV alinhado à estratégia
        ↓
Atualizar com evidência
```

---

## Aplicações

### SaaS

Forecast de pipeline com probs por estágio; pricing tests com EV de churn vs expansão.

### IA

Incerteza de eval vs produção; risco de regressão; custo esperado de inference.

### Empresas B2B

Deal risk honest; multi-threading; “commit” só com calibração.

### Produtos Digitais

Experimentos: power, falso positivo; priorizar por EV de aprendizado + upside.

### Startups

Runway como distribuição; cenário base/pessimista/otimista com ações gatilho.

---

## Erros Comuns

| Erro | Efeito | Correção |
|------|--------|----------|
| Ponto único no plano | Fragilidade | Faixas + cenários |
| Ignorar base rate | Overconfidence | Âncora externa |
| EV sem ruin | Falência possível | Constraint de sobrevivência |
| Probs estéticas | Teatro | Calibrar / review |
| Não atualizar | Dogma | Sinais pré-definidos |
| Análise eterna | Zero ação | Timebox + decidir |

---

## Checklist

- [ ] Cenários listados
- [ ] Probabilidades explícitas
- [ ] Payoffs estimados
- [ ] EV calculado
- [ ] Downside de ruin checado
- [ ] Base rate consultada
- [ ] Sinais de atualização definidos
- [ ] Previsão registrada para calibração
- [ ] Decisão timeboxada
- [ ] Hedge se assimetria ruim
- [ ] Ligado a Decision Trees quando recorrente
- [ ] Review pós-outcome

---

## Modelo Mental

```
Incerteza
        ↓
Cenários × p × payoff
        ↓
EV + cauda
        ↓
Decidir / hedge
        ↓
Evidência
        ↓
Atualizar probs
```

---

## Relacionados

- Decision Trees
- Second Order Thinking
- Opportunity Cost
- Feedback Loops
- Systems Thinking
- Quarter Planning
- Dashboards
- First Principles
