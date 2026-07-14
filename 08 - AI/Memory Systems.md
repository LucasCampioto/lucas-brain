# Memory Systems

## Objetivo

Persistir e recuperar o que importa entre sessões — preferências, fatos, estado de tarefas — com política clara, sem transformar o produto num depósito de lixo semântico.

Resolve “memória infinita” que alucina preferências, vaza dados entre tenants e não ajuda no job atual.

---

## Filosofia

- Memória é produto + política, não só um vector store.
- Lembrar tudo é pior que lembrar o certo. Esquecimento é feature.
- Separar tipos: episódica, semântica, procedural, working memory.
- Escrita de memória precisa de critérios (confiança, consentimento, escopo).
- Leitura de memória compete com evidências frescas (RAG/tools) — priorize o atual.
- Tenant isolation é não-negociável. Cross-user contamination é incidente.
- O usuário deve ver, editar e apagar o que o sistema “sabe” sobre ele.
- Meça utilidade: % de runs onde memória alterou o outcome positivamente.

---

## Framework

### 1. Tipos de memória

| Tipo | O quê | Exemplo |
|------|-------|---------|
| Working | Estado do turno/tarefa | Scratchpad do agente |
| Episódica | Eventos / interações | “Na semana passada pediu X” |
| Semântica | Fatos / preferências | “Prefere PT-BR, tom direto” |
| Procedural | Como fazer neste produto | Playbooks internos |
| Entidade | Perfil de conta/objeto | CRM + atributos IA |

Cada tipo: schema, TTL, quem escreve, quem lê.

### 2. Loop de memória

```
Interação / evento
        ↓
Extrair candidatos (fatos, prefs)
        ↓
Validar (confiança, PII, consent)
        ↓
Write (store tipado)
        ↓
Próxima sessão: retrieve relevante
        ↓
Injetar no contexto (camada memory)
        ↓
Usuário corrige → update/forget
```

### 3. Política de escrita

Escreva só se:

1. É estável (não humor do turno)
2. É acionável no produto
3. Passou filtro de PII / sensibilidade
4. Tem escopo (user / workspace / org)
5. Tem fonte (dito pelo user, inferido com tag)

Marque `asserted` vs `inferred`. Inferências frágil = confiança baixa ou não persistir.

### 4. Política de leitura

- Top-k pequeno e rankeado pelo job atual
- Preferências explícitas > fatos inferidos
- Dados frescos de tool/RAG vencem memória velha em conflito
- Nunca injetar memória de outro tenant/workspace

### 5. Esquecimento e higiene

| Gatilho | Ação |
|---------|------|
| TTL | Expire preferências transitórias |
| Contradicão | Substitua ou peça confirmação |
| User delete | Apague e propague |
| Baixa utilidade | Prune automático |
| Mudança de conta | Reset / migrar com care |

### 6. Arquitetura mínima

- Store tipado (KV/JSON) para prefs e entity state
- Store de eventos / episódios (com retenção)
- Index opcional (embeddings) só para recuperação semântica — não como verdade única
- Versionamento de “perfil IA” exportável

Embeddings sozinhos não são identidade. Identidade = ids + schema + ACL.

### 7. Eval

- Memória útil recuperada no momento certo
- Falsos positivos (preferência inventada)
- Vazamento entre tenants (testes adversariais)
- Latência e custo do recall

---

## Aplicações

### SaaS

Perfil de workspace + prefs de usuário. Memória de ticket/feature só dentro do projeto. Painel “o que sabemos”.

### IA

Memória como diferencial com UX de controle: pin, edit, forget. Diferencie short-term chat vs long-term profile.

### Empresas B2B

Compliance first: retenção, DPA, região. Memória organizacional ≠ memória pessoal. Roles controlam leitura.

### Produtos Digitais

Lembre estilo, brand kit, projetos — não conversas íntegras pra sempre. Compate episódios em fatos.

### Startups

Comece com prefs explícitas (forms + commands). Só adicione auto-extract quando o eval justificar.

---

## Erros Comuns

| Erro | Efeito | Correção |
|------|--------|----------|
| Vector dump de tudo | Lixo semântico | Schema + critérios |
| Inferir sem marcar | Preferências fantasmas | Tags asserted/inferred |
| Sem UI de memória | Desconfiança | Ver/editar/apagar |
| Memória > evidência fresca | Decisões stale | Prioridade explícita |
| Sem TTL | Perfil podre | Higiene automática |
| Sem ACL | Leak | Isolate por tenant |
| Working = long-term | Confusão | Separar stores |

---

## Checklist

- [ ] Tipos de memória definidos com schema
- [ ] Critérios de write documentados
- [ ] Consentimento / sensibilidade tratados
- [ ] Isolation por tenant/workspace
- [ ] Recall rankeado pelo job atual
- [ ] Conflito memória vs dados frescos resolvido
- [ ] UI de ver/editar/esquecer (ou API equivalente)
- [ ] TTL e prune definidos
- [ ] Testes de vazamento cross-tenant
- [ ] Métrica de utilidade da memória em produção

---

## Modelo Mental

```
Evento
        ↓
Extrair + validar
        ↓
Persistir (tipado / scoped)
        ↓
Recall no job certo
        ↓
Contexto + prioridade vs frescos
        ↓
Correção / esquecimento
```

---

## Relacionados

- Context Engineering
- RAG
- AI Agents
- AI UX
- AI Products
- Prompt Engineering
- LLM Patterns
