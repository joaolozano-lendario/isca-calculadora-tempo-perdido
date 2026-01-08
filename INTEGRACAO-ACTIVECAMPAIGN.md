# Relatorio de Integracao: Calculadora de Tempo Perdido + ActiveCampaign

> **Data**: 08/Janeiro/2026
> **Projeto**: Isca - Calculadora de Tempo Perdido
> **Ambiente AC**: Academia Lendaria (3997823)
> **Evento Destino**: Imersao Pratica de IA para Negocios (24-25/Jan/2026)
> **TAXONOMIA**: Atualizada para padrao de governanca em 08/Jan/2026

---

## 1. Visão Geral da Estratégia

### 1.1 Narrativa Central
**"O Dono que Virou Funcionário"** + **"O Dia que Não Rende"**

A calculadora explora a dor de empresários que:
- Abriram empresa para ter liberdade, mas trabalham mais que CLT
- Passam o dia em tarefas operacionais que poderiam delegar
- Não sabem quanto isso custa em reais por ano

### 1.2 Estrutura do Funil

```
┌─────────────────────────────────────────────────────────────────┐
│  TOPO: Tráfego (Ads Meta/Google, Orgânico)                      │
└───────────────────────────┬─────────────────────────────────────┘
                            │
                            ▼
┌─────────────────────────────────────────────────────────────────┐
│  CAPTURA: CapturaPage.tsx                                       │
│  - Hook: useLeadCapture                                         │
│  - Campos: Nome, Email, WhatsApp, Cargo, Empresa                │
│  - API: POST /api/lead                                          │
│  - Tracking: Meta Pixel 'Lead' + GTM 'lead_capture'             │
└───────────────────────────┬─────────────────────────────────────┘
                            │
                            ▼
┌─────────────────────────────────────────────────────────────────┐
│  CALCULADORA: CalculadoraPage.tsx                               │
│  - Input: Pró-labore, Horas/semana, Atividades operacionais     │
│  - Cálculo: valorHora × horasOperacionais × 4 × 12              │
│  - Output: custoAnual, percentual, nivelDor                     │
└───────────────────────────┬─────────────────────────────────────┘
                            │
                            ▼
┌─────────────────────────────────────────────────────────────────┐
│  RESULTADO: ResultadoPage.tsx                                   │
│  - Hook: useResultSubmit (PENDENTE INTEGRAÇÃO)                  │
│  - API: POST /api/lead/qualify                                  │
│  - Tracking: Meta Pixel 'CompleteRegistration' + GTM            │
│  - Envia: campos customizados + tags de qualificação            │
└───────────────────────────┬─────────────────────────────────────┘
                            │
                            ▼
┌─────────────────────────────────────────────────────────────────┐
│  ACTIVECAMPAIGN: Segmentação + Nurture                          │
│  - Lista 52: Isca - Calculadora Tempo                           │
│  - Tags de qualificação por nível de dor                        │
│  - Automações de nurture (A CRIAR)                              │
└───────────────────────────┬─────────────────────────────────────┘
                            │
                            ▼
┌─────────────────────────────────────────────────────────────────┐
│  CONVERSÃO: Imersão Prática de IA para Negócios                 │
│  - Data: 24-25 de Janeiro de 2026                               │
│  - Preço: R$ 348 (Early Bird) → R$ 388 (Last Call)              │
│  - Garantia: Sistema funcionando em 48h ou dinheiro de volta    │
└─────────────────────────────────────────────────────────────────┘
```

---

## 2. Estrutura de Dados no ActiveCampaign

### TAXONOMIA DE GOVERNANCA

**Formato Obrigatorio:** `[CODIGO]_[AREA]_[TIPO]_[Nome]`
**Temporarios:** sufixo `_TEMP_[MES][ANO]`

| Area | Codigo |
|------|--------|
| Marketing | MKT |
| Vendas/Comercial | COM |
| Customer Success | CS |
| Produto | PROD |
| Compartilhado | MASTER |

### 2.1 Lista Principal

| Campo | Valor (NOVA TAXONOMIA) |
|-------|------------------------|
| **ID** | 56 |
| **Nome** | 03_MKT_Lista_IscaCalculadoraTempo_TEMP_JAN26 |
| **String ID** | 03mktlistaiscacalculadoratempotempjan26 |
| **Canal** | email |
| **sender_url** | https://academialendaria.ai |
| **sender_reminder** | Voce recebe este email porque baixou a Calculadora de Tempo Perdido |

> **Nota de Migracao:** Lista antiga ID 52 mantida para referencia

### 2.2 Campos Customizados

| ID | Nome | Tipo | Perstag | Descrição |
|----|------|------|---------|-----------|
| **166** | Horas Perdidas Semana | text | `HORAS_PERDIDAS_SEMANA` | Horas perdidas por semana |
| **167** | Custo Anual Estimado | text | `CUSTO_ANUAL_ESTIMADO` | Custo anual em R$ |
| **168** | Principal Ralo Tempo | dropdown | `PRINCIPAL_RALO_TEMPO` | Principal atividade consumidora |
| **169** | Nivel Dor Tempo | dropdown | `NIVEL_DOR_TEMPO` | Nível de qualificação |
| **170** | Data Calculo Tempo | date | `DATA_CALCULO_TEMPO` | Data do cálculo |

### 2.3 Opções do Campo 168 (Principal Ralo)

| ID | Value | Label |
|----|-------|-------|
| 607 | duvidas | Respondendo dúvidas da equipe |
| 608 | reunioes | Em reuniões de alinhamento |
| 609 | tarefas | Fazendo tarefas que deveria delegar |
| 610 | incendios | Apagando incêndios |
| 611 | informacao | Buscando informações |

### 2.4 Opções do Campo 169 (Nível de Dor)

| ID | Value | Label |
|----|-------|-------|
| 612 | baixo | Baixo (0-10h/semana) |
| 613 | medio | Médio (10-20h/semana) |
| 614 | alto | Alto (20h+/semana) |

### 2.5 Tags de Qualificacao (NOVA TAXONOMIA)

| ID | Tag (Nova) | Descricao | Uso |
|----|------------|-----------|-----|
| **230** | MKT_Tag_IscaCalculadoraTempo | Origem da isca | Aplicada na captura |
| **231** | MKT_Tag_CompletouCalculadora | Completou o calculo | Aplicada no resultado |
| **232** | MKT_Tag_QualDorBaixa | 0-30% tempo perdido | Nurture longo |
| **233** | MKT_Tag_QualDorMedia | 30-50% tempo perdido | Nurture medio |
| **234** | MKT_Tag_QualDorAlta | 50%+ tempo perdido | Nurture curto + Prioridade |

> **Nota de Migracao:** Tags antigas (221-228) mantidas para referencia

---

## 3. Lógica de Qualificação

### 3.1 Cálculo do Nível de Dor

```typescript
// Baseado no percentual de tempo operacional
const nivelDor =
  percentual <= 30 ? 'baixo' :   // Até 30% do tempo em operacional
  percentual <= 50 ? 'medio' :   // Entre 30-50% do tempo
  'alto'                          // Mais de 50% do tempo
```

### 3.2 Matriz de Qualificação

| Nível | % Tempo | Horas/Semana | Custo Anual Típico | Temperatura | Sequência |
|-------|---------|--------------|-------------------|-------------|-----------|
| **Baixo** | 0-30% | 0-10h | < R$ 50k | Frio | Nurture longo (15+ emails) |
| **Médio** | 30-50% | 10-20h | R$ 50k-150k | Morno | Nurture médio (7-10 emails) |
| **Alto** | 50%+ | 20h+ | > R$ 150k | Quente | Nurture curto (4-5 emails) |

### 3.3 Determinação do Principal Ralo

```typescript
// Atividade com mais horas = principal ralo
const principalRalo = Object.entries(atividades)
  .sort(([, a], [, b]) => b - a)[0]?.[0] || 'duvidas'
```

---

## 4. Arquivos do Projeto

### 4.1 Estrutura de Diretórios

```
D:\deploy-ready\isca-calculadora-tempo-perdido\
├── src/
│   ├── config/
│   │   └── activecampaign.ts    # Configuração centralizada de IDs
│   ├── data/
│   │   └── content.ts           # Conteúdo narrativo e copy
│   ├── hooks/
│   │   ├── useLeadCapture.ts    # Hook de captura (CapturaPage)
│   │   ├── useResultSubmit.ts   # Hook de qualificação (ResultadoPage)
│   │   └── useInView.ts         # Hook de animação scroll
│   └── pages/
│       ├── CapturaPage.tsx      # Página de captura de leads
│       ├── CalculadoraPage.tsx  # Quiz/calculadora interativa
│       └── ResultadoPage.tsx    # Página de resultado
├── INTEGRACAO-ACTIVECAMPAIGN.md # Este documento
└── package.json
```

### 4.2 Arquivo de Configuracao: `src/config/activecampaign.ts` (NOVA TAXONOMIA)

```typescript
export const AC_CONFIG = {
  // Lista - Nova Taxonomia
  list: {
    id: 56,
    name: '03_MKT_Lista_IscaCalculadoraTempo_TEMP_JAN26'
  },

  fields: {
    horasPerdidasSemana: { id: 166, perstag: 'HORAS_PERDIDAS_SEMANA', type: 'text' },
    custoAnualEstimado: { id: 167, perstag: 'CUSTO_ANUAL_ESTIMADO', type: 'text' },
    principalRaloTempo: { id: 168, perstag: 'PRINCIPAL_RALO_TEMPO', type: 'dropdown' },
    nivelDorTempo: { id: 169, perstag: 'NIVEL_DOR_TEMPO', type: 'dropdown' },
    dataCalculoTempo: { id: 170, perstag: 'DATA_CALCULO_TEMPO', type: 'date' }
  },

  // Tags - Nova Taxonomia
  tags: {
    origemIsca: { id: 230, name: 'MKT_Tag_IscaCalculadoraTempo' },
    completouCalculadora: { id: 231, name: 'MKT_Tag_CompletouCalculadora' },
    dorBaixa: { id: 232, name: 'MKT_Tag_QualDorBaixa' },
    dorMedia: { id: 233, name: 'MKT_Tag_QualDorMedia' },
    dorAlta: { id: 234, name: 'MKT_Tag_QualDorAlta' }
  },

  getDorTagId: (nivel: 'baixo' | 'medio' | 'alto'): number => {
    return { baixo: 232, medio: 233, alto: 234 }[nivel]
  }
}
```

### 4.3 Hook de Qualificacao: `src/hooks/useResultSubmit.ts` (NOVA TAXONOMIA)

```typescript
// Payload enviado para a API (Nova Taxonomia)
const payload = {
  email: data.email,
  nome: data.nome || '',
  isca: 'calculadora-tempo',
  listId: 56, // 03_MKT_Lista_IscaCalculadoraTempo_TEMP_JAN26
  tags: [
    230, // MKT_Tag_IscaCalculadoraTempo
    231, // MKT_Tag_CompletouCalculadora
    dorTagMap[data.nivelDor] // 232, 233 ou 234
  ],
  fieldValues: [
    { field: 166, value: String(data.horasPerdidasSemana) },
    { field: 167, value: String(data.custoAnualEstimado) },
    { field: 168, value: data.principalRalo },
    { field: 169, value: data.nivelDor },
    { field: 170, value: new Date().toISOString().split('T')[0] }
  ],
  meta: {
    percentualTempo: data.percentualTempo,
    valorHora: data.valorHora,
    atividades: data.atividades
  }
}
```

---

## 5. Status Atual da Integracao

### 5.1 Concluido (NOVA TAXONOMIA)

| Item | Status | Detalhes |
|------|--------|----------|
| Lista no AC | MIGRADA | ID 56 (03_MKT_Lista_IscaCalculadoraTempo_TEMP_JAN26) |
| 5 Campos Customizados | Criados | IDs 166-170 |
| 8 Opcoes de Dropdown | Criadas | IDs 607-614 |
| **5 Tags (Nova Taxonomia)** | **CRIADAS** | **IDs 230-234** |
| Hook useLeadCapture | Funcionando | CapturaPage |
| Hook useResultSubmit | **ATUALIZADO** | Nova taxonomia |
| Integracao useResultSubmit | Integrado | useEffect na ResultadoPage |
| Arquivo de Config | **ATUALIZADO** | activecampaign.ts (nova taxonomia) |
| **Endpoint /api/lead/qualify** | **CRIADO** | api-proxy-activecampaign |
| **Teste de Integracao** | **PASSOU** | Contato 110386 criado |

### 5.2 Mapeamento de Migracao (Antigo → Novo)

| Objeto | ID Antigo | ID Novo | Nome Novo |
|--------|-----------|---------|-----------|
| Lista | 52 | **56** | 03_MKT_Lista_IscaCalculadoraTempo_TEMP_JAN26 |
| Tag Origem | 221 | **230** | MKT_Tag_IscaCalculadoraTempo |
| Tag Completou | 222 | **231** | MKT_Tag_CompletouCalculadora |
| Tag Dor Baixa | 223 | **232** | MKT_Tag_QualDorBaixa |
| Tag Dor Media | 224 | **233** | MKT_Tag_QualDorMedia |
| Tag Dor Alta | 225 | **234** | MKT_Tag_QualDorAlta |

### 5.3 Verificacao Cruzada Frontend - ActiveCampaign

#### Campo 168 (Principal Ralo Tempo)
| Frontend envia | AC espera | Status |
|----------------|-----------|--------|
| `'duvidas'` | value="duvidas" (ID 607) | OK |
| `'reunioes'` | value="reunioes" (ID 608) | OK |
| `'tarefas'` | value="tarefas" (ID 609) | OK |
| `'incendios'` | value="incendios" (ID 610) | OK |
| `'informacao'` | value="informacao" (ID 611) | OK |

#### Campo 169 (Nivel Dor Tempo)
| Frontend envia | AC espera | Status |
|----------------|-----------|--------|
| `'baixo'` (0-30%) | value="baixo" (ID 612) | OK |
| `'medio'` (31-50%) | value="medio" (ID 613) | OK |
| `'alto'` (>50%) | value="alto" (ID 614) | OK |

#### Tags Aplicadas (NOVA TAXONOMIA)
| Condicao | Tag Nova | ID | Status |
|----------|----------|-----|--------|
| Sempre | MKT_Tag_IscaCalculadoraTempo | 230 | OK |
| Sempre | MKT_Tag_CompletouCalculadora | 231 | OK |
| nivelDor='baixo' | MKT_Tag_QualDorBaixa | 232 | OK |
| nivelDor='medio' | MKT_Tag_QualDorMedia | 233 | OK |
| nivelDor='alto' | MKT_Tag_QualDorAlta | 234 | OK |

### 5.4 Pendente

| Item | Status | Acao Necessaria |
|------|--------|-----------------|
| Deploy API Proxy na Vercel | Pendente | vercel deploy |
| Automacao Nurture Curto | Pendente | Criar no AC (Dor Alta) |
| Automacao Nurture Medio | Pendente | Criar no AC (Dor Media) |
| Automacao Nurture Longo | Pendente | Criar no AC (Dor Baixa) |
| Sequencias de Email | Pendente | Criar copy dos emails |

---

## 6. Próximos Passos

### 6.1 ~~Integrar Hook na ResultadoPage~~ ✅ CONCLUÍDO

**Status**: Integrado em 08/Jan/2026

O hook já está integrado na `ResultadoPage.tsx` com:
- Import do `useResultSubmit` e `useLocalResultSubmit`
- Ref para evitar envio duplicado (`hasSubmittedRef`)
- useEffect que envia dados ao carregar resultado
- Lógica de qualificação por nível de dor

### 6.2 Criar Automações de Nurture

#### Automação 1: Nurture Curto (Dor Alta) - PRIORIDADE
- **Trigger**: Tag `[QUALIFICACAO][Dor-Alta]` adicionada
- **Objetivo**: Conversão rápida para Imersão
- **Duração**: 7 dias (4-5 emails)

**Sequência sugerida:**
1. **Imediato**: "Seu diagnóstico: [X]h perdidas = R$ [Y]/ano"
2. **24h**: "Case: Como [empresa] recuperou 15h/semana com IA"
3. **48h**: "Os 4 Ralos do Tempo - e como fechar cada um"
4. **72h**: "Imersão IA: Implemente em 48h (Early Bird termina dia X)"
5. **96h**: "Última chance Early Bird + Bônus exclusivo"

#### Automação 2: Nurture Médio (Dor Média)
- **Trigger**: Tag `[QUALIFICACAO][Dor-Media]` adicionada
- **Objetivo**: Educação + conversão gradual
- **Duração**: 14 dias (7-10 emails)

#### Automação 3: Nurture Longo (Dor Baixa)
- **Trigger**: Tag `[QUALIFICACAO][Dor-Baixa]` adicionada
- **Objetivo**: Educação longa + awareness
- **Duração**: 30 dias (15+ emails)

### 6.3 Criar Endpoint no API Proxy

O endpoint `/api/lead/qualify` deve:
1. Receber o payload do hook
2. Buscar contato pelo email (ou criar se não existir)
3. Adicionar às tags especificadas
4. Preencher os campos customizados
5. Adicionar à lista 52 se ainda não estiver
6. Retornar sucesso/erro

---

## 7. Copy e Narrativa

### 7.1 Pain Points (content.ts)

| # | Título | Conflito Interno |
|---|--------|------------------|
| 1 | O dia acaba e você não sabe onde foi | "Você sabe que precisa parar, mas não consegue." |
| 2 | Sua equipe não funciona sem você | "Você contratou pra delegar, mas continua fazendo." |
| 3 | Vive apagando incêndio | "Você sabe que é insustentável, mas não vê saída." |
| 4 | Ganha como dono, trabalha como funcionário | "A gaiola é dourada, mas continua sendo gaiola." |

### 7.2 Framework: Os 4 Ralos do Tempo

1. **Ralo das Perguntas**: Equipe pergunta antes de fazer → Interrupções constantes
2. **Ralo das Reuniões**: Tudo vira reunião → 50% não precisavam existir
3. **Ralo do "Só Eu Sei"**: Conhecimento preso na cabeça → Você vira gargalo
4. **Ralo dos Incêndios**: Operação não roda sem você → Dia inteiro reativo

### 7.3 CTA Principal

> **"E se você recuperasse esse tempo em 48 horas?"**
>
> Na Imersão Prática de IA para Negócios, nosso time de especialistas implementa automações no seu negócio — junto com você. Sistema funcionando ou dinheiro de volta.

---

## 8. Tracking e Analytics

### 8.1 Eventos Meta Pixel

| Evento | Página | Dados |
|--------|--------|-------|
| `Lead` | CapturaPage | content_name: 'calculadora-tempo', content_category: 'lead-magnet' |
| `CompleteRegistration` | ResultadoPage | content_name: 'calculadora-tempo-resultado', value: custoAnual, currency: 'BRL' |

### 8.2 Eventos GTM/DataLayer

| Evento | Página | Dados |
|--------|--------|-------|
| `lead_capture` | CapturaPage | isca, email |
| `calculator_completed` | ResultadoPage | calculator_type, nivel_dor, horas_perdidas, custo_anual |

---

## 9. Checklist de Deploy

### Antes do Deploy:
- [ ] Integrar hook useResultSubmit na ResultadoPage
- [ ] Testar fluxo completo em ambiente local
- [ ] Criar endpoint /api/lead/qualify no API proxy
- [ ] Testar criação de contato no AC com dados de teste
- [ ] Verificar tags e campos preenchidos corretamente
- [ ] Criar pelo menos automação de Dor Alta

### No Deploy:
- [ ] Configurar variável VITE_API_URL no Vercel/hosting
- [ ] Verificar Meta Pixel configurado
- [ ] Verificar GTM configurado
- [ ] Testar fluxo em produção com email de teste

### Pós-Deploy:
- [ ] Monitorar erros no console
- [ ] Verificar contatos chegando no AC
- [ ] Verificar automações disparando
- [ ] Acompanhar métricas de conversão

---

## 10. Referências Rápidas

### IDs Essenciais (NOVA TAXONOMIA)

```yaml
# Lista (Nova Taxonomia)
lista_calculadora: 56  # 03_MKT_Lista_IscaCalculadoraTempo_TEMP_JAN26

# Campos (nao mudam)
horas_perdidas: 166
custo_anual: 167
principal_ralo: 168
nivel_dor: 169
data_calculo: 170

# Tags (Nova Taxonomia)
isca_origem: 230      # MKT_Tag_IscaCalculadoraTempo
completou: 231        # MKT_Tag_CompletouCalculadora
dor_baixa: 232        # MKT_Tag_QualDorBaixa
dor_media: 233        # MKT_Tag_QualDorMedia
dor_alta: 234         # MKT_Tag_QualDorAlta
```

### URLs

```yaml
api_proxy: https://api-proxy-indol-tau.vercel.app
endpoint_lead: /api/lead
endpoint_qualify: /api/lead/qualify  # CRIADO
```

### Evento Destino

```yaml
nome: Imersão Prática de IA para Negócios
data: 24-25 de Janeiro de 2026
early_bird: R$ 348 (até 14/Jan)
regular: R$ 368 (até 19/Jan)
last_call: R$ 388 (até 23/Jan)
garantia: Sistema funcionando em 48h ou dinheiro de volta
```

---

**Documento criado em**: 08/Jan/2026
**Ultima atualizacao**: 08/Jan/2026 - TAXONOMIA ATUALIZADA
**Autor**: Claude Code + Equipe Academia Lendaria

---

## RESUMO DA MIGRACAO DE TAXONOMIA

### Alteracoes Realizadas em 08/Jan/2026

1. **Lista**: 52 → **56** (03_MKT_Lista_IscaCalculadoraTempo_TEMP_JAN26)
2. **Tags**:
   - 221 → **230** (MKT_Tag_IscaCalculadoraTempo)
   - 222 → **231** (MKT_Tag_CompletouCalculadora)
   - 223 → **232** (MKT_Tag_QualDorBaixa)
   - 224 → **233** (MKT_Tag_QualDorMedia)
   - 225 → **234** (MKT_Tag_QualDorAlta)

3. **Arquivos Atualizados**:
   - `src/config/activecampaign.ts`
   - `src/hooks/useResultSubmit.ts`
   - `api-proxy-activecampaign/api/lead/qualify.js`
   - `api-proxy-activecampaign/README.md`
   - `api-proxy-activecampaign/test-qualify.js`

4. **Teste de Integracao**:
   - Contato de teste criado: ID 110386
   - Email: teste-taxonomia@academialendaria.ai
   - Tags aplicadas: 230, 231, 234
   - Lista: 56
   - Campos: 166-170 preenchidos
