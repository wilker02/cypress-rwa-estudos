describe("CT-01 - Login com sucesso", () => {
  it("deve fazer login com um usuário válido", () => {
    cy.visit("/");
    cy.get('[data-test="signin-username"]').type("Heath93");
    cy.get('[data-test="signin-password"]').type("s3cret");
    cy.get('[data-test="signin-submit"]').click();
    cy.url().should("not.include", "/signin");
    cy.get('[data-test="sidenav-username"]').should("be.visible");
  });
});

describe("CT-02 - Login com credenciais inválidas", () => {
  it("deve exibir mensagem de erro com senha incorreta", () => {
    cy.visit("/");
    cy.get('[data-test="signin-username"]').type("Heath93");
    cy.get('[data-test="signin-password"]').type("senhaerrada");
    cy.get('[data-test="signin-submit"]').click();
    cy.get('[data-test="signin-error"]')
      .should("be.visible")
      .and("contain", "Username or password is invalid");
    cy.url().should("include", "/signin");
  });
});

describe("CT-03 - Registro de novo usuário com sucesso", () => {
  it("deve registrar um novo usuário com dados válidos", () => {
    cy.visit("/signup");
    cy.get('[data-test="signup-title"]')
      .should("be.visible")
      .and("contain", "Sign Up");
    cy.get('[data-test="signup-first-name"]').type("João");
    cy.get('[data-test="signup-last-name"]').type("Silva");
    cy.get('[data-test="signup-username"]').type("joaosilva_" + Date.now());
    cy.get('[data-test="signup-password"]').type("Senha@123");
    cy.get('[data-test="signup-confirmPassword"]').type("Senha@123");
    cy.get('[data-test="signup-submit"]').click();
    cy.url().should("include", "/signin");
  });
});

describe("CT-04 - Registro com informações incompletas", () => {
  it("deve exibir erros ao deixar campos em branco", () => {
    cy.visit("/signup");
    cy.get('[data-test="signup-first-name"]').click();
    cy.get('[data-test="signup-last-name"]').click();
    cy.get('[data-test="signup-username"]').click();
    cy.get('[data-test="signup-password"]').click();
    cy.get('[data-test="signup-confirmPassword"]').click();
    cy.get('[data-test="signup-first-name"]').click();
    cy.get("#firstName-helper-text")
      .should("be.visible")
      .and("contain", "First Name is required");
    cy.get("#lastName-helper-text")
      .should("be.visible")
      .and("contain", "Last Name is required");
    cy.get('[data-test="signup-submit"]').should("be.disabled");
  });
});