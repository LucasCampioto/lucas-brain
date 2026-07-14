# Growth Automation

## Objetivo

Automatizar gatilhos, mensagens e fluxos de growth que escalam sem headcount linear — sem virar spam robotizado que destrói marca e retenção.

Resolve times heroicos em spreadsheet e lifecycle “manual para sempre”.

---

## Filosofia

- Automatize o repetível. Personifique o excepcional (ACV alto, momentos de risco).
- Gatilho por evento de produto > blast de calendário.
- Automação ruim escala dano. Comece com frequência baixa e opt-out claro.
- Dados sujos automatizam erro. Instrumentação é pré-requisito.
- Cada fluxo tem dono, métrica e data de revisão.
- Menos mensagens certas > sequência de 14 emails genéricos.
- Automação serve ativação, retenção, expansão e referral — não só “nurture”.
- Humano no loop onde confiança e contrato pesam.

---

## Framework

### 1. Mapa do que automatizar

| Momento | Automação típica |
|---------|------------------|
| Pós-signup | Setup nudges até aha |
| Quase-aha | Empurrão in-app + email |
| Habit risk | Win-back curto |
| Health up | Pedir expansão / review |
| Health down | Alerta CS / offer de ajuda |
| Referral ready | Prompt de invite pós-vitória |
| Billing | Dunning, upgrade prompts |

### 2. Desenho de um fluxo

```
Evento / condição
        ↓
Segmento elegível?
        ↓
Canal certo (in-app > email > push)
        ↓
Mensagem com um CTA
        ↓
Supressão / frequência cap
        ↓
Medir conversão ao outcome
```

### 3. Regras de higiene

1. Frequency caps globais
2. Preferência de canal
3. Stop ao converter (não continue a sequência)
4. Stop ao churnar / unsub
5. QA em staging com usuários teste

### 4. Stack mínima

- Eventos de produto confiáveis
- Perfil/traits (plano, aha, usage)
- Orquestrador (Customer.io, Braze, HubSpot, ou in-house)
- Feature flags para rollouts
- Dashboard de performance por fluxo

### 5. Prioridade de build

Ordem:

1. Activation sequences
2. Dunning / payment recovery
3. Re-activation leve
4. Expansion triggers
5. Referral prompts

Não comece pelo newsletter decorativo.

### 6. Governança

- Catálogo de automações (nome, dono, métrica)
- Review mensal: matar ou melhorar
- Conteúdo revisado por brand/produto
- Experimentos A/B em subject/CTA nos fluxos top

---

## Aplicações

### SaaS

Lifecycle event-based. In-app checklist sincronizado com email. Expansion quando seats/usage batem limite.

### IA

Alertas de quota, dicas de workflow no momento de falha de output, onboarding de primeiro job — sem flooding.

### Empresas B2B

Alertas de health para CS. Sequências de adopting para seats inativos. Outbound automation com relevância mínima.

### Produtos Digitais

Push só com ROI de retenção. Preferências claras. Automação de share/invite pós-sucesso.

### Startups

3 fluxos bem feitos > 20 zumbis. Construa events primeiro; ferramentas depois.

---

## Erros Comuns

| Erro | Efeito | Correção |
|------|--------|----------|
| Blast calendário | Unsubscribe / ignore | Event triggers |
| Sem frequency cap | Ódio de marca | Caps + preferências |
| Fluxo sem dono | Apodrece | Catálogo + review |
| Automação com dado errado | Mensagem absurda | QA + fonte única |
| Substituir CS human | Churn enterprise | Humano no loop |
| Medir opens só | Miopia | Outcome (aha, paid) |

---

## Checklist

- [ ] Eventos core alimentam o orquestrador
- [ ] Top 3 fluxos de ativação no ar
- [ ] Frequency caps e stop conditions
- [ ] Catálogo com donos
- [ ] Métricas por fluxo no dashboard
- [ ] Review mensal de kill/improve
- [ ] Expansion e dunning cobertos
- [ ] Opt-out e preferências respeitados
- [ ] A/B nos fluxos de maior volume
- [ ] ACV alto tem path humano

---

## Modelo Mental

```
Evento de produto
        ↓
Segmento + elegibilidade
        ↓
Mensagem mínima
        ↓
Cap / stop
        ↓
Outcome medido
        ↓
Iterar ou matar
```

---

## Relacionados

- Activation
- Retention
- Growth Systems
- Growth Dashboard
- Growth Experiments
- Experimentation
- Viral Loops
- AI Automation
