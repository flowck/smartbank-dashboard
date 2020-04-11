// https://docs.cypress.io/api/introduction/api.html

const ROOT = "http://localhost:8080/#";

describe("sb-emojis.vue", () => {
  it("Should open Emojis component on click over emojis button", () => {
    cy.visit(ROOT);
    cy.get(".actions__emojis-button").click();
    cy.get(".sb-emojis").should("be.visible");
  });

  it("Should show an existent emoji after filtering on search input", () => {
    cy.get(".sb-input__field").type("love");
    cy.get(".sb-emojis__list").children();
  });

  it("Should send a clicked emoji to the input field", () => {
    cy.get(".sb-emojis__list__emoji").click({ multiple: true });
  });

  it("Should reset emoji results results after filter input was cleared", () => {
    cy.get(".sb-input__field").clear();
    cy.get(".sb-emojis__list__emoji").should("have.length", 1806);
  });

  it("Should not show any emoji if the filtering condition is not met", () => {
    cy.get(".sb-input__field").type("some weird emoji");
    cy.get(".sb-emojis__list__emoji").should("have.length", 0);
    cy.get(".sb-input__field").clear();
    cy.get(".sb-input__field").type(342424234);
    cy.get(".sb-emojis__list__emoji").should("have.length", 0);
  });

  it("Should close Emojis component on click over emojis button", () => {
    cy.get(".actions__emojis-button").click();
    cy.get(".sb-emojis").should("bb.visible");
  });
});
