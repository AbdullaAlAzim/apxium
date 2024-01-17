describe('Interact with Elements inside iframe', () => {
  it('Should fill out the form inside the specified iframe', () => {
    // Visit the page
    cy.visit('https://www.apxium.com/');
    cy.url().should('eq', 'https://www.apxium.com/')
    cy.visit('https://www.apxium.com/smb-integrations/')
    cy.url().should('eq', 'https://www.apxium.com/smb-integrations/')

    // Get all iframes on the page
    cy.get('iframe.hs-form-iframe')
      .should('exist')
      .should('be.visible')
      .then(($iframes) => {
        // Iterate through each iframe
        cy.wrap($iframes).each(($iframe) => {
          // Switch to the current iframe and check if the form elements exist
          cy.wrap($iframe)
            .its('0.contentDocument.body')
            .should('not.be.undefined')
            .then(cy.wrap)
            .within({ timeout: 10000 }, () => {
              // Check if the form elements are present in the current iframe
              const formExists = cy.get('#company-9878da9b-5399-4d6b-9a0c-7c6f1a64f164').should('exist');
              if (formExists) {
                // Interact with elements inside the current iframe
                cy.get('#company-9878da9b-5399-4d6b-9a0c-7c6f1a64f164').type('Xpert Solver');
                cy.get('#contact_name-9878da9b-5399-4d6b-9a0c-7c6f1a64f164').type('Mr.Maksud');
                cy.get('#phone-9878da9b-5399-4d6b-9a0c-7c6f1a64f164').type('1234567890');
                cy.get('#state-9878da9b-5399-4d6b-9a0c-7c6f1a64f164').type('Dhaka');
                cy.get('#country-9878da9b-5399-4d6b-9a0c-7c6f1a64f164').type('Bangladesh');
                cy.get('#email-9878da9b-5399-4d6b-9a0c-7c6f1a64f164').type('epixibaze@email1.io');
                cy.get('#your_accountant-9878da9b-5399-4d6b-9a0c-7c6f1a64f164').type('Azim');
                // Continue interacting with other elements as needed
                // Example: Submit the form
                cy.get('input[type="submit"]').click();
                cy.get('.hs-main-font-element').should('contain.text', 'Thanks for submitting the form.');
                
              }
            });
        });
      });
  });
});
