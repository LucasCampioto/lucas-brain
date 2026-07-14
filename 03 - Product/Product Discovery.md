# Product Discovery

## Objetivo

Validar o que vale construir antes de gastar semanas de engenharia — transformando opinião, pedido e intuição em evidência acionável.

Resolve o ciclo “build → lançar → descobrir que ninguém usa”.

---

## Filosofia

- Discovery não é pesquisa acadêmica. É redução de risco de decisão.
- Oportunidade sem evidência é ficção investida.
- Ouvir usuário ≠ obedecer usuário. Extrair job, contexto e workaround.
- Premature build é o imposto mais caro de produto.
- Hipótese fraca gera experimento inútil. Escreva a aposta antes do teste.
- Discovery contínuo vence “big bang research” trimestral.
- O custo de um experimento barato é sempre menor que o de uma feature errada.
- Discovery sem critério de kill vira teatro de validação.

---

## Framework

### 1. Defina o risco que você está comprando

Antes de qualquer entrevista ou prototype, nomeie o risco dominante:

| Risco | Pergunta |
|-------|----------|
| Valor | Alguém paga / usa de verdade? |
| Usabilidade | Consigue completar o fluxo? |
| Viabilidade | Dá para construir com o que temos? |
| Negócio | Modelo / pricing / canal fecham? |

Discovery foca no risco mais alto primeiro. Não misture tudo num único workshop.

### 2. Escreva a hipótese em uma frase

Formato:

> Acreditamos que [ICP] fará [comportamento] porque [motivação/job], o que levará a [métrica]. Saberemos que falhou se [critério de kill].

Sem kill criteria, você vai racionalizar qualquer resultado.

### 3. Escolha o método mínimo

```
Sinal fraco (dado, suporte, churn)
        ↓
Hipótese escrita
        ↓
Método barato (entrevista, concierge, smoke test, fake door)
        ↓
Critério de sucesso/falha
        ↓
Decisão: build / iterate / kill
```

Ordem típica de custo:

1. Dados existentes + suporte
2. Entrevistas / observação
3. Concierge / Wizard of Oz
4. Landing + waitlist / fake door
5. Prototype clicável
6. MVP fino em produção

Pule etapas só se o risco restante for baixo.

### 4. Entreviste para job, não para feature

Perguntas que geram ouro:

- Conte a última vez que tentou resolver isso
- O que você fez antes/durante/depois?
- O que quase deu errado?
- O que você improvisou?
- O que teria que acontecer para você mudar de ferramenta?

Evite: “Você usaria X?” — resposta aspiracional, zero sinal.

### 5. Triangule evidência

Uma fonte mente. Três fontes sustentam decisão:

| Fonte | O que valida |
|-------|--------------|
| Comportamento (uso, churn, funil) | O que fazem de verdade |
| Conversas | Por quê e contexto |
| Experimentos | Se o futuro comportamento muda |

Se dado, conversa e teste apontam direções opostas, o experimento manda — desde que bem desenhado.

### 6. Cadência de discovery

- Semanal: 3–5 conversas ou reviews de sinal (suporte, sessões, churn)
- Por aposta grande: discovery explícito antes do commit de build
- Contínuo: instrumentação + “opportunity review” no ritual de produto

Time que só discovery em workshop mensal está atrasado.

---

## Aplicações

### SaaS

Descubra o caminho até o aha e o job que trava renovação. Integrações e “nice to have” só entram no discovery se bloquearem retenção do ICP.

### IA

Valide a tarefa end-to-end (input → output confiável → ação seguinte), não o wow do demo. Meça taxa de aceitação do output e edição humana.

### Empresas B2B

Discovery com buyer e user — jobs diferentes. Pilotos e design partners com critério de sucesso escrito evitam roadmap de opinião do champion.

### Produtos Digitais

Observe sessão real antes de redesenhar. Heatmap sem contexto mente; gravação + entrevista fecha o porquê.

### Startups

Discovery é o produto até PMF. Prefira concierge e vendas manuais a features. Se você não consegue entregar valor na mão, software não vai salvar.

---

## Erros Comuns

| Erro | Sintoma | Correção |
|------|---------|----------|
| Confirmar bias | Só pergunta a quem gosta | Amostra mista + kill criteria |
| Pesquisar features | “Quer dark mode?” | Explorar job e workaround |
| Discovery infinito | Nunca shippa | Timebox + decisão explícita |
| Ignorar dados | Só anedota | Triangulação |
| MVP inchado | Meses de build “para validar” | Método mais barato primeiro |
| Sem síntese | Notas viram lixo | Insight → hipótese → próxima aposta |

---

## Checklist

- [ ] Risco dominante nomeado (valor / usabilidade / viabilidade / negócio)
- [ ] Hipótese escrita com critério de kill
- [ ] Método escolhido é o mais barato que reduz o risco
- [ ] Entrevistas focam em comportamento passado, não intenção futura
- [ ] Evidência triangulada (dado + conversa + experimento quando possível)
- [ ] Insights traduzidos em decisão de produto, não só relatório
- [ ] Cadência semanal de sinal (suporte, uso, churn)
- [ ] Apostas grandes têm discovery antes do commit de engenharia
- [ ] “Não construir” é resultado válido e celebrado
- [ ] Aprendizado documentado onde o time decide (não só no Notion morto)

---

## Modelo Mental

```
Risco nomeado
        ↓
Hipótese + kill criteria
        ↓
Método barato
        ↓
Evidência (dado + conversa + teste)
        ↓
Build / iterate / kill
        ↓
Próximo risco
```

---

## Relacionados

- [[Product Strategy]]
- [[Jobs To Be Done]]
- [[Feature Prioritization]]
- [[Product Roadmap]]
- [[Product Metrics]]
- [[User Experience]]
- [[AI First Products]]
- [[Product-Led Growth]]
