# Go To Market

## Objetivo

Quando um agente for perguntado qual a melhor estratégia de go-to-market de um projeto concreto, devolver uma aposta preenchida — ICP, lugar onde essas pessoas já estão, canal, oferta, mensagem e sprint — com o motivo tirado do próprio produto.

Resolve a resposta vazia ("defina seu ICP, escolha um canal"). O agente infere e propõe. O fundador executa ou corrige um fato.

---

## Filosofia

- GTM de projeto real é uma recomendação, não um questionário.
- A landing, o preço, o README e o plano já dizem quem é o comprador. Use isso como evidência.
- Um ICP, uma oferta de resultado, um canal nesta sprint. Três canais no dia 1 impedem saber o que funcionou.
- Onde o comprador já está concentrado vale mais do que o canal da moda.
- Volume de fundador, não de time comercial. Vinte abordagens novas por semana com follow-up ensinam. Setecentas atividades não cabem.
- Mude uma variável por sprint. ICP, ou mensagem, ou canal. Nunca os três.
- Produto já no ar entra na mesma esteira que ideia no papel. A porta muda. As estações não.
- Primeiros clientes existem para gerar um número (horas, dinheiro, atraso evitado). Esse número vira a próxima mensagem.
- Sem prazo e sem scorecard, "não vendeu" vira desculpa para a próxima ideia.

---

## Framework

### 0. Contrato de saída (obrigatório)

Se a pergunta for a estratégia de go-to-market, distribuição ou "como vender" **deste** produto, leia o repositório e a superfície pública (README, landing, preços, copy, para quem o plano já fala) antes de responder.

Entregue neste formato, preenchido:

```
ICP
Quem paga, em uma frase.
Por quê: 2–3 fatos copiados do produto (preço, plano, frase da página, job).

Onde eles já estão
3 lugares concretos.
Como achar as primeiras 20 pessoas ou contas, com o filtro (cargo, grupo, palavra, parceiro).

Canal #1 desta sprint
Um só.
Por que este, e por que os outros dois ficam para depois.

Oferta
Ajudo [ICP] a [resultado] sem [dor].
Primeira mensagem pronta para enviar. Sem pitch de feature na linha 1.

Sprint de 4 semanas
Abordagens novas por semana (teto de fundador: ~20).
Cadência curta (dia 1, 3, 7, 14).
Métrica de sexta.
Regra: dobrar / mudar UMA variável / matar.
```

**Proibido** na resposta:

- "Defina seu ICP."
- "Escolha um canal."
- "Faça marketing / conteúdo / branding."
- "Depende do seu mercado."
- Lista de 5 canais para testar juntos.
- Plano de 90 dias com ads antes de existir resposta.

Se faltar um fato decisivo (não dá para saber se o comprador é o usuário), faça **uma** pergunta objetiva e já entregue a aposta condicional ("se o pagador for X, o canal é Y"). Não devolva o framework.

Duas portas, mesma esteira a partir da oferta:

| Porta | Quando | Primeiro ato |
|-------|--------|----------------|
| A | Ideia ainda no papel | Oferta + 20 conversas antes de construir o produto |
| B | Produto já no ar | Ler o que a página já promete e vender isso, sem feature nova |

### 1. Como inferir o ICP

Não pergunte "quem é seu cliente?". Extraia nesta ordem:

1. **Quem a própria oferta já nomeia.** Plano, headline, "feito para", caso de uso. Se o plano diz "agências e consultorias", o ICP inicial é esse. Não generalize para "empresas que precisam de gestão".
2. **Quem sente a dor da página no corpo.** A frase de caos (planilha, WhatsApp, atraso, lead perdido) aponta o operador. O preço por usuário / por empresa aponta o comprador. Se forem pessoas diferentes, o canal é o do **comprador**.
3. **Quem consegue pagar o preço que já está na página.** Ticket e unidade (seat, clínica, projeto) eliminam ICPs que não cabem.
4. **Onde esse comprador está concentrado**, não onde "está online".

ICP ruim: "empresas que poderiam usar IA".
ICP bom: "dono de agência de 5–30 pessoas que cobra o time no WhatsApp e fecha o mês sem saber as horas".

### 2. Mapa de concentração

Escolha a linha pelo ICP inferido. Nomeie o lugar e o filtro. Se nenhuma linha servir, declare a hipótese e o primeiro lugar para testar. Não peça para o usuário escolher.

| Comprador | Onde já está junto | Como achar as primeiras 20 |
|-----------|--------------------|----------------------------|
| Dono de agência / consultoria / software house | LinkedIn (cargo: founder, CEO, diretor de operação); grupos de donos de agência; comunidades de tráfego/marketing | Busca por cargo + "agência" + cidade ou nicho. Anote ferramenta atual se aparecer no perfil |
| Dono de clínica / operação local | Instagram e WhatsApp do nicho; fornecedor que já tem a carteira (equipamento, agência de tráfego, sistema clínico) | 20 perfis com equipe visível (2–10 profissionais) + 5 parceiros que atendem dezenas |
| Comprador B2B que já terceiriza o trabalho | Quem assina o contrato de outsourcing (CFO, head, founder), não o profissional que usa a ferramenta | Lista do cargo que paga o serviço. Mensagem sobre o outcome, não sobre o software |
| Dev / indie / builder | Discord do nicho (linguagem, framework, indie hackers); GitHub; comunidades de launch | 1 servidor onde o job acontece. Chegar com o problema, não com o anúncio |
| Time que já usa uma ferramenta incumbente | Comentários, grupos e reviews dessa ferramenta; cargos "ops", "PMO", "head de entrega" | Perguntar o que ficou de fora da ferramenta. Não atacar o incumbente na primeira linha |
| Consumidor de hábito ou identidade | Onde o hábito já ocorre (app, creator, grupo, rotina) | 1 creator ou 1 comunidade que já junta esse hábito. Não "redes sociais" |

Canal controlável (outbound, DM, e-mail, WhatsApp, ligação) é o #1 enquanto não houver resposta medida. Conteúdo entra como prova para quem recebeu a mensagem. Parceiro entra depois do primeiro número. Ads entram depois que a mensagem já converte conversa em reunião.

### 3. Oferta

A página quase sempre vende a ferramenta. A mensagem vende o trabalho pronto.

Fórmula:

> Ajudo [ICP] a [resultado observável] sem [dor que a página já admite].

A primeira mensagem faz uma pergunta sobre a operação atual. Não apresenta o produto.

Ruim: "Olá, temos uma plataforma com IA que organiza tarefas."
Bom: "Vi que vocês são um time de ~15. Hoje as horas e o follow-up ficam no WhatsApp e na planilha, ou já existe um lugar só?"

Se a pessoa responder, a segunda mensagem nomeia a hipótese ("estou testando organizar isso em 7 dias para o gestor parar de cobrar status") e cala. Discovery. Não demo.

### 4. Sprint de 4 semanas

Teto de fundador que também constrói:

| Semana | Fazer | Não fazer |
|--------|--------|-----------|
| 1 | ICP escrito a partir do produto. Oferta em 1 frase. Lista de 20. Mensagem A. Enviar | Feature nova. Ads. Segundo canal |
| 2 | +20. Follow-up da semana 1 (dia 3 e 7). Anotar a objeção real | Trocar o ICP porque "ninguém respondeu" em 20 envios |
| 3 | +20. Uma mensagem B só se a A estiver abaixo de ~2% de resposta em 40 envios | Abrir parceiro, conteúdo diário e outbound juntos |
| 4 | +20. Scorecard. Decisão | Inventar outro produto |

Cadência por conta: dia 1 contato, dia 3 follow-up curto com outro ângulo da mesma dor, dia 7 prova ou pergunta, dia 14 último toque. Sem "oi, viu minha mensagem?".

~80 contas no ciclo. Cada uma com follow-up. Isso é o experimento. Não 500 empresas.

### 5. Scorecard e decisão

Toda sexta:

| Estágio | Número |
|---------|--------|
| Contas novas | |
| Abordagens feitas | |
| Respostas | |
| Conversas | |
| Reuniões | |
| Propostas ou pilots | |
| Clientes | |

| Sinal em ~80 abordagens | Decisão |
|-------------------------|---------|
| Resposta &lt; ~2% | Não aumente volume. Mude **a mensagem** ou **o filtro da lista**. Um só |
| Resposta ok, quase nenhuma conversa | Mude o pedido (CTA), não o produto |
| Conversas sem dor | ICP errado. Reescreva quem paga com o que as conversas disseram |
| Dor clara, ninguém paga | Oferta, preço, urgência ou prova. Uma variável |
| Alguém paga | Pare de inventar. Repita o mesmo canal até 3 clientes com um número |
| 3 clientes com o mesmo canal e um resultado medido | Aí sim: conteúdo como prova, pedido de indicação, 1 parceiro |

Meta 1: 3 clientes com um número publicável.
Meta 2: o cliente 4 vem do mesmo canal, sem mensagem nova.
Meta 3: alguém além do fundador consegue repetir a abordagem.

### 6. Exemplo preenchido (Dit.ai)

Produto: visibilidade da operação (lead → entrega), track de horas, IA no fluxo. Plano Growth nomeia "agências e consultorias". Preço por usuário (R$ 49–99). Dor na página: planilha, WhatsApp, horas invisíveis, atraso surpresa.

**ICP:** dono ou head de entrega de agência/consultoria com ~5–30 pessoas, que ainda reconstrói o dia no Zap e na planilha.

**Onde estão:** LinkedIn (founder / diretor de operação + "agência"); grupos de donos de agência; uma agência de tráfego ou consultor que já implanta ferramenta em vários clientes (parceiro, só depois do primeiro case).

**Canal #1:** outbound no LinkedIn para o cargo acima. Conteúdo semanal fica para a semana em que existir um número ("37 tarefas sem responsável"). Sem ads.

**Oferta:** em 7 dias a operação sai do WhatsApp e da planilha: horas, atrasos e o que cada lead virou, visíveis. A assinatura é o que fica depois. A implantação é o que se vende agora.

**Primeira mensagem:** "Vi que vocês têm um time de ~15. Hoje o acompanhamento de tarefas e prazos fica no WhatsApp e na planilha, ou já tem um lugar só?"

**Sprint:** 20 agências novas por semana, 4 semanas, cadência dia 1/3/7/14. Sexta olha o scorecard. Uma variável por vez.

---

## Aplicações

### SaaS

O plano e o preço já recortam o ICP. Venda a implantação do job (7 dias, piloto, resultado), não o login. Feature nova não entra na sprint de descoberta de canal.

### IA

Se a página vende "IA", reescreva a oferta no trabalho que a IA executa. Comprador é quem paga o trabalho hoje, não quem acha modelo interessante.

### Empresas B2B

Canal #1 é lista + conversa com o economic buyer. Parceiro que já tem a carteira é o segundo ato, com comissão, depois do primeiro número.

### Produtos Digitais

Comunidade, creator ou marketplace onde o hábito já existe. Um lugar, 4 semanas, o mesmo scorecard. "Postar" sem lugar nomeado não é canal.

### Startups

Porta A: 20 conversas com a oferta antes do build. Porta B: o que já está no ar é a oferta até o scorecard mandar mudar uma variável.

---

## Erros Comuns

| Erro | Efeito | Correção |
|------|--------|----------|
| Responder com canvas vazio | Fundador não executa | Preencher ICP, lugar, canal, mensagem |
| ICP "empresas que usam X" | Lista impossível | Cargo + tamanho + dor da página |
| 3 canais na semana 1 | Não dá para atribuir | 1 canal até o scorecard |
| Volume de SDR (100+/semana) | Sprint abandonada | ~20 contas novas/semana |
| Pitch de produto na linha 1 | Ignorado | Pergunta sobre a operação atual |
| Ads antes de resposta | Tráfego em hipótese crua | Ads depois de reunião recorrente |
| Trocar de ideia no meio do sprint | Zero aprendizado | Só decide na semana 4, uma variável |
| Feature para "ajudar a vender" | Atrasa a lista | Zero build na sprint de canal |
| Pedir ao usuário para definir o óbvio | Agente preguiçoso | Citar a frase do produto |

---

## Checklist

- [ ] A resposta nomeia quem paga, com citação do produto
- [ ] Há 3 lugares concretos e o filtro das primeiras 20 contas
- [ ] Há um único canal #1 e o motivo de adiar os outros
- [ ] A oferta é resultado, e a primeira mensagem não apresenta feature
- [ ] O volume cabe num fundador (~20 novas/semana, 4 semanas)
- [ ] A sexta tem scorecard e regra de uma variável
- [ ] Porta A ou B está explícita
- [ ] Nenhum parágrafo pede "defina seu ICP" ou "escolha um canal"

---

## Modelo Mental

```
Ler o produto (quem a página já nomeia)
        ↓
ICP + onde essa gente já está junta
        ↓
Oferta de resultado + 1 mensagem
        ↓
1 canal, ~20 contas/semana, 4 semanas
        ↓
Scorecard
        ↓
Dobrar / mudar uma variável / matar
        ↓
3 clientes com um número
        ↓
Indicação, prova e 1 parceiro
```

---

## Relacionados

- Services as Software
- Business Launch
- Founder-Led Growth
- Product Market Fit
- Pricing
- Outbound Sales
- Sales System
- Content Engine
- Growth Loops
- Visibility Engine
- Brand Positioning
- Retention
