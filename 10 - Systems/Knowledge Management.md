# Knowledge Management

## Objetivo

Capturar, estruturar e recuperar o conhecimento do negócio (decisões, playbooks, learnings, contexto) para que o time execute sem depender da memória de uma pessoa.

Resolve conhecimento preso em chat, cabeça do founder e docs mortos que ninguém encontra.

---

## Filosofia

- Conhecimento sem retrieval é entulho.
- Escreva para o “eu do futuro” e para o colega novo.
- Fontes de verdade poucas; cópias são veneno.
- Densidade e estrutura batem diários longos sem índice.
- Decisões precisam de contexto: opção rejeitada importa.
- Atualizar > acumular. Doc errado é pior que ausência.
- Separar: explorar (notas) vs decidir (playbook/SOP) vs executar (checklist).
- Português claro; links ricos; tags moderadas.

---

## Framework

### 1. Camadas do knowledge OS

```
Inbox / captura rápida
        ↓
Notas de trabalho (projeto)
        ↓
Playbooks / SOPs (verdade operacional)
        ↓
Decisões (ADR leve)
        ↓
Arquivo / deprecated
```

### 2. Onde mora o quê

| Tipo | Lugar | Regra |
|------|-------|-------|
| Playbook | Pastas temáticas do brain | Estrutura oficial |
| SOP | Systems / área | Passos atualizados |
| Decisão | Log / ADR | Contexto + consequências |
| Learning | Weekly / postmortem | Amarrado a aposta |
| Cliente/ICP | Research | Citável |
| Rascunho | Inbox | TTL: promover ou deletar |

### 3. Protocolo de captura

1. Capturar em 2 min (inbox)
2. Semanalmente: processar inbox
3. Promover o que é recorrente a playbook/SOP
4. Linkar no grafo (Relacionados)
5. Deprecated com data e sucessor

### 4. Padrão de decisão (ADR leve)

```
Contexto
Decisão
Alternativas rejeitadas
Consequências
Revisar em: data
```

### 5. Retrieval que funciona

- Nomes de arquivo previsíveis
- Busca full-text + MOCs (maps of content) por domínio
- Relacionados em todo playbook
- Evite 12 tags; prefira links explícitos

### 6. Higiene mensal

- Inbox zerada
- 5 docs sem abertura → arquivar ou reescrever headline
- Checar links quebrados nos playbooks quentes
- Atualizar o que a realidade já invalidou

---

## Aplicações

### SaaS

Pricing history, ICP notes, onboarding lessons, win/loss — viram input de Quarter Planning e Hiring.

### IA

Prompt libs, eval specs, incident postmortems, datasets docs — versionados e com dono.

### Empresas B2B

Battlecards, playbooks de demo, clausulas, QBR templates — com data de validade.

### Produtos Digitais

Research synthesis, experiment logs, brand principles.

### Startups

Comece pelo brain mínimo: Systems + Mental Models + Decisões. Não construa wiki corporativa vazia.

---

## Erros Comuns

| Erro | Efeito | Correção |
|------|--------|----------|
| Tudo no Slack | Amnésia | Capturar → brain |
| Docs sem dono | Podem | DRI + review |
| Stub eterno | Falsa cobertura | Critério de densidade |
| Duplicatas | Conflito | Fonte única |
| Sem deprecated | Confusão | Marcar + link sucessor |
| Over-tagging | Ruído | Links + pastas |

---

## Checklist

- [ ] Inbox com cadência de processamento
- [ ] Pastas de verdade definidas
- [ ] Playbooks no template oficial
- [ ] Decisões com alternativas rejeitadas
- [ ] DRI dos docs críticos
- [ ] Relacionados populados
- [ ] Busca funciona para o time
- [ ] Higiene mensal no calendário
- [ ] Deprecated marcado
- [ ] Segredos fora do knowledge público
- [ ] Onboarding aponta para o mapa
- [ ] Weekly Review alimenta learnings

---

## Modelo Mental

```
Captura
        ↓
Processar
        ↓
Promover (playbook/SOP/ADR)
        ↓
Linkar no grafo
        ↓
Usar na decisão
        ↓
Atualizar ou archivar
```

---

## Relacionados

- Playbook Template
- SOP
- Operating Systems
- Weekly Review
- Operating Rules
- Business Processes
- Execution Framework
- Dashboards
