
Cypress.Commands.add('fillMandatoryFieldsAndSubmit',function(nome, sobrenome, email, texto){
    cy.get('#firstName').should('be.visible').type(nome)
    cy.get('#lastName').should('be.visible').type(sobrenome)
    cy.get('#email').should('be.visible').type(email)
    cy.get('#open-text-area').should('be.visible').type(texto)
    cy.get('.button').click()
})