describe("My first test", () => {
  it("should go home", () => {
    cy.visit("https://www.cypress.io/");
    cy.contains("cypress");
  });
});
