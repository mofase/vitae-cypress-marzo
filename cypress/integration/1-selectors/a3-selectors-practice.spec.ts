// 📋 To do:
// - [x] there are an h1 with page title
// - [x] there are a link to the about page
// - [x] there are a footer with doc-credits role
// - [x] there are four buttons for manipulate data

describe("The _budget_ home page", () => {
  before(() => {
    cy.visit("https://angularbuilders.github.io/angular-budget/");
  });
  it("should have an h1 with the page title", () => {
    cy.get("h1").should("contain", "Budget");
  });
});
