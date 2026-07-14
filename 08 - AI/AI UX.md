# AI UX

## Objetivo

Desenhar interfaces onde IA entrega outcome com controle, clareza e confiança — latência, erro e ambiguidade tratados como parte do design, não surpresa.

Resolve magia opaca, “gerar” sem contexto, e usuários que não sabem o que o sistema fez (nem como desfazer).

---

## Filosofia

- UX de IA vende resultado editável, não o modelo.
- Estado do sistema (pensando, buscando, falhando) deve ser legível.
- Controles > prompts vazios. Inputs estruturados batem caixa de texto solta na maioria dos jobs B2B.
- Preview, diff e undo são cidadãos de primeira classe.
- Confiança vem de fontes, limites e consistência — não de copy “sou uma IA”.
- Empty states e defaults determinam ativação.
- Escalation para humano/fluxo clássico é sucesso, não derrota.
- Meça task success e time-to-value, não só cliques em “Generate”.

---

## Framework

### 1. Anatomia de uma superfície de IA

```
Job claro na UI
        ↓
Inputs mínimos (estruturados + opcional free text)
        ↓
Progresso / fontes / custo de espera
        ↓
Output estruturado + editável
        ↓
Ações: aceitar / editar / regenerar / desfazer
        ↓
Feedback (👍 criteria, não só emoji)
```

### 2. Padrões de interação

| Padrão | Quando |
|--------|--------|
| Inline assist | Melhorar o que já está na tela |
| Side panel copilot | Contexto largo, ações no app |
| Guided flow | Job multi-step com checkpoints |
| Autofill + review | Forms e CRMs |
| Batch / queue | Volume; progresso assíncrono |
| Command + args | Power users; repetibilidade |

Evite “chat único para tudo” como único caminho.

### 3. Design para latência e falha

- Skeletons e etapas (“buscando docs…”, “redigindo…”)
- Cancel / retry
- Resultados parciais quando possíveis
- Mensagens de erro acionáveis (“faltou X”, “sem permissão”)
- Modo offline/degradado se o backend cair

### 4. Controle e confiança

- Mostrar fontes / o que foi usado
- Indicar incerteza ou “rascunho”
- Diff vs versão anterior
- Escopos sensíveis pedem confirmação explícita
- Memória/personalização com transparência

### 5. Prompt na UI (se existir)

- Templates e chips de intent > blank canvas
- Exemplos do domínio no empty state
- Advanced prompt colapsado
- Salvar receitas reutilizáveis

### 6. Métricas de UX de IA

- Activation: primeira tarefa concluída
- Edit distance (quanto o user muda)
- Accept rate / retry rate
- Time-to-outcome
- Trust breaks (report, undo, abandon)

---

## Aplicações

### SaaS

Assist onde o trabalho já acontece (editor, ticket, pipeline). Cite objetos do produto, não só texto.

### IA

Onboarding pelo job (“comece com este outcome”). Pricing UI alinhada a runs/qualidade.

### Empresas B2B

Roles: o que cada cargo pode gerar/aprovar. Auditabilidade na interface.

### Produtos Digitais

Criação com versões, brand constraints visíveis, export. Evite “surpresa irreversível”.

### Startups

Uma superfície, um job feliz. Instrumente accept/edit desde o dia 1.

---

## Erros Comuns

| Erro | Efeito | Correção |
|------|--------|----------|
| Só chat genérico | Baixa ativação | Inputs + templates |
| Spinner eterno | Abandono | Progresso + cancel |
| Output final opaco | Desconfiança | Diff / fontes / edit |
| Sem undo | Medo de usar | Versionamento |
| Erro em jargão de API | Frustração | Copy acionável |
| Feedback só 👍👎 | Pouco sinal | Critérios tipados |
| Esconder limites | Expectativa inchada | Dizer o que não faz |

---

## Checklist

- [ ] Job da tela enunciado em uma frase
- [ ] Inputs estruturados para o caso feliz
- [ ] Estados de progresso e falha desenhados
- [ ] Output editável com accept/retry/undo
- [ ] Fontes ou bases da resposta visíveis quando importam
- [ ] Confirmação em ações sensíveis
- [ ] Empty state com exemplo do domínio
- [ ] Métricas accept/edit/abandon
- [ ] Caminho sem IA (fallback) se preciso
- [ ] Acessibilidade e teclado nos fluxos principais

---

## Modelo Mental

```
Job na UI
        ↓
Input mínimo
        ↓
Estado legível
        ↓
Output editável
        ↓
Controle + feedback
        ↓
Sucesso mensurável
```

---

## Relacionados

- AI Products
- AI Agents
- Prompt Engineering
- Context Engineering
- Voice AI
- Multimodal AI
- Memory Systems
