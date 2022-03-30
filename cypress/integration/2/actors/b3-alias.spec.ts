describe("GIVEN the _about_ link on the _home_ page", ()=>{
    beforeEach(()=>{
        cy.visit("/");
        cy.get("a[href$=about]").as("aboutLink");
    });
    context("WHEN is clicked", () =>{
        beforeEach(()=>{
            cy.get("@aboutLink").click();
        });
        it("THEN should display _About_ as the title", ()=>{
            cy.get(".title").should("contain","About");
        });
    });
});