describe("My first test", ()=>{
 it("should go home", ()=>{
    cy.visit("https://www.cypress.io/");
    cy.contains("cypress");
    //cy.not.contains("cypress not found");
    cy.contains("cypress not found");
 });
});