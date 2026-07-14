# User Experience

## Objetivo

Desenhar o caminho do usuário — da descoberta ao hábito — para que o job seja compreensível, executável e confiável com o mínimo de atrito e o máximo de clareza.

Resolve interfaces “bonitas” que não convertem e fluxos técnicos que só o time entende.

---

## Filosofia

- UX é o produto percebido. Backend invisível não salva fluxo confuso.
- Clareza > densidade. Hierarquia visual = hierarquia de decisão.
- O melhor UX ensina fazendo, não com manual.
- Consistência reduz carga cognitiva; exceção sem motivo a aumenta.
- Acessibilidade e estados vazios/erro são produto, não polish opcional.
- UX sem contato com usuário real é decoração.
- Performance e confiabilidade são experiência.
- Em dúvida, remova — depois progressive disclosure.

---

## Framework

### 1. Mapeie a jornada do job

```
Trigger / aquisição
        ↓
Primeira sessão (path to aha)
        ↓
Uso recorrente (core loop)
        ↓
Momentos de dúvida (erro, vazio, permissão)
        ↓
Expansão / colaboração / upgrade
```

Desenhe cada etapa com objetivo do usuário e métrica — não só wireframe.

### 2. Path to aha

Princípios:

- Uma CTA primária
- Defaults inteligentes
- Template ou sample data quando o empty state assusta
- Menos formulários; mais ação
- Feedback imediato de progresso

Time-to-value é métrica de UX tanto quanto de growth.

### 3. Heurísticas práticas (uso diário)

| Área | Pergunta |
|------|----------|
| Hierarquia | Em 3s, o que fazer aqui? |
| Linguagem | Palavras do usuário ou jargon interno? |
| Estados | Empty / loading / success / error cobertos? |
| Controle | Dá para desfazer / editar / sair? |
| Consistência | Mesmo padrão de botão/nav/form? |
| Mobile | O caminho crítico sobrevive? |

### 4. Contente e microcopy

Microcopy é UX:

- Botões com verbo de resultado (“Gerar relatório”, não “Submit”)
- Erros com causa + próximo passo
- Empty states com ação, não ilustração triste
- Confirmações para destrutivo; não para trivial

### 5. Pesquisa rápida no ciclo

| Método | Quando |
|--------|--------|
| Teste de usabilidade (5 usuários) | Fluxo novo critical |
| Session replay (ético) | Drop misterioso |
| Intercept / CS interviews | Por quê do comportamento |
| Prototype test | Antes de engajar eng grande |

Achismo de “ótimo UX” sem observação é risco caro.

### 6. Design system com freio

- Componentes reduzem inconsistência
- Mas system não substitui pensamento de fluxo
- Novos patterns só com problema real repetido
- Acessibilidade (foco, contraste, teclado, labels) no DoD

---

## Aplicações

### SaaS

Onboarding e empty states definem retenção precoce. Settings não são a home. Admin e end-user: superfícies separadas.

### IA

Mostre rascunho editável, fontes quando relevante, e ações (inserir, substituir, criar ticket). Streaming + cancelar = controle. Latency communication evita ansiedade.

### Empresas B2B

Permissões e audit sem labirinto. Roles claras. POC UX deve parecer o job real, não tour de features.

### Produtos Digitais

Motion sutil para feedback e hierarquia (2–3 intenções), não confete. Uma composição clara por viewport crítico.

### Startups

Alta fidelidade cedo só no path to aha. O resto pode ser feio e funcional até evidência.

---

## Erros Comuns

| Erro | Sintoma | Correção |
|------|---------|----------|
| Decoração first | Bonito, inútil | Job + aha |
| Tutorial parede | Skip universal | Aprender fazendo |
| Erro mudo | Abandono | Microcopy acionável |
| Nav infinita | Perdidos | Simplicidade + IA? Não — corte |
| Ignorar empty | Drop no D1 | Templates / samples |
| Zero pesquisa | Surpresa no launch | 5 testes baratos |

---

## Checklist

- [ ] Jornada do job mapeada com aha explícito
- [ ] Path to value com CTA única e defaults
- [ ] Empty / loading / error / success tratados
- [ ] Linguagem do usuário no UI
- [ ] Desfazer / editar em ações sensíveis
- [ ] Consistência mínima de patterns
- [ ] Teste com usuários reais antes de bets grandes
- [ ] Performance e estados lentos comunicados
- [ ] Acessibilidade básica no DoD
- [ ] Instrumentação dos drops do funil de UX

---

## Modelo Mental

```
Job do usuário
        ↓
Jornada + aha
        ↓
Fluxo mínimo (defaults, copy, estados)
        ↓
Observar (teste / replay / dado)
        ↓
Simplificar e reforçar hierarquia
```

---

## Relacionados

- [[Product Simplicity]]
- [[Product Psychology]]
- [[Product Discovery]]
- [[Jobs To Be Done]]
- [[Hook Model]]
- [[AI First Products]]
- [[Product Metrics]]
- [[Product-Led Growth]]
