describe("Agenda de contatos", () => {
  const identificador = Date.now();
  const contato = {
    nome: `Contato Cypress ${identificador}`,
    email: `contato.cypress.${identificador}@example.com`,
    telefone: `119${String(identificador).slice(-8)}`,
  };

  beforeEach(() => {
    cy.visit("/");
    cy.clearLocalStorage();
    cy.reload();
  });

  function preencherContato(dados) {
    cy.get('input[placeholder="Nome"]').clear().type(dados.nome);
    cy.get('input[placeholder="E-mail"]').clear().type(dados.email);
    cy.get('input[placeholder="Telefone"]').clear().type(dados.telefone);
  }

  function cartaoDoContato(nome) {
    return cy.contains(".contato li", nome).closest(".contato");
  }

  function excluirContato(nome) {
    cy.intercept("DELETE", "**/api/contatos").as("deletarContato");
    cartaoDoContato(nome).find("button.delete").click();
    cy.wait("@deletarContato")
      .its("response.statusCode")
      .should("eq", 200);
    cy.reload();
  }

  it("inclui um novo contato na agenda", () => {
    preencherContato(contato);
    cy.contains("button", "Adicionar").click();

    cartaoDoContato(contato.nome)
      .should("have.length", 1)
      .within(() => {
        cy.contains("li", contato.nome).should("be.visible");
        cy.contains("li", contato.email).should("be.visible");
        cy.contains("li", contato.telefone).should("be.visible");
      });

    excluirContato(contato.nome);
    cy.contains(".contato li", contato.nome).should("not.exist");
  });

  it("altera os dados de um contato existente", () => {
    preencherContato(contato);
    cy.contains("button", "Adicionar").click();
    cartaoDoContato(contato.nome).should("have.length", 1);
    cartaoDoContato(contato.nome).find("button.edit").click();

    cy.get('input[placeholder="Nome"]')
      .clear()
      .type(`${contato.nome} Editado`);
    cy.get('button[type="submit"]').should("contain.text", "Salvar").click();

    cy.contains(".contato li", `${contato.nome} Editado`).should("be.visible");

    excluirContato(`${contato.nome} Editado`);
    cy.contains(".contato li", `${contato.nome} Editado`).should("not.exist");
  });

  it("remove um contato da agenda", () => {
    preencherContato(contato);
    cy.contains("button", "Adicionar").click();
    cartaoDoContato(contato.nome).should("have.length", 1);

    excluirContato(contato.nome);
    cy.contains(".contato li", contato.nome).should("not.exist");
  });
});
