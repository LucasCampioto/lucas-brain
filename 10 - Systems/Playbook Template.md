# Playbook Template

## Objetivo

Padronizar a estrutura oficial dos playbooks do Lucas Brain Business OS — para que cada tema seja denso, acionável, comparável e fácil de navegar.

Resolve docs inconsistentes: uns viram ensaio, outros stub, outros checklist sem filosofia.

---

## Filosofia

- Playbook ensina a pensar e a fazer — não só a copiar passos cegos.
- Estrutura fixa reduz atrito cognitivo: você sabe onde achar cada tipo de informação.
- Densidade prática > volume acadêmico. Cada seção deve pagar aluguel.
- Português (Brasil), direto, sem fluff e sem motivação vazia.
- Aplicações por contexto (SaaS, IA, B2B, Produtos Digitais, Startups) forçam concrtetude.
- Erros comuns em tabela aceleram aprendizado negativo (o que evitar).
- Relacionados criam grafo de conhecimento do OS.
- Atualize playbooks com aprendizado real; não os congele como dogma.

---

## Framework

### 1. Estrutura oficial (obrigatória)

Todo playbook do Business OS usa exatamente estas seções, nesta ordem:

```
# Título

## Objetivo
## Filosofia
## Framework
## Aplicações
## Erros Comuns
## Checklist
## Modelo Mental
## Relacionados
```

Separadores `---` entre seções principais (como nos playbooks existentes).

### 2. O que vai em cada seção

| Seção | Função | Padrão |
|-------|--------|--------|
| **Título** | Nome do tema | `# Nome` claro, sem subtítulo longo |
| **Objetivo** | Problema que resolve + outcome | 2–4 frases; “Resolve…” explícito |
| **Filosofia** | Princípios guia | 6–10 bullets afiados |
| **Framework** | Método operacional | Subseções numeradas, tabelas, fluxos ASCII |
| **Aplicações** | Contexto por tipo de negócio | Subheads: SaaS, IA, Empresas B2B, Produtos Digitais, Startups |
| **Erros Comuns** | Anti-padrões | Tabela: Erro \| Efeito/Sintoma \| Correção |
| **Checklist** | Verificação acionável | 8–12 itens `- [ ]` |
| **Modelo Mental** | Resumo visual do fluxo | Bloco ASCII com `↓` |
| **Relacionados** | Links do grafo | 6–10 playbooks/temas relacionados |

### 3. Regras de qualidade

1. **Não stub**: Framework deve ter passos utilizáveis hoje
2. **Sem jargão ocioso**: defina ou corte
3. **Tabelas > prosa** quando comparar opções
4. **Fluxos** para sequências de decisão/execução
5. **Consistência de tom** com playbooks irmãos (Hiring, Pricing, Decision Making)
6. **Idioma**: PT-BR; nomes de métricas/modelos conhecidos podem ficar em EN quando forem padrão de mercado (ICP, NRR, DRI)

### 4. Quando criar um playbook novo

Crie quando o tema:

- É recorrente em decisões do negócio
- Merece filosofia + método (não só SOP passo a passo)
- Será referenciado por outros docs

Se for só procedimento repetível fino → **SOP**.  
Se for checklist operacional mínimo → **Checklist** dentro de SOP/playbook.  
Se for template de artefato → pode viver em Framework + link.

### 5. Relação com outros artefatos

```
Playbook (pensar + sistema)
        ↓
SOP (executar passos)
        ↓
Checklist (verificar na hora)
        ↓
Automation (remover clique)
```

### 6. Processo de escrita

```
Definir problema central
        ↓
Filosofia (o que acreditamos)
        ↓
Framework testável
        ↓
Aplicações por contexto
        ↓
Erros + checklist + modelo mental
        ↓
Relacionados no grafo
        ↓
Revisão: cortar fluff
```

### 7. Anti-padrões deste template

- Seção Framework com um parágrafo só
- Aplicações genéricas iguais em todos os contextos
- Checklist que repete a filosofia em vez de ações
- Relacionados irrelevantes “para encher”
- Modelo Mental que não resume o Framework

---

## Aplicações

### SaaS

Playbooks de pricing, retention, GTM seguem este molde — facilita onboarding de leads e PMs.

### IA

Temas de evals, data flywheel, AI leverage: mesma estrutura, Framework com gates de qualidade.

### Empresas B2B

Playbooks de sales motion/handoff: Aplicações B2B concretas; SOP irmão para passos CRM.

### Produtos Digitais

Playbooks de growth/product: Modelo Mental alinhado a loops e instrumentação.

### Startups

Priorize playbooks do caminho crítico. Não escreva enciclopédia antes do OS mínimo.

---

## Erros Comuns

| Erro | Efeito | Correção |
|------|--------|----------|
| Stub decorativo | Falsa cobertura | Framework denso |
| Estrutura inventada | Navegação quebrada | Seguir seções oficiais |
| Só teoria | Inútil na execução | Passos + checklist |
| Só checklist | Sem critério | Filosofia + Framework |
| EN/PT misturado sem padrão | Ruído | PT-BR + termos de mercado |
| Sem Relacionados | Grafo morto | 6–10 links reais |

---

## Checklist

- [ ] Título claro em `#`
- [ ] Objetivo com “Resolve…”
- [ ] Filosofia com 6–10 princípios
- [ ] Framework com subseções acionáveis
- [ ] Aplicações nos 5 contextos
- [ ] Tabela de Erros Comuns
- [ ] Checklist 8–12 itens
- [ ] Modelo Mental em ASCII
- [ ] Relacionados coerentes
- [ ] Tom alinhado aos playbooks existentes
- [ ] Sem stub / sem fluff
- [ ] Separadores `---` entre seções

---

## Modelo Mental

```
Problema
        ↓
Filosofia
        ↓
Framework
        ↓
Aplicações por contexto
        ↓
Erros + Checklist
        ↓
Modelo Mental + Relacionados
```

---

## Relacionados

- Knowledge Management
- SOP
- Operating Systems
- Operating Rules
- Execution Framework
- Decision Making
- Business Processes
- Hiring
