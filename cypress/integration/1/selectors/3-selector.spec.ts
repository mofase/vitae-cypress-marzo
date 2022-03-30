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
    it("should display h1", ()=>{
        // act.assert
        cy.get('h1.title').should("contain","Budget");
    });
    it("should display link _about_", ()=>{
        // act.assert
        cy.get("nav a").should("contain","About");
        //cy.get("a[href='about']").should("contain.text","About");
    });
    it("should footer with doc-credits", ()=>{
        // act.assert
        cy.get('footer[role=doc-credits]').should("be.visible");
    });

    it("should display buttons for manipulate data", ()=>{
        // act.assert
        cy.get('.card-footer-item.button').should("have.length", 4);
    });


});

// <div class="ass" id="ass" data-test-id="app-name" role="banner">algo</div>