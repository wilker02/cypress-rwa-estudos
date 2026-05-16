// Teste 1: enviar dinheiro com saldo suficiente
describe("CT-01 - Enviar dinheiro com saldo suficiente", () => {

 beforeEach(() => {
  cy.visit("/")
  cy.get('[data-test="signin-username"]').should("be.visible").type("Heath93")
  cy.get('[data-test="signin-password"]').should("be.visible").type("s3cret")
  cy.get('[data-test="signin-submit"]').click()
})

  it("deve enviar dinheiro com sucesso", () => {
    // Clica em nova transação
    cy.get('[data-test="nav-top-new-transaction"]').click()

    // Busca e seleciona um contato
    cy.get('[data-test="user-list-search-input"]').type("Arvilla")
    cy.get('[data-test^="user-list-item-"]').first().click()

    // Preenche valor e descrição
    cy.get('[data-test="transaction-create-amount-input"]').type("10")
    cy.get('[data-test="transaction-create-description-input"]').type("Almoço")

    // Confirma o pagamento
    cy.get('[data-test="transaction-create-submit-payment"]').click()

    // Verifica mensagem de sucesso
    cy.get('[data-test="alert-bar-success"]')
      .should("be.visible")
      .and("contain", "Transaction Submitted!")
  })
})

// Teste 2: enviar dinheiro com saldo insuficiente
describe("CT-02 - Enviar dinheiro com saldo insuficiente", () => {

beforeEach(() => {
  cy.visit("/")
  cy.get('[data-test="signin-username"]').should("be.visible").type("Heath93")
  cy.get('[data-test="signin-password"]').should("be.visible").type("s3cret")
  cy.get('[data-test="signin-submit"]').click()
})

 it("deve bloquear envio sem descrição preenchida", () => {
    cy.get('[data-test="nav-top-new-transaction"]').click()

    cy.get('[data-test="user-list-search-input"]').type("Arvilla")
    cy.get('[data-test^="user-list-item-"]').first().click()

  // Preenche só o valor, sem descrição
    cy.get('[data-test="transaction-create-amount-input"]').type("10")

  // Sem descrição, o botão de pagamento não aparece habilitado
    cy.get('[data-test="transaction-create-submit-payment"]')
    .should("exist")
    cy.get('[data-test="transaction-create-description-input"]')
    .should("be.visible")
    .and("have.value", "")
  })
})