import { slateBeforeEach, slateAfterEach } from '../support/e2e';

describe('Timeline Block: View Mode Tests', () => {
  beforeEach(slateBeforeEach);
  afterEach(slateAfterEach);

  it('Timeline Block: Add and save', () => {
    cy.clearSlateTitle();
    cy.getSlateTitle().type('Timeline View Test');
    cy.get('.documentFirstHeading').contains('Timeline View Test');

    cy.getSlate().click();

    // Add timeline block
    cy.get('.ui.basic.icon.button.block-add-button').first().click();
    cy.get('.blocks-chooser .title').contains('Common').click({ force: true });
    cy.get('.content.active.common .button.timeline_block')
      .contains('Timeline')
      .click({ force: true });

    // Add a timeline item
    cy.get('.button').contains('Add Timeline item').click();
    cy.get('input#field-title-1-items-0').type('First Event');

    // Save
    cy.get('#toolbar-save').click();

    cy.contains('Timeline View Test');
  });

  it('Timeline Block: Multiple items', () => {
    cy.clearSlateTitle();
    cy.getSlateTitle().type('Timeline Multiple');

    cy.getSlate().click();

    // Add timeline block
    cy.get('.ui.basic.icon.button.block-add-button').first().click();
    cy.get('.blocks-chooser .title').contains('Common').click({ force: true });
    cy.get('.content.active.common .button.timeline_block')
      .contains('Timeline')
      .click({ force: true });

    // Add first item
    cy.get('.button').contains('Add Timeline item').click();
    cy.get('input#field-title-1-items-0').type('Event One');

    // Add second item
    cy.get('.button').contains('Add Timeline item').click();
    cy.get('input#field-title-1-items-1').type('Event Two');

    // Save
    cy.get('#toolbar-save').click();
    cy.contains('Timeline Multiple');
  });

  it('Timeline Block: With description', () => {
    cy.clearSlateTitle();
    cy.getSlateTitle().type('Timeline Description');

    cy.getSlate().click();

    // Add timeline block
    cy.get('.ui.basic.icon.button.block-add-button').first().click();
    cy.get('.blocks-chooser .title').contains('Common').click({ force: true });
    cy.get('.content.active.common .button.timeline_block')
      .contains('Timeline')
      .click({ force: true });

    // Add timeline item with description
    cy.get('.button').contains('Add Timeline item').click();
    cy.get('input#field-title-1-items-0').type('Important Event');
    cy.get('input#field-description-2-items-0').type('This is a description of the event');

    // Save
    cy.get('#toolbar-save').click();
    cy.contains('Timeline Description');
  });
});