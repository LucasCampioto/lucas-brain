# Experimentation

## Objetivo

Instalar um sistema de aprendizado rápido: hipóteses claras, testes baratos, decisão kill/scale — para growth deixar de ser opinião com budget.

Resolve roadmaps e campanhas “porque achamos que sim”.

---

## Filosofia

- Experimentar não é lançar feature e torcer. É questionar com critério.
- Hipótese escrita > ideia no Slack.
- Velocidade de ciclo de aprendizado vence tamanho do teste no early.
- Sem instrumentação, não há experimento — há storytelling.
- Falha com aprendizado é ativo. Ship and pray é dívida.
- Priorize esperança esperada: impacto × confiança / esforço.
- Um teste por vez no mesmo funil quando possível. Confundir é fácil.
- Cultura: celebrar kill decision. Dobrar só com evidência.

---

## Framework

### 1. Template de hipótese

```
Acreditamos que [mudança]
para [segmento]
vai [métrica]
porque [motivo / insight].
Sabemos que deu certo se [critério].
Sabemos que falhou se [critério].
```

Sem critério de sucesso/falha, não comece.

### 2. Funil de experimentos

```
Insight (dado + conversa)
        ↓
Hipótese
        ↓
Priorização (ICE / PIE simples)
        ↓
Design do teste (mínimo viável)
        ↓
Run + QA de tracking
        ↓
Resultado + decisão
        ↓
Documentar (o que aprendemos)
```

### 3. Tipos de teste (do barato ao caro)

| Tipo | Quando | Limite |
|------|--------|--------|
| Conversa / concierge | Ideia nova | Viés de amostra |
| Fake door / waitlist | Demanda | Overpromise |
| A/B UI | Copy, layout, CTA | Precisa volume |
| Holdout | Feature roll-out | Engenharia |
| Pricing / packaging | Monetização | Risco de marca — cuidado |
| Canal | Ads, partners | Atribuição suja |

Escolha o teste mais barato que invalida a hipótese.

### 4. Estatística pragmática

- Defina métrica primária + guardrails
- Sample size / duração mínima (não pare no primeiro pico)
- Segmente: global win pode ser loss no ICP
- Early-stage: direção forte + sensatez > p-value religioso

### 5. Cadência operacional

- Backlog priorizado semanal
- WIP limit (ex.: 2–3 experimentos ativos)
- Review semanal: ships, resultados, kills
- Arquivo de aprendizado pesquisável

### 6. Decisão padrão

| Resultado | Ação |
|-----------|------|
| Win claro | Scale + padronizar |
| Loss claro | Kill + anotar por quê |
| Inconclusivo | Iterar design OU arquivar (não “deixar rodando”) |
| Win em segmento | Personalizar / focar ICP |

---

## Aplicações

### SaaS

Onboarding, paywall, pricing page, emails de lifecycle — fila contínua de testes.

### IA

Teste qualidade do output, default prompts, pricing de usage. Guardrail: custo e latência.

### Empresas B2B

Experimentos em messaging, demo flow, pilot success criteria — nem tudo cabe em A/B clássico.

### Produtos Digitais

Growth loops, share sheets, push (com ética). Volume favorece A/B.

### Startups

10 aprendizados/mês > 1 “grande lançamento”. Documente para não repetir hypothese morta.

---

## Erros Comuns

| Erro | Efeito | Correção |
|------|--------|----------|
| Sem hipótese | Teatro | Template obrigatório |
| Parar cedo | Falso positivo | Duração/sample |
| 20 testes paralelos no mesmo funil | Confusão | WIP limit |
| Só testar cores | Miopia | Testar valor e fricção |
| Não documentar | Amnésia | Arquivo de aprendizado |
| Ignorar guardrails | Win tóxico | Métricas de saúde |

---

## Checklist

- [ ] Template de hipótese em uso
- [ ] Backlog priorizado com ICE/equivalente
- [ ] Tracking validado antes do run
- [ ] Métrica primária + guardrails definidos
- [ ] WIP de experimentos limitado
- [ ] Review semanal de resultados
- [ ] Kill/scale documentado
- [ ] Aprendizados pesquisáveis
- [ ] Time celebra kill com aprendizado
- [ ] Experimentos amarrados a NSM/gargalo AARRR

---

## Modelo Mental

```
Insight
        ↓
Hipótese + critérios
        ↓
Teste mínimo
        ↓
Medir
        ↓
Kill / iterate / scale
        ↓
Arquivo de aprendizado
```

---

## Relacionados

- Growth Experiments
- Activation
- Pirate Metrics
- North Star Metric
- Growth Dashboard
- Product Strategy
- Decision Making
- Growth Systems
