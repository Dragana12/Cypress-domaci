/// <reference types = "cypress" />


describe ('register page', () => {
    it ('visit register page',() => {   
        cy.visit('/') 
    });
       
    it ('fill out required fields', () => {
        cy.get("input[id='first-name']").type('Dragana')
        cy.get("input[id='last-name']").type('Pjescic')
        cy.get("input[id='email']").type('mila12345@gmail.com')
        cy.get("input[id='password']").type('test1234')
        cy.get("input[id='password-confirmation']").type('test1234')
        cy.get("input[type='checkbox']").click()
        cy.get("button[type='submit']").click()
    });
 "/register"
        it('try to register with invalid email adress', () => {
    cy.wait(1000);
    cy.visit ("/");
    cy.get('#first-name').type('Lola');
    cy.get('#last-name').type('LolaLo');
    cy.get('#email').type('mila1dp.com');
    cy.get('#password').type('test1234');
    cy.get('#password-confirmation').type('test1234');
    cy.get("input[type='checkbox']").click()
    cy.get("button[type='submit']").click()


    })
    });

  
