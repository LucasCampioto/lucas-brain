# Hook Model

## Objetivo

Desenhar um ciclo de hábito — gatilho, ação, recompensa variável e investimento — para que o produto volte à mente e às rotinas sem depender só de aquisição paga.

Resolve produtos “úteis uma vez” que não entram na semana do usuário.

---

## Filosofia

- Hábito é retenção barata. Aquisição sem hábito é balde furado.
- Hook não é vício predatório; é associar produto a um problema recorrente.
- Sem recompensa de valor real, variável vira cassino — e a marca paga.
- Investimento do usuário (dados, conteúdo, config) aumenta switching cost ético.
- Frequência natural do job limita o teto do hook. Não force daily se o job é mensal.
- Gatilho externo treina; gatilho interno escala.
- Medir loop > ornamentar UI com “streaks” vazios.
- Se o hook exige notificação agressiva para existir, o core loop está fraco.

---

## Framework

### 1. Os quatro estágios (Nir Eyal)

```
Trigger
        ↓
Action (ação mais simples possível)
        ↓
Variable Reward (recompensa com variabilidade saudável)
        ↓
Investment (trabalho que carrega o próximo ciclo)
        ↓
(volta ao Trigger — preferencialmente interno)
```

### 2. Trigger

| Tipo | Exemplos | Papel |
|------|----------|-------|
| Externo | Email, push, Slack, ads, invite | Treina o hábito |
| Interno | Tédio, ansiedade, ambição, “preciso do número” | Escala |

Desenhe do interno: qual emoção/rotina deve disparar seu produto?

Regra: external trigger deve apontar para a ação mínima, não para home genérica.

### 3. Action

Ação = menor passo até recompensa previsível.

- Um clique / um prompt / um upload
- Defaults e templates
- Reduzir campos e decisões

Se a ação exige tutorial, a recompensa está longe demais — ou a habilidade está alta demais (Fogg).

### 4. Variable Reward

Três tipos (combine com responsabilidade):

| Tipo | No produto | Exemplo saudável |
|------|------------|------------------|
| Tribo | Validação social | Comentário útil, kudos, colaboração |
| Caça | Busca de recurso/info | Resultado novo, insight, match |
| Self | Domínio pessoal | Progresso, streak real, mastery |

Variabilidade = nuance do resultado ou descoberta, **não** loteria de valor básico. O job deve ser cumprido de forma confiável; a borda pode variar.

### 5. Investment

O usuário põe algo que melhora o próximo ciclo:

- Preferências e memoria
- Dados / histórico
- Conteúdo criado
- Integrações
- Relacionamentos (invites, seats)
- Regras / automations

Investment bom aumenta valor e reduz ansiedade da troca — sem hostages obscuros (export bloqueado etc.).

### 6. Instrumente o hook

Métricas por estágio:

- Trigger → open / visit no contexto certo
- Action completion rate
- Tempo até recompensa
- Retorno espontâneo (sem push) = força do trigger interno
- Investimentos por usuário ativo
- Ciclo completo e cycle time

Otimize o elo mais fraco, não o mais fácil de A/B testar.

---

## Aplicações

### SaaS

Hook no workflow semanal do job core. Investment = workspace configurado, histórico, integrações. Evite daily streak se o uso natural é weekly.

### IA

Action: prompt mínimo ou “melhore isto”. Reward: output aceitável + surpresa útil. Investment: memória, estilo, docs indexados, feedback que melhora o modelo no contexto do usuário.

### Empresas B2B

Hook no usuário diário; buyer não “habita” o produto. Habit de time (shared space, rituals) > habit só individual quando o ACV exige.

### Produtos Digitais

Feed e notifications só se alimentarem o job. Hook vazio com push constante é churn com barulho.

### Startups

Prove um hook simples no ICP antes de cinco loops. Frequência do job × valor da recompensa define se o negócio fecha.

---

## Erros Comuns

| Erro | Sintoma | Correção |
|------|---------|----------|
| Push como muleta | Opt-out, brandsafári | Melhorar reward e action |
| Reward sem valor | Pico de clicks, churn | Job first |
| Action pesada | Drop antes do aha | Reduzir passos |
| Sem investment | Reset a cada sessão | Memória / config / data |
| Forçar frequência | Notificações odiadas | Alinhar ao ritmo do job |
| Dark hook | Reputação ruim | Ética + valor real |

---

## Checklist

- [ ] Emoção/rotina do trigger interno nomeada
- [ ] Trigger externo leva à ação mínima
- [ ] Ação é o menor passo até valor
- [ ] Recompensa cumpre o job com confiabilidade + leve variabilidade
- [ ] Investment claro que melhora o próximo ciclo
- [ ] Frequência do hook alinhada à frequência do job
- [ ] Métricas por estágio do ciclo
- [ ] Retorno sem push medido
- [ ] Export / saída honestos (switching cost ético)
- [ ] Nenhuma mecânica depende de enganar o usuário

---

## Modelo Mental

```
Trigger (interno ← treinado por externo)
        ↓
Action mínima
        ↓
Reward (valor + variável saudável)
        ↓
Investment
        ↓
Próximo trigger mais fácil
```

---

## Relacionados

- [[Product Psychology]]
- [[Product-Led Growth]]
- [[Jobs To Be Done]]
- [[Product Metrics]]
- [[User Experience]]
- [[Product Simplicity]]
- [[AI First Products]]
- [[Product Strategy]]
