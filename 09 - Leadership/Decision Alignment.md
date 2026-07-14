# Decision Alignment

## Objetivo

Garantir que decisões importantes tenham dono, critérios, registro e commit coletivo na execução — eliminando reopens eternos, sabotagem passiva e “achei que tínhamos combinado”.

Resolve times que debatem bem e executam desalinhados, ou alinhados no papel e divergentes no comportamento.

---

## Filosofia

- Alinhamento ≠ consenso unânime. É clareza de decisão + compromisso de execução.
- Discordância forte antes; alinhamento depois. O inverso é política.
- Sem dono único, a decisão é de ninguém.
- Critérios explícitos vencem lobby e carisma.
- Decisão não registrada não existe em escala.
- Reabrir exige fato novo material — não humor novo.
- Cascata incompleta é desalinhamento agendado.
- Execução alinhada com dúvida residual > espera pelo conforto emocional total.

---

## Framework

### 1. Pré-requisitos de uma decisão alinhável

Antes do debate:

1. Problema/decisão em 1 frase
2. Tipo (1 / 2 / 3) — ver Decision Making
3. Dono da decisão (DRI)
4. Stakeholders a consultar (≠ vetar)
5. Critérios de escolha
6. Opções reais (≥2)
7. Prazo de decisão

### 2. RACI leve (sem burocracia)

| Papel | Função |
|-------|--------|
| D / DRI | Decide |
| C | Consultado (input obrigatório) |
| I | Informado após |
| A (opcional) | Accountable executivo se DRI não for o líder final |

Evite 8 “Approvers”. Aprovação múltipla é onde decisões morrem.

### 3. Ritual de alinhamento

```
Doc de 1 página circulado
        ↓
Input async dos C
        ↓
Debate (se necessário)
        ↓
DRI decide
        ↓
Registro: decisão + porquê + dissent
        ↓
Cascata + actions
        ↓
Review na data
```

### 4. Template de Decision Record (ADR light)

1. Contexto
2. Decisão
3. Drivers / critérios
4. Alternativas rejeitadas + porquê
5. Consequências e riscos
6. DRI e data
7. Review date / kill criteria
8. Dissent registrado (se houver)

### 5. Commit e “disagree and commit”

Depois da decisão:

- Stakeholders executam como se fosse a preferida
- Críticas viram dados para o review — não resistência diária
- Sabotagem passiva é issue de performance, não de “opinião”

### 6. Change control

Reabra só se:

1. Novo fato material (dado, regulação, falha de premissa)
2. DRI (ou nível acima) autoriza
3. Registro atualizado

“Não estou confortável” sem fato novo ≠ reopen.

### 7. Alinhamento multi-time

Para decisões cross-funcional:

- Um DRI cross
- Um canal canônico
- Mensagem única de cascata (ver Leadership Communication)
- Metrics compartilhadas de sucesso

---

## Aplicações

### SaaS

Packaging, ICP, SLAs: Decision Record + cascata Sales/CS/Product no mesmo dia.

### IA

Model provider / privacy / eval gates: Tipo 1 com ADR. Times não “experimentam produção” fora da política.

### Empresas B2B

Exception de desconto/escopo: alinhamento na política; exception log; não renegociação ad hoc que vira precedent.

### Produtos Digitais

Kill/keep de feature: critérios e data de review públicos no time.

### Startups

Fundadores co-founders: escrevam decisões Tipo 1. Memória oral entre sócios é bomba.

---

## Erros Comuns

| Erro | Efeito | Correção |
|------|--------|----------|
| Consenso forçado | Decisão mole | DRI + critérios |
| Sem registro | Reopen infinito | ADR light |
| Consultar = vetar | Paralisia | RACI claro |
| Cascata falha | Times divergem | Message architecture |
| Reopen por humor | Whiplash | Change control |
| Dissent punido | Silêncio futuro | Registrar dissent, exigir commit |

---

## Checklist

- [ ] Decisão e tipo classificados
- [ ] DRI nomeado
- [ ] Critérios explícitos
- [ ] Opções reais avaliadas
- [ ] Consultados tiveram input
- [ ] Decision Record escrito
- [ ] Dissent (se houver) registrado
- [ ] Cascata feita aos times afetados
- [ ] Actions com donos
- [ ] Review/kill date no calendário

---

## Modelo Mental

```
Problema claro + DRI
        ↓
Critérios + opções
        ↓
Input → decisão
        ↓
Registro + dissent
        ↓
Commit na execução
        ↓
Review com fatos
```

---

## Relacionados

- Decision Making
- Leadership Communication
- Meetings
- Conflict Resolution
- Leadership Principles
- Execution Framework
- Quarter Planning
- Operating Rules
