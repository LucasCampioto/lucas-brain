# AI First Products

## Objetivo

Construir produtos onde inteligência artificial é o motor do valor no job — não um badge — com workflow, qualidade, controle do usuário e loop de melhoria como sistema.

Resolve demos impressionantes que falham no uso diário e “chat genérico” colado em features velhas.

---

## Filosofia

- AI-first = o job é resolvido de forma qualitativamente diferente por causa do modelo. Não “temos um bot”.
- Workflow > modelo. O melhor LLM no fluxo errado perde para um modelo ok no fluxo certo.
- Confiabilidade percebida > pico de genialidade ocasional.
- Humano no loop não é falha — é design até a confiança do domínio permitir autonomia.
- Dados de uso + feedback são o moat operacional; prompt sofistica só o dia 1.
- Custo, latência e erro são parte do produto, não detalhes de infra.
- Prometer autonomia total cedo destrói confiança. Earned autonomy.
- Diferenciação: contexto proprietário, integração ao workflow, evals no ICP — não o logo do foundation model.

---

## Framework

### 1. Defina o AI job slice

Em uma página:

1. Qual tarefa do ICP a IA completa ou acelera radicalmente?
2. Input disponível (e de onde vem)?
3. Output esperado e critérios de “bom”?
4. O que acontece depois (ação humana / sistema)?
5. Custo de erro (baixo / médio / crítico)?

Se o custo de erro é crítico, desenhe revisão obrigatória e trilha de auditoria.

### 2. Arquitetura de valor (não só de modelo)

```
Contexto (dados do usuário / empresa)
        ↓
Orquestração (RAG, tools, agentes, regras)
        ↓
Geração / decisão
        ↓
UI de controle (edit, approve, cite, retry)
        ↓
Ação no sistema de registro
        ↓
Feedback → melhoria
```

Chat solto sem “ação no sistema” costuma ser feature, não produto.

### 3. Qualidade como produto

| Prática | Por quê |
|---------|---------|
| Evals no domínio do ICP | Demo ≠ produção |
| Golden sets / regressão | Modelos e prompts mudam |
| Taxa de aceitação / edição | Sinal de valor real |
| Casos de falha triaged | Roadmap de qualidade |
| Latência budget | UX e custo |

Reserve capacidade de roadmap para qualidade — senão cada feature nova dilui confiança.

### 4. UX de confiança

Padrões mínimos:

- Mostrar o que a IA vai fazer antes de ações irreversíveis
- Fontes / citação quando factual importa
- Editar e regenerar fáceis
- Escopo claro (o que não faz)
- Histórico e replay
- Fallbacks quando confiança baixa

### 5. Loop de dados

```
Uso
        ↓
Sinal (accept, edit, reject, thumbs, outcome de negócio)
        ↓
Curadoria / labeling leve
        ↓
Melhoria (prompt, retrieval, fine-tune, regra)
        ↓
Eval gate
        ↓
Ship
```

Sem instrumentação de accept/edit, você voa às cegas.

### 6. Unit economics e limites

Modele:

- Custo por tarefa bem-sucedida (não por call bruto)
- Caps e caching
- Tiering (modelo barato vs caro por passo)
- Quando regras/heurísticas vencem LLM

AI-first que quebra margem não escala — mesmo com retenção boa.

---

## Aplicações

### SaaS

Embuta IA nos momentos de alto atrito do workflow (draft, classificação, resumo, next action). Preserve o sistema de registro; IA acelera, não orphan dados.

### IA (produto puro)

Opte por vertical profundo (job + contexto + distribuição) em vez de wrapper horizontal genérico. Defenda com dados, workflow e GTM de domínio.

### Empresas B2B

Priorize SSO, permissões, retenção de dados, audit log e deployment expectations cedo se o ACV exige. POC com métrica de qualidade acordada.

### Produtos Digitais

IA que cria conteúdo deve fechar o ciclo: publicar, medir, aprender. Geração sem distribution é brinquedo.

### Startups

Concierge + IA “por baixo dos panos” valida o job antes de agent autonomy. Não construa plataforma de agentes no dia 1.

---

## Erros Comuns

| Erro | Sintoma | Correção |
|------|---------|----------|
| Badge AI | Click curiosidade, zero retenção | Job slice + workflow |
| Chat genérico | Uso raso | Ação no sistema + contexto |
| Zero eval | Regressões silenciosas | Golden set + gates |
| Autonomia cega | Medo / erros caros | Earned autonomy |
| Ignorar custo | Margem some | Custo por tarefa ok |
| Sem feedback loop | Qualidade estagna | Accept/edit instrumentado |

---

## Checklist

- [ ] AI job slice escrito (input → output → ação → custo de erro)
- [ ] Diferenciação além do foundation model nomeada
- [ ] UI de controle (edit / approve / cite / undo)
- [ ] Evals e regressão no domínio do ICP
- [ ] Métricas de aceitação / edição / outcome
- [ ] Feedback loop operacional (não só roadmap desejo)
- [ ] Budget de latência e custo por tarefa
- [ ] Permissões e dados tratados para o segmento
- [ ] Capacidade de roadmap reservada para qualidade
- [ ] Promessa de marketing alinhada à confiabilidade real

---

## Modelo Mental

```
Job do ICP
        ↓
Contexto + orquestração
        ↓
Output controlável
        ↓
Ação no workflow
        ↓
Feedback + eval
        ↓
Autonomia crescente (ganha, não decretada)
```

---

## Relacionados

- [[Product Strategy]]
- [[Product Discovery]]
- [[Jobs To Be Done]]
- [[Product Metrics]]
- [[User Experience]]
- [[Product Psychology]]
- [[Product Simplicity]]
- [[Feature Prioritization]]
