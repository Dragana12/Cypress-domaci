/// <reference types = "cypress" />


describe ('register page', () => {
    it ('visit register page',() => {   
        cy.visit('https://gallery-app.vivifyideas.com/register') 
    });
       
    it ('fill out required fields', () => {
        cy.get("input[id='first-name']").type('Dragana')
        cy.get("input[id='last-name']").type('Pjescic')
        cy.get("input[id='email']").type('mila12345@gmail.com')
        cy.get("input[id='password']").type('test1234')
        cy.get("input[id='password-confirmation']").type('test1234')
        cy.get("input[type='checkbox']").click()
        cy.get("button[type='submit']").click()
        
    })
});
