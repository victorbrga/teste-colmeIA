# Teste de QA — colmeIA

Este projeto foi desenvolvido como parte do processo seletivo para a vaga de **Analista de Teste** na colmeIA, uma oportunidade que despertou bastante interesse, tanto pelo desafio técnico proposto quanto pela possibilidade de integrar um time que valoriza análise criteriosa e qualidade de produto.

## 🎯 Objetivo

Este projeto tem como objetivo explorar o sistema disponibilizado pela colmeIA, identificar comportamentos inesperados (bugs, inconsistências de UX e falhas de validação) e documentá-los de forma clara, seguindo o padrão **cenário → passos de reprodução → resultado observado**, conforme solicitado no teste técnico, cada caso de teste conta com uma **evidência por vídeo**.

Além da documentação manual, parte dos fluxos críticos foi automatizada com **Cypress**, como forma de demonstrar também competência técnica em **automação de testes**.


## 🧪 Onde encontrar os casos de teste

Todos os casos de teste estão documentados na pasta [`docs/`](./docs), organizados **um arquivo por funcionalidade testada**:

| Arquivo | Funcionalidade |
|---|---|
| [`docs/login.md`](./docs/login.md) | Tela de Login |
| [`docs/dashboard.md`](./docs/dashboard.md) | Tela inicial (pós-login) |
| [`docs/bancosdedados.md`](./docs/bancosdedados.md) | Módulo "Bancos de Dados" |
| [`docs/colmeiaforms.md`](./docs/colmeiaforms.md) | Módulo "Colmeia Forms" |


Cada caso de teste segue o formato **BDD** (Given/When/Then), contendo:

- **Cenário** (Dado/Quando/Então) — o comportamento esperado
- **Resultado observado** — o que de fato aconteceu ao testar e o impacto ao usuário final
- **Evidência** — print ou vídeo demonstrando o comportamento

Cada caso de teste é sinalizado com um emoji, indicando rapidamente o status do comportamento observado:

| Emoji | Significado |
|---|---|
| ✅ | **Funcionando como esperado** — o comportamento observado condiz com o esperado |
| ❌ | **Não está funcionando como esperado** — comportamento inesperado, bug ou falha identificada |
| ⚠️ | **Funciona parcialmente / proposta de melhoria** — não é um erro crítico, mas há espaço para ajuste ou o comportamento é parcialmente correto |

## 🎥 Sobre as evidências

Todos os casos de teste inclui um **link de vídeo** demonstrando a reprodução do cenário na prática, permitindo validar exatamente o passo a passo e o resultado obtido, sem depender apenas da descrição textual.