Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function() {
    cy.get("#firstName").type("Ricardo");
    cy.get("#lastName").type("Dias");
    cy.get("#email").type("diasricardo2001@gmail.com");
    cy.get("#open-text-area").type('Teste');
    cy.contains('button', 'Enviar').click();
});