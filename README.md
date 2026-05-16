# Cypress RWA — Testes Automatizados

Testes E2E automatizados com Cypress no [Real World App](https://github.com/cypress-io/cypress-realworld-app) (clone do Venmo). Projeto desenvolvido durante o curso **Guardião da Qualidade**, com foco em boas práticas de automação de testes em cenários reais.

---

## Tecnologias

| Ferramenta | Versão | Descrição |
|---|---|---|
| [Cypress](https://www.cypress.io/) | v15 | Framework de testes E2E |
| [TypeScript](https://www.typescriptlang.org/) | v5 | Linguagem utilizada nos testes |
| [Node.js](https://nodejs.org/) | v20 | Ambiente de execução |
| [Yarn](https://yarnpkg.com/) | v1.22 | Gerenciador de pacotes |
| [Git Bash](https://git-scm.com/) | — | Terminal utilizado no Windows |

---

## Estrutura do repositório

```
cypress-rwa-estudos/
├── login-registro.spec.ts     # Exercício 1 — autenticação
├── enviar-dinheiro.spec.ts    # Exercício 2 — transações
└── README.md
```

> Os arquivos `.spec.ts` devem ser copiados para `cypress/tests/ui/` dentro do projeto RWA para execução.

---

## Como executar

### Pré-requisitos

- [Node.js v20+](https://nodejs.org/)
- [Git](https://git-scm.com/)
- [Yarn](https://yarnpkg.com/) — instale com `npm install -g yarn`

### 1. Clonar os projetos

```bash
mkdir cypress-projetos
cd cypress-projetos

git clone https://github.com/cypress-io/cypress-realworld-app.git
git clone https://github.com/wilker02/cypress-rwa-estudos.git
```

### 2. Instalar as dependências do RWA

```bash
cd cypress-realworld-app
yarn install
```

### 3. Copiar os arquivos de teste

```bash
cp ../cypress-rwa-estudos/login-registro.spec.ts cypress/tests/ui/
cp ../cypress-rwa-estudos/enviar-dinheiro.spec.ts cypress/tests/ui/
```

### 4. Rodar o app e o Cypress

Abra dois terminais apontando para a pasta do RWA:

```bash
# Terminal 1 — sobe o app
yarn dev

# Terminal 2 — abre o Cypress (interface visual)
yarn cypress:open
```

> Aguarde o Terminal 1 exibir `App running at http://localhost:3000` antes de abrir o Cypress.

### 5. Executar os testes

Na janela do Cypress:
1. Clique em **E2E Testing**
2. Escolha o navegador (Chrome recomendado)
3. Clique no arquivo de teste desejado

Para rodar pelo terminal sem abrir o navegador:

```bash
yarn cypress:run --spec "cypress/tests/ui/login-registro.spec.ts"
yarn cypress:run --spec "cypress/tests/ui/enviar-dinheiro.spec.ts"
```

---

## Exercício 1 — Login e Registro

**Arquivo:** `login-registro.spec.ts`

| ID | Descrição | Tipo |
|---|---|---|
| CT-01 | Login com credenciais válidas | Happy Path |
| CT-02 | Login com senha incorreta — exibe mensagem de erro | Sad Path |
| CT-03 | Registro de novo usuário com dados válidos | Happy Path |
| CT-04 | Registro com campos em branco — botão desabilitado | Sad Path |

**Técnicas utilizadas:**
- Seletores `data-test` para robustez
- Asserções com `.should("be.visible")`, `.and("contain", ...)` e `.should("be.disabled")`
- Uso de `Date.now()` para gerar usuários únicos no cadastro

---

## Exercício 2 — Enviar Dinheiro

**Arquivo:** `enviar-dinheiro.spec.ts`

| ID | Descrição | Tipo |
|---|---|---|
| CT-01 | Enviar dinheiro com saldo suficiente — transação concluída | Happy Path |
| CT-02 | Tentativa de envio sem descrição preenchida — formulário bloqueado | Sad Path |

**Técnicas utilizadas:**
- Fluxo completo de múltiplas telas (login → nova transação → contato → pagamento)
- Seletor parcial `[data-test^="user-list-item-"]` para elementos com ID dinâmico
- Asserção de formulário incompleto com `.should("have.value", "")`
- Login via interface com `.should("be.visible")` antes do `.type()` para garantir estabilidade

---

## Usuários disponíveis no seed

O RWA vem com usuários pré-cadastrados. Todos usam a senha `s3cret`.

| Username | Utilizado em |
|---|---|
| `Heath93` | Exercícios 1 e 2 |
| `Arvilla_Hegmann` | Exercício 2 (destinatário) |
| `Dina20` | Disponível |
| `Reyes.Osinski` | Disponível |
| `Judah_Dietrich50` | Disponível |

---

## Aprendizados

- Como descobrir seletores reais inspecionando o código-fonte com `grep`
- Diferença entre seletores estáticos e dinâmicos (`data-test^=`)
- Como o comportamento real do app nem sempre corresponde ao esperado — exigindo adaptação das asserções
- Fluxo completo de debug: erro → investigação → correção → reexecução

---

## Sobre o projeto

Este repositório faz parte do curso **Guardião da Qualidade**, focado em automação de testes com Cypress em aplicações reais. O Real World App é mantido pela equipe do Cypress como plataforma de aprendizado e demonstração de boas práticas.
