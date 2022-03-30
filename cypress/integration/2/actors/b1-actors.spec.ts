describe('GIVEN a user navigate to _login_ page', ()=>{
    before(()=>{
        cy.log("1 - Before Each");
        cy.visit('login',{
            failOnStatusCode: false,
        });
    });
    /*beforeEach(()=>{
        // Act
        cy.log("3 / 6 / 8 - Before Each");
        //cy.get('input[name=email]').clear();
        //cy.get('input[name=password]').clear();
    });*/
    context('WHEN the form is not filled correctly',()=>{
        before(()=>{
            clearInputs();
            //cy.get('input[name=email]').clear();
            //cy.get('input[name=password]').clear();
            // Act
            cy.log("2 - Before Each");
            cy.log("Before not filled correct");
            cy.get('input[name=email]').type("not a email");
            cy.get('input[name=password]').type(" ");
        });
        it('THEN _submit_ should be disabled',()=>{
            // Arrange
            cy.get("button[type=submit]").should("be.disabled");
        });
        /*after(()=>{
            cy.get('input[name=email]').clear();
            cy.get('input[name=password]').clear();
        });*/
    });
    context('WHEN the form is filled correctly',()=>{
        before(()=>{
            clearInputs();
            //cy.get('input[name=email]').clear();
            //cy.get('input[name=password]').clear();
            // Act
            cy.log("5 - Before Each");
            cy.log("Before filled correctly");
            cy.get('input[name=email]').type("fake_user@wordl.org");
            cy.get('input[name=password]').type("fake_pass");
        });
        it('THEN _submit_ should be enabled',()=>{
           // Asssert
           cy.get("button[type=submit]").should("be.enabled"); 
           cy.get("button[type=submit]").click(); 
        });
        after(()=>{
            cy.get('input[name=email]').clear();
            cy.get('input[name=password]').clear();
        });
    });
    context('WHEN click on _reset_ button',()=>{
        before(()=>{
            // Act
            cy.log("7 - Before Each");
            cy.log("Before reset");
            cy.get("button[type=reset]").click();
        });
        it('THEN _submit_ should be disabled',()=>{
            // Arrange
            cy.get("button[type=submit]").should("be.disabled");
        });
        it('THEN _email_ should be empty',()=>{
            
        });
    });
});

function clearInputs(){
    cy.get('input[name=email]').clear();
    cy.get('input[name=password]').clear();
}