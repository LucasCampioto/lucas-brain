# Unit Economics

## Objetivo

Medir e melhorar a saúde financeira por unidade (cliente, conta, pedido, seat) para saber se o crescimento cria valor ou destrói caixa.

Resolve scale cego: “crescemos ARR” enquanto a unidade perde dinheiro.

---

## Filosofia

- Se a unidade não funciona, o volume amplia o problema.
- Unit economics é conversa de produto, GTM e finanças juntos — não só CFO.
- Aproxime cedo. Perfeição de alocação atrasada mata decisões.
- CAC baixo com churn alto ainda é economia ruim.
- LTV sem retenção real é fanfic.
- Margem bruta importa tanto quanto growth rate — especialmente em IA.
- Preço e packaging são alavancas de unit economics, não só “comercial”.
- Revise hipóteses quando o mix de canal ou ICP muda.

---

## Framework

### 1. Defina a unidade

Escolha uma unidade primária:

- Conta paga (SaaS B2B)
- Seat
- Pedido / transação
- Usuário ativo pagos
- Conversation / job (cuidado com complexidade)

Unidade errada = dashboard bonito e decisão ruim.

### 2. Equação central

```
Receita por unidade (ARPU / ACV)
        ↓
− Custo variável de servir (COGS)
        ↓
= Contribuição bruta
        ↓
− CAC (adquirir a unidade)
        ↓
= Contribuição após aquisição
        ↓
× Vida útil (retenção / churn)
        ↓
= Valor econômico da unidade
```

### 3. Métricas essenciais

| Métrica | Pergunta que responde |
|---------|----------------------|
| Gross margin % | Sobrou após custo de servir? |
| CAC | Quanto custa adquirir? |
| LTV | Quanto vale ao longo da vida? |
| LTV:CAC | O retorno justifica a aquisição? |
| Payback (meses) | Em quanto tempo recupera o CAC? |
| NRR / GRR | Expande ou só retém? |
| Magic number / CAC efficiency | Sales+marketing efficient? |

Heurísticas comuns (ajuste ao contexto): LTV:CAC ≥ 3 em muitos SaaS; payback < 12–18 meses conforme caixa e estágio.

### 4. Como calcular sem teatro

**CAC** = (Sales + Marketing spend no período) / novos clientes pagos no período  
(Separe canais; cuidado com lag.)

**LTV (simples)** = ARPU × gross margin % × (1 / churn mensal)  
Ou use coortes reais quando tiver dados.

**Payback** = CAC / (contribuição mensal bruta da conta)

### 5. Diagnóstico rápido

| Sintoma | Hipótese | Alavanca |
|---------|----------|----------|
| CAC alto, LTV ok | Canal/ICP errado | Mistura de canal, mensagem |
| CAC ok, LTV baixo | Churn / preço / valor | Retenção, packaging |
| Margem baixa | COGS ou desconto | Custo servir, price, usage caps |
| Payback longo | Ticket baixo ou cycle longo | Expansion early, anual, foco ICP |
| NRR < 100% | Sem expansion / churn | Upsell path, success |

### 6. Cadência de gestão

```
Semana: margem e burn por experimento
        ↓
Mês: CAC, payback, churn por cohort/canal
        ↓
Quarter: LTV:CAC, NRR, revisão de preço
        ↓
Decisão: escalar canal / corrigir unidade / pausar growth
```

### 7. Armadilhas de cálculo

- Incluir só paid ads e esquecer salaries de sales
- LTV com churn de free users misturados
- Ignorar credit notes, refunds, descontos
- Em IA: esquecer custo de tokens/infra no COGS
- Comparar LTV de enterprise 3-year com churn SMB mensal

---

## Aplicações (SaaS, IA, Empresas B2B, Produtos Digitais, Startups)

### SaaS

Foque payback, NRR e gross margin. Expansion pode salvar LTV. Separe self-serve vs sales-led.

### IA

COGS de inferência no centro. Usage pricing precisa de piso e limites. Simule heavy users.

### Empresas B2B

Inclua custo de implementation/CS no quadro. ACV alto não salva se onboarding custa e churna.

### Produtos Digitais

CAC de content/ads vs LTV de assinatura. Refunds e chargebacks entrame na margem.

### Startups

Use faixas e cenários. Decisão: “essa unidade pode ficar boa?” Impor planilha perfeita cedo atrasa learnings.

---

## Erros Comuns

| Erro | Efeito | Correção |
|------|--------|----------|
| Escalar com payback infinito | Quebra de caixa | Cap de spend até unidade ok |
| LTV inflado | Overinvest | Coortes + churn real |
| Misturar canais | Otimiza o errado | Unit economics por canal/ICP |
| Ignorar COGS | Margem some na escala | Gross margin semanal |
| Vanity ARR | Falsa saúde | Contribuição e cash |
| Otimizar CAC cortando qualidade | Churn sobe | Qualidade de lead |

---

## Checklist

- [ ] Unidade de análise definida
- [ ] ARPU/ACV conhecido por segmento
- [ ] Gross margin estimada (inclui COGS reais)
- [ ] CAC por canal principal
- [ ] Churn/retenção por coorte
- [ ] LTV e LTV:CAC calculados com hipóteses explícitas
- [ ] Payback em meses monitorado
- [ ] NRR/GRR no dashboard
- [ ] Descontos e refunds refletidos
- [ ] Regra clara: quando escalar vs pausar aquisição

---

## Modelo Mental (text diagram with ↓)

```
Cliente adquirido (CAC)
        ↓
Ativa e paga (ARPU)
        ↓
Custo de servir (margem)
        ↓
Retém / expande (LTV)
        ↓
Payback ocorre
        ↓
Sobras financiam próximo ciclo
        ↓
Só então aumentar spend
```

---

## Relacionados

- [Pricing](Pricing.md)
- [Business Models](Business%20Models.md)
- [Revenue Streams](Revenue%20Streams.md)
- [Product Market Fit](Product%20Market%20Fit.md)
- [Business Flywheel](Business%20Flywheel.md)
- [Business Validation](Business%20Validation.md)
- [Business Strategy](Business%20Strategy.md)
- [Business Moats](Business%20Moats.md)
