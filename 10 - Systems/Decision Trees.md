# Decision Trees

## Objetivo

Estruturar decisões recorrentes e de alto impacto em árvores explícitas: opções, critérios, limiares e próximo passo — para reduzir redebate, inconsistência e “achismo de reunião”.

Resolve decisões que reaparecem toda semana com respostas diferentes dependendo de quem está na sala.

---

## Filosofia

- Árvore boa é documento vivo, não slide de workshop.
- Clareza de critérios > volume de opções.
- Limiares numéricos (quando existir dado) batem opinião solta.
- Decidir inclui o caminho “não fazer agora”.
- Árvore reduz custo cognitivo; não elimina julgamento nas bordas.
- Quem executa deve conseguir aplicar sem ligar para o fundador.
- Exceções precisam de dono e registro — senão a árvore morre.
- Revise a árvore quando o contexto mudar (ICP, preço, estágio, caixa).

---

## Framework

### 1. Quando usar árvore

| Situação | Use árvore? |
|----------|-------------|
| Decisão recorrente (pricing exception, hire/no-hire, kill feature) | Sim |
| Decisão única irreversível (M&A, pivot) | Parcial — use árvore + review humana |
| Preferência estética / branding | Não — princípios |
| Emergência sem dados | Protocolo curto, depois capturar árvore |

### 2. Anatomia da árvore

1. **Pergunta raiz** (binária ou com 3–5 ramos claros)
2. **Filtros eliminatórios** (hard gates)
3. **Critérios de score** (soft, com pesos)
4. **Limiares** (go / iterate / no-go)
5. **Ação** (o que fazer no ramo)
6. **Owner** e cadência de revisão

### 3. Template mínimo

```
Pergunta: Devemos X?
        ↓
Gate 1: [condição eliminatória] → se falhar → NÃO
        ↓
Gate 2: ...
        ↓
Score: A (peso) + B + C
        ↓
≥ limiar → SIM + plano
entre faixas → ITERAR / pedir dado
< limiar → NÃO / adiar
```

### 4. Tipos úteis no Business OS

| Tipo | Exemplo |
|------|---------|
| Qualificação | Lead vira sales-assisted? |
| Priorização | Feature entra no próximo sprint? |
| Exceção | Desconto além do floor? |
| Kill | Manter / pivotar / matar iniciativa? |
| Escalação | Resolver no time ou subir? |

### 5. Operação

- Uma árvore por decisão recorrente (não uma mega-árvore)
- Versione mudanças de critério
- Meça taxa de exceção; se >20%, a árvore está errada ou o processo é teatro
- Treine o time com 5 casos reais

---

## Aplicações

### SaaS

Árvores de upgrade path, churn save, e “custom vs config” evitam time de produto virar fábrica de pedidos.

### IA

Gate de qualidade antes de ship: eval mínimo, custo/request, latência, risco de hallucination em caso de uso crítico.

### Empresas B2B

Qualificação de opportunity (ICP, budget, authority, timeline) e árvore de handoff marketing→sales→CS.

### Produtos Digitais

Árvore de experimento: hipótese clara? instrumentado? sample size? → run / hold / kill.

### Startups

Poucas árvores críticas (hiring, pricing floor, focus do trimestre). Evite burocracia prematura.

---

## Erros Comuns

| Erro | Efeito | Correção |
|------|--------|----------|
| Árvore sem limiar | Continua redebate | Números ou critérios falsificáveis |
| 15 ramos | Ninguém usa | 3–5 caminhos máx. na prática |
| Só “sim/não” sem ação | Decisão órfã | Cada folha tem next step + DRI |
| Exceções silenciosas | Árvore irrelevante | Log de exceção + review |
| Congelar no seed stage | Falsa precisão | Revisar a cada marco |

---

## Checklist

- [ ] Pergunta raiz está clara e recorrente
- [ ] Gates eliminatórios explícitos
- [ ] Limiares definidos (mesmo que qualitativos)
- [ ] Cada folha tem ação e dono
- [ ] Exceções têm processo de registro
- [ ] Time consegue aplicar sem fundador
- [ ] Cadência de revisão marcada
- [ ] Taxa de exceção monitorável
- [ ] Ligada a SOP/playbook relacionado
- [ ] Casos de treino documentados
- [ ] Não duplica outra árvore existente
- [ ] Cabe em uma página

---

## Modelo Mental

```
Decisão recorrente
        ↓
Gates duros
        ↓
Critérios + limiar
        ↓
Ramo → ação + DRI
        ↓
Medir exceções
        ↓
Revisar árvore
```

---

## Relacionados

- Decision Making
- Execution Framework
- Operating Rules
- SOP
- Probabilistic Thinking
- Second Order Thinking
- Quarter Planning
- Weekly Review
