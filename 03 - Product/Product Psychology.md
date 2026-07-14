# Product Psychology

## Objetivo

Usar princípios de comportamento humano para desenhar produto que as pessoas entendem, confiam e repetem — sem manipulação barata que destrói retenção e marca.

Resolve UIs “corretas” que ninguém adota e growth hacks que geram ativação falsa.

---

## Filosofia

- Produto é comportamento empacotado. Código só habilita.
- Motivação + habilidade + trigger (Fogg) explicam mais que “mais features”.
- Friction no lugar certo evita erro; friction no lugar errado mata ativação.
- Vieses são ferramentas de clareza, não de enganação.
- Confiança é psicológica: previsibilidade, controle, prova, custo de erro baixo.
- Hábito > spotlight. O loop silencioso vence o onboarding brilhante.
- Se precisa enganar para converter, o job ou o pricing estão errados.
- Ética é estratégia: dark patterns geram churn e reputação negativa composta.

---

## Framework

### 1. BJ Fogg — comportamento mínimo viável

```
Comportamento = Motivação × Habilidade × Trigger
```

Diagnóstico rápido:

| Falha | Sintoma | Ação |
|-------|---------|------|
| Motivação baixa | “Legal” mas não usam | Fortalecer job / resultado visível |
| Habilidade baixa | Querem mas abandonam | Reduzir passos, defaults, templates |
| Trigger ausente | Usam só se lembrarem | Email/push/in-prod no momento certo |

Não aumente motivação com copy histérica se o problema é habilidade.

### 2. Princípios úteis (use com parcimônia)

| Princípio | Uso saudável | Abuso |
|-----------|--------------|-------|
| Progresso / endowed progress | Checklist de setup com 1 passo feito | Barra falsa |
| Defaults | Bom caminho padrão | Opt-outs traidores |
| Prova social | Cases do ICP, contagens reais | Contadores inventados |
| Escassez | Limite verdadeiro de plano/beta | Timer mentiroso |
| Compromisso/consistência | Salvamentos, drafts, streak honesto | Guilt streaks tóxicos |
| Aversão a perda | “Você vai perder X se sair” com verdade | Fear porn |
| Carga cognitiva | Uma decisão por tela no critical path | Dashboards no dia 1 |

### 3. Momentos psicológicos do produto

```
Primeira impressão (clareza do job)
        ↓
Aha (prova de valor)
        ↓
Habit (repetição com baixo esforço)
        ↓
Expansion (novo seat / use case / plano)
        ↓
Advocacy (prova compartilhada)
```

Cada estágio tem motivação e fricção diferentes. Uma UI única raramente serve a todos.

### 4. Emocional + social do job

Além do funcional:

- Medo de errar perante o chefe
- Status de “quem resolve”
- Alívio de carga mental
- Pertencimento ao time/workflow

Design e copy devem reduzir medo e aumentar domínio percebido — especialmente em B2B e IA.

### 5. Confiança e controle

Checklist de confiança:

- O sistema explica o que vai fazer
- Desfazer / editar é óbvio
- Estados de erro são honestos e acionáveis
- Dados sensíveis têm fronteiras claras
- Promessas da landing batem com o produto

IA sem controle (edit, cite, regenerate) gera medo mesmo quando o modelo é bom.

### 6. Guardrails éticos

Pergunte antes de shippar um pattern:

1. Se o usuário entendesse 100%, ainda escolheria?
2. O comportamento ajuda o job ou só a métrica de vanity?
3. O padrão escala com confiança da marca no trimestre?

Se a resposta é frágil, corte.

---

## Aplicações

### SaaS

Onboarding: baixe habilidade (templates, empty states com ação). Retenção: triggers no momento do job, não spam. Upgrade: perda/ganho honestos ligados a limite real.

### IA

Reduza ansiedade: preview, fontes, tom, editabilidade. Motive pelo resultado do job, não pelo “powered by AI”. Trigger após sucesso, não no meio da dúvida.

### Empresas B2B

Psychology do buyer (risco de carreira) ≠ do user (velocidade). POC deve criar segurança para o champion e domínio para o usuário.

### Produtos Digitais

Uma ação primaria por viewport no caminho crítico. Hierarquia visual = hierarquia de decisão.

### Startups

Não compre engajamento com dark patterns. Você ainda não tem confiança de marca para queimar.

---

## Erros Comuns

| Erro | Sintoma | Correção |
|------|---------|----------|
| Motivação artificial | Alta ativação, churn D7 | Job + valor real |
| Feature overload no D1 | Abandono no setup | Habilidade: um caminho |
| Notificações como muleta | Opt-out em massa | Trigger no contexto |
| Dark patterns | Chargebacks / hate | Guardrail ético |
| Ignorar emoção | “Funciona” mas não recomendam | Camada emocional/social |
| Tutorial parede | Ninguém lê | Aprender fazendo |

---

## Checklist

- [ ] Falha de comportamento diagnosticada (motivação / habilidade / trigger)
- [ ] Caminho crítico com poucas decisões e defaults bons
- [ ] Aha visível cedo; progresso perceptível
- [ ] Prova social e claims honestos
- [ ] Controles de desfazer / editar / erro claros
- [ ] Triggers alinhados ao momento do job
- [ ] Patterns revisados sob guardrail ético
- [ ] Copy fala progresso, não jargão de feature
- [ ] Estágios (aha → hábito → expansão) tratados à parte
- [ ] Métricas de sucesso não recompensam manipulação

---

## Modelo Mental

```
Job + circunstância
        ↓
Motivação × Habilidade × Trigger
        ↓
Design do caminho (defaults, progresso, controle)
        ↓
Hábito e confiança
        ↓
Expansão / advocacy
```

---

## Relacionados

- [[Hook Model]]
- [[Jobs To Be Done]]
- [[User Experience]]
- [[Product-Led Growth]]
- [[Product Simplicity]]
- [[Product Metrics]]
- [[AI First Products]]
- [[Product Discovery]]
