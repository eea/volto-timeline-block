import { slateBeforeEach, slateAfterEach } from '../support/e2e';

describe('Blocks Tests', () => {
  beforeEach(slateBeforeEach);
  afterEach(slateAfterEach);

  it('Add Block: Timeline', () => {
    // Change page title
    cy.clearSlateTitle();
    cy.getSlateTitle().type('Volto Timeline Block Demo');

    cy.get('.documentFirstHeading').contains('Volto Timeline Block Demo');

    cy.getSlate().click();

    // Add block
    cy.get('.ui.basic.icon.button.block-add-button').first().click();
    cy.get('.blocks-chooser .title').contains('Common').click({ force: true });
    cy.get('.content.active.common .button.timeline_block')
      .contains('Timeline')
      .click({ force: true });

    // Add timeline item
    cy.get('.button').contains('Add Timeline item').click();
    cy.get('.DateInput.DateInput_1 input[name="datetime-0-items-0-date"]').type(
      '05/19/2023',
    );
    cy.get('input#field-title-1-items-0').type('Test Title');
    cy.get('input#field-description-2-items-0').type('Test Description');
    cy.get('div#field-color-4-items-0').click();
    cy.get('div#field-color-4-items-0').contains('Orange').click();
    cy.get('label[for="field-hideTime"]').click();

    // Add another timeline item
    cy.get('.button').contains('Add Timeline item').click();
    cy.get('.DateInput.DateInput_1 input[name="datetime-0-items-1-date"]').type(
      '05/22/2023',
    );
    cy.get('input#field-title-1-items-1').type('Test Title 2');
    cy.get('input#field-description-2-items-1').type('Test Description 2');
    cy.get('div#field-color-4-items-1').click();
    cy.get('div#field-color-4-items-1').contains('Yellow').click();

    // Save
    cy.get('#toolbar-save').click();
    cy.url().should('eq', Cypress.config().baseUrl + '/cypress/my-page');

    // then the page view should contain our changes
    cy.contains('Volto Timeline Block Demo');
    cy.get('.timeline');
    cy.get('.timeline .header').contains('Test Title');
    cy.get('.timeline .description').contains('Test Description');
    cy.get('.timeline .content .orange').contains('May 19, 2023');

    cy.get('.timeline .header').contains('Test Title 2');
    cy.get('.timeline .description').contains('Test Description 2');
    cy.get('.timeline .content .yellow').contains('May 22, 2023');
  });
});
