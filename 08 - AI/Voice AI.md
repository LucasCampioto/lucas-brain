# Voice AI

## Objetivo

Construir experiências de voz (STT → NLU/LLM → TTS/ações) com latência, barge-in e robustez no mundo real — não demos de microfone mudo em sala quieta.

Resolve assistentes que “entendem na demo”, falham com sotaque/ruído e travam o usuário num monólogo.

---

## Filosofia

- Voz é multimodal temporal: timing é UX. 800ms a mais mata a mágica.
- Conversa = turn-taking. Barge-in, endpointing e silêncios são features.
- Transcript sujo é o input real. Desenhe para ASR errors, não para texto perfeito.
- Confirmação curta em ações caras; não peça “confirma que deseja…” a cada flip.
- Fallback para texto/tap quando a voz falha — orgulho de voice-only não paga conta.
- Privacidade do áudio é produto (retenção, on-device vs cloud).
- Avalie WER no seu domínio + task completion, não só MOS genérico de TTS.
- Personalidade do TTS não substitui utilidade do fluxo.

---

## Framework

### 1. Pipeline

```
Áudio in
        ↓
VAD / endpointing
        ↓
STT (+ partials)
        ↓
NLU / LLM / tools
        ↓
Policy (confirm / act / ask)
        ↓
TTS / áudio out + UI espelho
        ↓
Logs: áudio? transcript? decisão?
```

### 2. Latência

Orce por estágio:

| Estágio | Alvo típico (orientativo) |
|---------|---------------------------|
| Partials STT | Contínuos |
| Decisão | < poucos 100ms se caching/routing |
| First audio TTS | Streaming ASAP |
| Turn total | Sinta-se “conversacional” |

Táticas: streaming STT/TTS, LLM pequeno no route, prefetch de tools, respostas especulativas seguras.

### 3. Turn-taking e barge-in

- Detectar fala do user enquanto o bot fala → parar TTS
- Endpointing adaptativo (ruído vs fala contínua)
- Não resetar contexto inteiro no barge-in; ajustar o turno

### 4. Robustez a erro de ASR

- Confirmar slots críticos (valores, nomes, “enviar”)
- N-best / confiança do STT para decidir se pergunta de novo
- Domain lexicon / biasing de vocabulário
- UI com transcript editável em apps

### 5. Design de diálogo

```
Intent claro
        ↓
Slots mínimos
        ↓
Pergunta curta / one thing at a time
        ↓
Echo do entendido (“R$ 40, conta luz”)
        ↓
Ação / próximo passo
```

Evite menus falados longos. Prefira linguagem natural + confirmação pontual.

### 6. Quando voz vs texto

| Preferir voz | Preferir texto |
|--------------|----------------|
| Mãos/olhos ocupados | Dados densos / códigos |
| Turnos curtos | Forms longos |
| Hands-free | Ambientes silenciosos compartilhados |

Muitos produtos vencedores são **voice + screen**.

### 7. Eval e compliance

- WER / intent accuracy no dataset do domínio
- Task success em scripts de chamada
- Latency p50/p95
- Consentimento de gravação, retenção, opt-out
- Testes com sotaques, ruído, overlap

---

## Aplicações

### SaaS

Ditado + comandos no produto (“criar tarefa…”). Sempre mostre e permita editar o transcript.

### IA

Agentes de voz para um job (agendar, qualificar, status). SLA de latência no contrato.

### Empresas B2B

Contact center: assist ao agente humano primeiro; automação em intents fechados. Compliance de gravação.

### Produtos Digitais

Voice UI em mobile/IoT com fallback visual. Personalidade alinhada à marca, sem sacrificar clareza.

### Startups

Um fluxo crítico hands-free. Prototipe com STT/TTS managed; otimize on-device depois do product-market signal.

---

## Erros Comuns

| Erro | Efeito | Correção |
|------|--------|----------|
| Esperar transcript perfeito | Loops de “não entendi” | Confirmação + lexicon |
| Sem barge-in | Frustração | Interrupt TTS |
| Respostas longas faladas | Usuário desliga | Turnos curtos + tela |
| Ignorar latência | Sensação de lag | Streaming end-to-end |
| Voice-only obrigatório | Exclusion | Fallback UI |
| Guardar áudio sem política | Risco legal | Retenção/consent |
| Avaliar só TTS “bonito” | Produto inútil | Task success |

---

## Checklist

- [ ] Job de voz cabe em turnos curtos
- [ ] Pipeline STT→decide→TTS com streaming
- [ ] Barge-in e endpointing definidos
- [ ] Confirmação em slots críticos
- [ ] Transcripts editáveis ou eco claro
- [ ] Fallback para texto/toque
- [ ] Orçamento de latência por estágio
- [ ] Dataset de eval do domínio (sotaque/ruído)
- [ ] Política de áudio e retenção
- [ ] Métricas de task completion em produção

---

## Modelo Mental

```
Áudio + VAD
        ↓
STT (partials)
        ↓
Intent / slots
        ↓
Confirm se crítico
        ↓
Agir + TTS curto
        ↓
Barge-in / fallback
```

---

## Relacionados

- AI UX
- Multimodal AI
- AI Agents
- Prompt Engineering
- AI Products
- LLM Patterns
- AI Automation
