# Decision Trees

## Objetivo

Treinar o pensamento em ramos: decompor decisões complexas em perguntas sequenciais, opções e consequências — para escolher com clareza sob trade-offs e incerteza.

Resolve debates circulares em que opções e critérios nunca ficam explícitos na mesma estrutura.

---

## Filosofia

- Árvore é ferramenta de pensamento, não só documento de processo.
- Clareza dos ramos > complexidade ornamental.
- Inclua o ramo “não decidir / esperar por dado”.
- Critérios antes de preferências — senão a árvore é teatro.
- Valor esperado e second-order cabem nos nós.
- Árvore boa é compartilhável: outro chega à mesma lógica.
- Revisite quando priors mudarem.
- Mental model aqui; playbook de Systems cobre operação recorrente.

---

## Framework

### 1. Construção rápida (indivíduo)

1. **Decisão em uma frase**
2. **Opções reais** (2–4, incluindo status quo)
3. **Incerteza crítica** (o que eu não sei que mudaria a escolha?)
4. **Ramos**: se X, então…; se não X, então…
5. **Critério de pare** (informação suficiente / EV claro)
6. **Escolha + sinal de revisão**

### 2. Template ASCII

```
Decisão: ______
        ↓
Fato/dado decisivo? ──não──→ obter dado barato / adiar
        │sim
        ↓
Opção A vs B vs status quo
        ↓
Para cada: 1ª ordem / 2ª ordem / EV / ruin?
        ↓
Escolher ramo
        ↓
Definir canário de arrependimento
```

### 3. Critérios nos nós

| Nó | Pergunte |
|----|----------|
| Eliminatório | Viola restrição (caixa, legal, ICP)? |
| Econômico | EV / payback / margem |
| Estratégico | Alinha ao círculo e ao quarter? |
| Irreversibilidade | Quão caro reverter? |
| Aprendizado | Quanto information value? |

### 4. Quando desenhar no papel

- Decisão irreversível ou cara
- Múltiplos stakeholders
- Emoção alta (ego, medo)
- Repetição futura → depois promova a árvore operacional (Systems)

### 5. Ligação com outros modelos

- **Probabilistic Thinking**: probs nos ramos
- **Inversion**: ramo “como falhamos?”
- **Opportunity Cost**: ramo do melhor Y
- **Second Order**: folhas de 2ª/3ª ordem

---

## Aplicações

### SaaS

Build vs buy vs partner; freemium vs trial; matar feature: ramos com NRR e complexidade.

### IA

Ship modelo novo: ramos por eval, custo, risco; “humano no loop” como ramo de segurança.

### Empresas B2B

Pursue RFP vs passar; discount vs walk away; hire AE vs SDR capacity.

### Produtos Digitais

Lançar / experimentar / shelve com critério de evidência.

### Startups

Pivot vs persist: ramos com runway, learning rate e ICP signal — não vibe.

---

## Erros Comuns

| Erro | Efeito | Correção |
|------|--------|----------|
| Ramos falsos | Conclusão guiada | Incluir status quo e “obter dado” |
| Sem critério | Opinião | Gates eliminatórios |
| Excesso de nós | Paralisia | 1 página |
| Ignorar 2ª ordem | Armadilha | Folhas de consequência |
| Não registrar | Redebate | ADR leve |
| Confundir com SOP | Rigidez | Mental model ≠ processo engessado |

---

## Checklist

- [ ] Decisão em uma frase
- [ ] Opções reais (inclui status quo)
- [ ] Incerteza crítica nomeada
- [ ] Ramos escritos
- [ ] Critérios eliminatórios
- [ ] EV / downside quando relevante
- [ ] Second-order nas folhas
- [ ] Opportunity cost explícito
- [ ] Canário de revisão
- [ ] Cabe em uma página
- [ ] Compartilhável com o time
- [ ] Se recorrente → link ao playbook Systems

---

## Modelo Mental

```
Decisão
        ↓
Opções + incerteza
        ↓
Ramos se/então
        ↓
Critérios + EV
        ↓
Escolha
        ↓
Canário / atualizar
```

---

## Relacionados

- Decision Trees (10 - Systems)
- Probabilistic Thinking
- Second Order Thinking
- Inversion
- Opportunity Cost
- First Principles
- Systems Thinking
- Circle of Competence
