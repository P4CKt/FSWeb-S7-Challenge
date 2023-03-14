describe("Input Test", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3001/pizza");
  });

  it("inputa bir metin giren test", () => {
    cy.get("[data-cy=name-checked]").type("Merhabalarrr");
    // cy.get('[data-cy=submit-checked]').should("be.enable");
  });
  it("formu gönderen bir test", () => {
    cy.get("[data-cy=name-checked]").type("Merhabalarrr");
    cy.get("#size-dropdown").select("medium-size");
    cy.get("#s-dropdown").select("Margarita Pizza");
    cy.get("[type=submit]").should("be.enabled");
    cy.get("[type=submit]").click();
  });
});
