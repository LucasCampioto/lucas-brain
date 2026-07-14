# Feature Prioritization

## Objetivo

Decidir o que entra agora — e o que espera ou morre — com um critério repetível que equilibra impacto, evidência, esforço e alinhamento estratégico.

Resolve priorização por grito, ego, concorrente ou “está fácil então faz”.

---

## Filosofia

- Prioridade é alocação de capacidade escassa, não ranking de ideias.
- Sem critério público, a política vence em silêncio.
- Impacto sem confiança é fantasia; confiança sem impacto é hobby.
- Esforço mal estimado é a mentira mais cara do backlog.
- Pedido de cliente grande ≠ prioridade automática.
- O custo de uma feature inclui atenção do usuário e complexidade eterna.
- Matar ideia cedo é velocidade. Empilhar “depois” é diluição.
- Score é ferramenta; julgamento + thesis têm veto.

---

## Framework

### 1. Escolha um modelo simples (e use de verdade)

**ICE / RICE light (recomendado para a maioria):**

| Fator | Pergunta |
|-------|----------|
| Impacto | Move ativação, retenção ou receita do ICP? |
| Confiança | Evidência (dado, discovery, experimento)? |
| Esforço | Tempo real até valor em produção? |
| Reach (opcional) | Quantos do ICP são afetados? |

Heurística: **(Impacto × Confiança × Reach) / Esforço**

Veto estratégico: se não serve à thesis / outcome do ciclo, score alto não salva.

### 2. Classifique o tipo de item

| Tipo | Tratamento |
|------|------------|
| Outcome bet | Discovery → score → Now |
| Table stakes | Só se bloqueia adoção/retenção do ICP |
| Hygiene / bug | Bucket de capacidade, não compete ponto a ponto |
| Custom / one-off | Preço ou parceria; fora do core |
| Bet exploratória | Cap pequeno, kill criteria rígido |

Misturar bug P0 com “ideia de growth” no mesmo stack ranqueado cria caos.

### 3. Calibre “impacto”

Impacto alto só se:

- Afeta o job core, ou
- Destrava métrica do trimestre, ou
- Fortalece moat / switching cost

Impacto cosmético (efeito WOW em demo, pouco no workflow) = baixo — mesmo que o board aplauda.

### 4. Calibre “confiança”

| Nível | Evidência |
|-------|-----------|
| Alta | Uso real / experimento / churn pattern claro |
| Média | Entrevistas consistentes + sinal em dados |
| Baixa | Opinião, analogia, feature do concorrente |

Baixa confiança → experimento barato antes de build grande, não score inflado.

### 5. Ritual de priorização

```
Intake (ideia / pedido / bug theme)
        ↓
Tipo + amarra à thesis?
        ↓
Score rápido (15 min max por item material)
        ↓
Comparar no bucket certo
        ↓
Commit no Now ou estacionar
        ↓
Revisar após ship (aprendeu? matar score enviesado)
```

Recalibre o modelo se todo item “ganha” — o régua está quebrada.

### 6. Negocie com transparência

Quando disser não:

1. Critério usado
2. O que venceu e por quê
3. Condição para reabrir (dado X, ACV Y, experimento Z)

“Não” sem critério gera re-litigação eterna.

---

## Aplicações

### SaaS

Priorize o caminho até aha e o workflow semanal. Marketplace de integrações só sobe com frequência de bloqueio documentada.

### IA

Priorize qualidade na tarefa do ICP (eval, edge cases, feedback) ao lado de UI. Uma feature nova com modelo inconsistente piora retenção.

### Empresas B2B

Separe roadmap de produto de requests de RFP. Security/SSO sobem por ACV e estágio de funil — com gate claro — não por medo genérico.

### Produtos Digitais

Penalize features que adicionam superfície. Prefira aprofundar o job existente no score de impacto.

### Startups

Lista curta. Se não cabe no Now, está de fora. Priorização é 80% dizer não.

---

## Erros Comuns

| Erro | Sintoma | Correção |
|------|---------|----------|
| Score teatro | Ninguém usa na decisão | Criteriar + ritual |
| Tudo P0 | Nada entrega | Capacidade explícita |
| Otimizar fácil | Baixo impacto shipado | Impacto × confiança primeiro |
| Copiar concorrente | Paridade sem job | Thesis veto |
| Inflar confiança | “Eu acho” = alta | Escala de evidência |
| Ignorar custo de complexidade | Produto inchado | Penalidade no esforço/impacto |

---

## Checklist

- [ ] Modelo de score acordado e público (poucos fatores)
- [ ] Thesis / outcome do ciclo como veto
- [ ] Itens classificados por tipo (bet / hygiene / custom…)
- [ ] Confiança amarrada a evidência, não a hierarquia
- [ ] Esforço estimado por quem constrói
- [ ] Bucket de hygiene separado do ranking de bets
- [ ] Ritual regular de re-priorização
- [ ] “Não” comunicado com critério e condição de reabrir
- [ ] Pós-ship: comparar impacto esperado vs real
- [ ] Backlog Later periodicamente podado

---

## Modelo Mental

```
Intake
        ↓
Serve à thesis?
        ↓
Tipo certo de bucket
        ↓
Impacto × Confiança / Esforço
        ↓
Commit ou estacione
        ↓
Meça resultado → recalibre
```

---

## Relacionados

- [[Product Strategy]]
- [[Product Roadmap]]
- [[Product Discovery]]
- [[Jobs To Be Done]]
- [[Product Metrics]]
- [[Product Simplicity]]
- [[AI First Products]]
- [[Product-Led Growth]]
