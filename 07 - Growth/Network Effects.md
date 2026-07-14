# Network Effects

## Objetivo

Desenhar e nutrir efeitos de rede reais — o produto fica melhor (ou mais necessário) conforme mais pessoas/dados/parceiros entram — para criar crescimento e moat defensável.

Resolve “comunidade” e “viral” misturados com efeito de rede de verdade.

---

## Filosofia

- Network effect ≠ viral. Viral traz usuários. Rede aumenta valor com tamanho/densidade.
- Efeito de rede fraco ou falso não segura churn de produto ruim.
- Densidade local muitas vezes importa mais que escala global cedo.
- Same-side e cross-side são jogos diferentes. Saiba qual você joga.
- Cold start é o chefe final. Sem estratégia, a rede nunca liga.
- Dados e marketplace têm efeitos distintos — não force analogia Uber.
- Multi-tenant “ver uns aos outros” não é automaticamente network effect.
- Defensibilidade vem de switching cost saudável + densidade + workflows, não de lock-in sujo.

---

## Framework

### 1. Classifique o efeito

| Tipo | Valor sobe com… | Exemplo |
|------|-----------------|---------|
| Direct (same-side) | Mais peers | Chat, collab |
| Cross-side | Outro lado da plataforma | Buyers ↔ sellers |
| Data | Mais uso → melhor modelo/resultado | Ranking, recomendações |
| Marketplace liquidity | Oferta+demanda no mesmo geo/nicho | Local markets |
| Platform / integrations | Mais apps no ecossistema | Plugin networks |
| Social proof soft | Mais presença pública | Diretórios (efeito fraco) |

Seja honesto: “temos usuários” ≠ “temos network effect”.

### 2. Métricas de rede

- Densidade: conexões / usuários ativos num cluster
- Liquidity: time-to-match / fill rate
- Retention lift: usuários em rede densa vs isolados
- Contribution: % que cria valor para outros
- Cross-side balance: razão saudável entre lados

### 3. Estratégia de cold start

```
Nicho estreito / geo / persona
        ↓
Seed supply ou demand (manualmente ok)
        ↓
Densidade mínima em um cluster
        ↓
Valor cross/same-side aparece
        ↓
Expandir para cluster adjacente
```

Não lance “para todos os mercados”. Lance onde a densidade fecha.

### 4. Alavancas de design

1. Single-player usefulness primeiro (quando possível) — reduz dependência da rede vazia
2. Convite com contexto (grafo natural)
3. Incentivos à contribuição quality-weighted
4. Clusters e discovery locais
5. APIs/integrations que engrossam plataforma

### 5. Proteja a qualidade

Rede grande com spam morre. Moderação, reputation, curadoria e filtros são feature de growth.

### 6. Moat check

Pergunte trimestralmente:

- Um rival com mais cash copia amanhã?
- Switching leve ainda mantém nossa densidade?
- Dados/compounds ainda melhoram o core?

---

## Aplicações

### SaaS

Collab multiplayer + templates compartilhados. Workspace density > vanity user count.

### IA

Data network: feedback e evals melhoram o modelo no job. Cuidado: commodity LLMs enfraquecem data moat genérico — foque dados proprietários de workflow.

### Empresas B2B

Redes de compradores/fornecedores, marketplaces B2B, integração com stack do cliente (platform effect).

### Produtos Digitais

Grafo social e UGC com densidade por interesse. Seed creators no nicho certo.

### Startups

Escolha UM cluster para liquidar. Concierge no começo é legítimo. Escala só depois do match funcionar.

---

## Erros Comuns

| Erro | Efeito | Correção |
|------|--------|----------|
| Chamar tudo de network effect | Estratégia vazia | Classificar com rigor |
| Escala prematura | Liquidez zero | Densidade local |
| Só demand, zero supply | Marketplace morto | Seed o lado escasso |
| Qualidade ignorada | Spam / churn | Reputation + mod |
| Single-player zero | Cold start impossível | Valor solo + rede |
| Confundir viral com rede | CAC disfarçado | Meça lift de valor |

---

## Checklist

- [ ] Tipo de network effect nomeado com honestidade
- [ ] Métricas de densidade/liquidez existem
- [ ] Cold start plan por cluster
- [ ] Single-player path (se aplicável) claro
- [ ] Qualidade da rede tem dono
- [ ] Retention lift da rede densa comprovado
- [ ] Expansão só após cluster #1 líquido
- [ ] Integrações/platform na estratégia se relevante
- [ ] Moat review trimestral
- [ ] Relacionado a Viral Loops sem confundir os dois

---

## Modelo Mental

```
Cluster estreito
        ↓
Seed + densidade
        ↓
Valor de rede aparece
        ↓
Retention lift
        ↓
Clusters adjacentes
        ↓
Moat + compounds
```

---

## Relacionados

- Viral Loops
- Growth Loops
- Retention
- Moats
- Product Strategy
- Growth Systems
- Activation
- Growth Automation
