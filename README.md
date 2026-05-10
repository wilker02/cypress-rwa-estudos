# Cypress RWA - Testes Automatizados

Testes E2E automatizados com Cypress no Real World App (clone do Venmo).
Projeto do curso **Guardião da Qualidade**.

## Casos de Teste

| ID | Descrição | Tipo |
|----|-----------|------|
| CT-01 | Login com sucesso | Happy Path |
| CT-02 | Login com credenciais inválidas | Sad Path |
| CT-03 | Registro de novo usuário com sucesso | Happy Path |
| CT-04 | Registro com informações incompletas | Sad Path |

## Tecnologias
- Cypress v15
- TypeScript
- Node.js v20

## Como executar
1. Clone o [RWA](https://github.com/cypress-io/cypress-realworld-app)
2. Copie o arquivo para `cypress/tests/ui/`
3. Rode `yarn cypress:open`
