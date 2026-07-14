# Multimodal AI

## Objetivo

Usar texto, imagem, áudio, vídeo e documentos estruturados no mesmo job — com contratos de entrada/saída e evals por modalidade — sem tratar “vision” como truque de demo.

Resolve pipelines que só funcionam com PNG limpo e quebram com foto de celular, PDF escaneado ou vídeo longo.

---

## Filosofia

- Modalidade é dado, não magia. A pergunta é: qual sinal carrega o job?
- Normalize cedo (resolução, páginas, clips) e preserve metadados (página, timestamp, bbox).
- Nem tudo precisa do frontier multimodal: OCR + LLM texto muitas vezes basta e é mais barato.
- Cite região/tempo quando a decisão importa (“página 3”, “00:12”).
- Latência e custo explodem com pixels/minutos — budget explícito.
- Safety e privacy mudam por modalidade (rostos, voz, docs sensíveis).
- Avalie com amostras reais do usuário, não stock photos.
- UI deve mostrar o que o modelo “viu” (highlights, thumbs), não só o veredicto.

---

## Framework

### 1. Escolha da modalidade

| Sinal | Jobs típicos |
|-------|--------------|
| Imagem | QA visual, UI check, recibos, damage |
| Documento/PDF | Contratos, invoices, manuais |
| Áudio | Calls, ditado, meeting notes |
| Vídeo | Procedimentos, highlights, moderação |
| Texto | Coluna vertebral da orquestração |

Combine só se o outcome exigir. Multimodal por status é desperdício.

### 2. Pipeline genérico

```
Asset in (com ACL)
        ↓
Validar tipo / vírus / tamanho
        ↓
Normalize + segment (páginas, frames, clips)
        ↓
Extract (OCR / captions / embeddings)
        ↓
Retrieve ou raciocinar
        ↓
Gerar com grounded refs
        ↓
UI: resultado + evidência visual/temporal
```

### 3. Documento (o caso mais comum)

1. Detectar born-digital vs scanned
2. OCR / layout (tabelas!) quando preciso
3. Chunk por página/seção com bbox
4. RAG ou extract schema
5. Resposta com página + quote

Não junte 200 páginas num único prompt multimodal sem necessidade.

### 4. Imagem

- Redimensionar com política (max side, qualidade)
- Múltiplas imagens: ordem e papéis claros (before/after, referência vs alvo)
- Pedir output estruturado (achados tipados) + opcional overlay coords
- Few-shot do domínio (defeitos reais > descrições vagas)

### 5. Áudio / vídeo

- Transcrever + diarizar quando o job é conteúdo falado
- Para vídeo: sample frames + áudio; full multimodal frame-a-frame é último recurso
- Segmentar por cenas/minutos; map-reduce com schema
- Guardar timestamps nas evidências

### 6. Custo e qualidade

| Alavanca | Efeito |
|----------|--------|
| Pré-extract (OCR/ASR) | Mais barato, previsível |
| Modelo multimodal só no hard case | Roteamento inteligente |
| Resolução/clips mínimos | Latência |
| Cache de embeddings/OCR | Repeat jobs |

### 7. Eval

- Ground truth com localização (página/bbox/time)
- Task metrics: field accuracy, defect recall, citation hit
- Stress: blur, compressão, handwriting, accents
- Red team: contents sensíveis, jailbreaks via imagem

---

## Aplicações

### SaaS

Upload no fluxo de trabalho (invoice → campos; screenshot → ticket). Mostrar highlight do trecho usado.

### IA

Produto multimodal vertical (ex.: inspeção, creative QA). Preço por asset/minuto com caps claros.

### Empresas B2B

Pipeline de documentos com retenção e eDiscovery. Separar PII/faces. Human review em baixa confiança.

### Produtos Digitais

Creative tools: referência visual + brand kit. Geração com preview e seeds controladas.

### Startups

Um asset type, um schema de saída. OCR+LLM antes de vision end-to-end caro.

---

## Erros Comuns

| Erro | Efeito | Correção |
|------|--------|----------|
| Metade o PDF no modelo | Custo + perda | Segmentar + RAG |
| Ignorar layout/tabelas | Extract errado | Parsers de layout |
| Sem evidência (página/bbox) | Não auditável | Grounding obrigatório |
| Stock-only eval | Ilusão de qualidade | Dados reais |
| Multimodal pra tudo | Burn de $ | Router + OCR first |
| Sem limite de tamanho | Timeouts | Normalize + reject |
| Privacy late | Incidente | Policy na ingestão |

---

## Checklist

- [ ] Job e modalidades necessárias explícitos
- [ ] Validação e limites na ingestão
- [ ] Normalização/segmentação definidas
- [ ] Metadados de evidência (página, tempo, bbox)
- [ ] Router: OCR/ASR vs modelo multimodal
- [ ] Output estruturado + UI de evidência
- [ ] Budget de custo/latência por asset
- [ ] Eval com dados reais do domínio
- [ ] Política de retenção e dados sensíveis
- [ ] Fallback quando a modalidade falha

---

## Modelo Mental

```
Asset + ACL
        ↓
Normalize / segment
        ↓
Extract ou vision
        ↓
Raciocinar ancorado
        ↓
Evidência (página/tempo)
        ↓
UI + eval
```

---

## Relacionados

- RAG
- Context Engineering
- Voice AI
- AI UX
- LLM Patterns
- AI Products
- AI Agents
