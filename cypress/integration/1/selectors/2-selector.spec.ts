describe("The budget home page",()=>{
    // arrange
    const homePageUrl = "https://angularbuilders.github.io/angular-budget/";
    // Se ejecuta una vez
    before(()=>{
        cy.log("Visit the page once before all the tests")
        cy.visit(homePageUrl);
    });
    // Se ejecuta tantas veces como it tengamos
    /* 
    beforeEach(()=>{
        cy.log("Visit the page once before each the tests")
        // arrange
        cy.visit(homePageUrl);
    })
    */
    it("should contains _Budget_",()=>{
        // act
        cy.contains("Budget");
    });
    it("should display _budget_ on an anchor", ()=>{
        // act.assert
        cy.get("a").should("contain","Budget");
    });
    it("should display app name with a given style class", ()=>{
        // act.assert
        cy.get(".navbar-brand").should("contain","Budget");
    });
    it("should display app name on a precise identifier", ()=>{
        // act.assert
        cy.get("#app-name").should("contain","Budget");
    });
    it("should display app name on a precise node", ()=>{
        // act.assert
        cy.get('[data-test-id="app-name"]').should("contain","Budget");
    });
    it("should display app name on a precise node", ()=>{
        // act.assert
        cy.get('[role=banner]').should("contain","Budget");
    });

    it("should display h1", ()=>{
        // act.assert
        cy.get('h1.title');
    });
    it("should display about", ()=>{
        // act.assert
        cy.get("nav a").should("contain","About");
    });
    
    

});

// <div class="ass" id="ass" data-test-id="app-name" role="banner">algo</div>