# Prompt Engineering

## Objetivo

Escrever e versionar instruções que maximizam qualidade, consistência e custo-benefício do modelo no job real — com método, não com feitiçaria.

Resolve prompts longos aleatórios que “funcionam na demo” e quebram em produção.

---

## Filosofia

- Prompt é produto. Tem dono, versão, teste e rollback.
- Clareza de objetivo e formato > floreio literário.
- Exemplos bons (few-shot) costumam vencer parágrafo de regras vagas.
- Spec do output (schema) reduz caos mais que “seja profissional”.
- Separar system / developer / user / data evita contaminação e injection.
- Otimize para o modelo que roda em produção, não para o chat do final de semana.
- Prompt não conserta dado errado nem tool ausente.
- Meça. Opinião sobre “som do prompt” não escala.

---

## Framework

### 1. Estrutura padrão

```
Papel + objetivo
        ↓
Regras e limites
        ↓
Contexto necessário (só o útil)
        ↓
Exemplos (se ajudam)
        ↓
Formato de saída (schema)
        ↓
Pedido do usuário
```

### 2. Técnicas que pagam

| Técnica | Quando |
|---------|--------|
| Instruções explícitas | Tarefa estreita |
| Few-shot | Estilo / edge cases |
| Chain-of-thought interno | Raciocínio (sem expor se não precisa) |
| Self-check | Qualidade crítica |
| Schema JSON / template | Integração systems |
| Delimiters | Separar dados de instrução |

### 3. Anti-injection e higiene

- Nunca misture dados não confiáveis como instrução
- Delimite com tags claras (`<<<DATA>>>`)
- Recuse pedidos fora de escopo no system
- Sanitize entradas que vão para tools

### 4. Versionamento

1. ID do prompt + changelog
2. Golden set de eval antes de promover
3. Shadow test em % do tráfego
4. Rollback se métricas caem

### 5. Otimização de custo/latência

- Corte contexto morto
- Cache system estável
- Modelo menor para tarefas fáceis; grande para hard route
- Evite re-prompt loops desnecessários

### 6. Checklist de qualidade do prompt

- Objetivo mensurável?
- Output parseável?
- Edge cases cobertos por exemplo ou regra?
- Falha definida (o que dizer quando não sabe)?
- Testado em casos hostis?

---

## Aplicações

### SaaS

Prompts por feature, não um system prompt monólito. Traduza UI state em contexto limpo.

### IA

Biblioteca de prompts do ofício + evals. Prompt é asset IP leve — ainda assim versionado.

### Empresas B2B

Tom de marca e compliance no system. Audite mudanças. Outputs em formato auditável.

### Produtos Digitais

User-facing prompt builders com guardrails. Templates > caixa vazia.

### Startups

Comece simples. Adicione few-shot só quando o baseline falhar nos cases reais.

---

## Erros Comuns

| Erro | Efeito | Correção |
|------|--------|----------|
| Prompt novel | Instabilidade | Estrutura + schema |
| Sem exemplos no domínio | Qualidade frágil | Few-shot real |
| Tudo no user message | Injection / drift | Camadas certas |
| Sem versão | Regressão | Changelog + eval |
| Otimizar no vácuo | Overfit demo | Golden set produção |
| Pedir “seja criativo” em job preciso | Ruído | Spec dura |

---

## Checklist

- [ ] Template padrão de prompt no time
- [ ] Output schema definido quando há integração
- [ ] Exemplos do domínio nos pontos críticos
- [ ] Versionamento e rollback
- [ ] Eval suite mínima
- [ ] Separação instrução vs dados
- [ ] Custo/latência revisados
- [ ] Comportamento “não sei” especificado
- [ ] Donos por prompt de produção
- [ ] Alinha Context Engineering e LLM Patterns

---

## Modelo Mental

```
Objetivo claro
        ↓
Regras + formato
        ↓
Contexto mínimo
        ↓
Exemplos
        ↓
Eval + versão
        ↓
Produção com rollback
```

---

## Relacionados

- Context Engineering
- LLM Patterns
- AI Products
- AI Agents
- RAG
- AI UX
- Memory Systems
- Experimentation
