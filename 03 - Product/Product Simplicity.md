# Product Simplicity

## Objetivo

Reduzir complexidade percebida e real até o job core ficar óbvio, rápido e confiável — protegendo retenção, velocidade do time e clareza de marca.

Resolve produtos inchados onde “tudo é possível” e nada é excelente.

---

## Filosofia

- Simplicidade é clareza de prioridade, não pobreza de capacidade.
- Cada feature compete por atenção, manutenção e compreensão.
- Complexidade escondida no sistema pode ser ok; complexidade na cara do usuário raramente é.
- O usuário não quer mais opções — quer progresso sem decisão desnecessária.
- Dizer não é o principal tool de design.
- Simplicidade no D1 ≠ amputar power users; progressive disclosure resolve.
- Código e UX complexos são dívida composta.
- Se precisa explicar demais, o produto ainda está errado (ou o ICP).

---

## Framework

### 1. Defina o “one thing”

Qual ação ou resultado o produto deve tornar inevitável?

Tudo que não serve a esse one thing no caminho crítico ou é removido, ou vai para segundo plano (progressive disclosure).

### 2. Taxonomia da complexidade

| Tipo | Onde mora | Tratamento |
|------|-----------|------------|
| Essencial | Domínio é complexo | Guias, defaults, divisão em passos |
| Acidental (produto) | Features, nav, settings | Cortar / fundir |
| Acidental (org) | Processos, ownership | Ritual e ownership claros |
| Técnica | Arquitetura | Refactor com ROI |

Não trate complexidade essencial como se fosse feature creep — ensine e escale a habilidade.

### 3. Heurísticas de corte

Corte ou adie se:

- Uso < limiar do ICP após instrumentar
- Existe workaround simples sem dor
- Sobrepõe 80% de outra feature
- Só existe por parity / pedido único
- Aumenta suporte sem mover retenção

Pergunta mortal: **Se removêssemos por um mês, quem gritaria — e por quê?**

### 4. Progressive disclosure

```
Default smart (caminho feliz)
        ↓
Opções comuns (um clique longe)
        ↓
Power / advanced (busca, settings, API)
```

Não jogue advanced no onboarding. Não esconda o core atrás de menus.

### 5. Simplicidade operacional

Simplicidade também é:

- Poucos conceitos mentais (objects do domínio)
- Naming consistente
- Um lugar óbvio para cada job
- Empty states que ensinam fazendo
- Erros que dizem o próximo passo

Conceitos demais (“Workspace vs Project vs Board vs Space”) matam time-to-value.

### 6. Ritual de simplificação

- Trimestral: “feature funeral” — candidatos a deprecar
- Por release: budget de complexidade (algo entra → algo simplifica)
- Pós-support spike: root cause vira corte ou redesign, não só FAQ

Ship contínuo sem funeral = entropia garantida.

---

## Aplicações

### SaaS

Nav curta. Setup com defaults. Planos que não exigem calculadora. Integrações: comece pelas que bloqueiam o job, não pelo catálogo vanity.

### IA

Uma tarefa bem feita > doze agents. Controles avançados de prompt atrás de “advanced”. Output simples + edit > wall of parameters no D1.

### Empresas B2B

Admin poderoso ≠ UI do end user poluída. Separe superfícies. Governance progressiva conforme o plano/estágio.

### Produtos Digitais

Uma CTA primária por tela crítica. Remova competição visual. Menos seções no app > mais profundidade no loop.

### Startups

Half-product completo no job > full-product raso. Simplicidade é estratégia de aprendizado.

---

## Erros Comuns

| Erro | Sintoma | Correção |
|------|---------|----------|
| Feature packing | Nav inchada | One thing + funeral |
| Opções no D1 | Abandono no setup | Defaults + disclosure |
| Simplicidade cosmética | UI limpa, fluxo confuso | Conceitos e jobs |
| Medo de deprecar | Zumbis eternos | Ritual + comunicação |
| Parity trap | Clone do concorrente | Job-led cut |
| Over-abstract | “Flexível” demais | Opinião forte no core |

---

## Checklist

- [ ] One thing do produto escrito e compartilhado
- [ ] Caminho crítico sem decisões desnecessárias
- [ ] Defaults que carregam o ICP ao aha
- [ ] Conceitos de domínio mínimos e bem nomeados
- [ ] Progressive disclosure para power features
- [ ] Instrumentação de features candidatas a corte
- [ ] Ritual periódico de deprecação
- [ ] Budget: nova complexidade exige simplificação
- [ ] Support spikes viram redesign/corte, não só docs
- [ ] Promessa de marketing não exige tour de 20 features

---

## Modelo Mental

```
Job core (one thing)
        ↓
Defaults + caminho feliz
        ↓
Disclosure progressivo
        ↓
Medir uso / suporte
        ↓
Cortar / fundir / manter
```

---

## Relacionados

- [[Product Strategy]]
- [[Jobs To Be Done]]
- [[Feature Prioritization]]
- [[User Experience]]
- [[Product Psychology]]
- [[Product Roadmap]]
- [[AI First Products]]
- [[Product Discovery]]
