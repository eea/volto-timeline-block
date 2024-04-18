import { slateLayoutBeforeEach, slateLayoutAfterEach } from '../support/e2e';

describe('ControlPanel: Dexterity Content-Types Layout', () => {
  beforeEach(slateLayoutBeforeEach);
  afterEach(slateLayoutAfterEach);

  it('Edit Blocks Layout for Book', () => {
    cy.visit('/controlpanel/dexterity-types');

    cy.get('a[href="/controlpanel/dexterity-types/book"]').should(
      'have.text',
      'book',
    );

    cy.visit('/controlpanel/dexterity-types/book/layout');
    cy.get('#page-controlpanel-layout').contains(
      'Can not edit Layout for book',
    );
    cy.get('#page-controlpanel-layout button').click();

    // Wait a bit for draftjs to load, without this the title block
    // custom placeholder is missing and cypress gives a timeout error
    cy.wait(1000);
    cy.get('input[id="field-placeholder"]').type('Book title');
    cy.get('label[for="field-required"]').click();
    cy.get('label[for="field-fixed"]').click();

    cy.getSlate().click();

    cy.get('.ui.basic.icon.button.block-add-button:visible').click();
    cy.get('.blocks-chooser .title').contains('Common').click();
    cy.get('.content.active.common .button.timeline_block')
      .contains('Timeline')
      .click({ force: true });

    cy.get('#toolbar-save').click();

    cy.visit('/cypress');

    cy.get('button[class="add"]').click();
    cy.get('#toolbar-add-book').click();
    cy.get('.block.title').contains('Book title');

    // Change book title
    cy.clearSlateTitle();
    cy.getSlateTitle().type('My First Book');
    cy.get('.documentFirstHeading').contains('My First Book');

    // Add timeline item
    cy.get('.block.timeline_block div[role="presentation"]').click();
    cy.get('.button').contains('Add Timeline item').click();
    cy.get('.DateInput.DateInput_1 input[name="datetime-0-items-0-date"]').type(
      '08/30/2023',
    );
    cy.get('input#field-title-1-items-0').type('My Title');
    cy.get('input#field-description-2-items-0').type('My Description');
    cy.get('label[for="field-hideTime"]').click();

    // Add another timeline item
    cy.get('.button').contains('Add Timeline item').click();
    cy.get('.DateInput.DateInput_1 input[name="datetime-0-items-1-date"]').type(
      '08/31/2023',
    );
    cy.get('input#field-title-1-items-1').type('My Title 2');
    cy.get('input#field-description-2-items-1').type('My Description 2');
    cy.get('div#field-color-4-items-1').click();
    cy.get('div#field-color-4-items-1').contains('Yellow').click();

    cy.get('#toolbar-save').click();
    cy.get('.documentFirstHeading').contains('My First Book');

    cy.get('.timeline .header').contains('My Title');
    cy.get('.timeline .description').contains('My Description');
    cy.get('.timeline .content').contains('Aug 30, 2023');

    cy.get('.timeline .header').contains('My Title 2');
    cy.get('.timeline .description').contains('My Description 2');
    cy.get('.timeline .content .yellow').contains('Aug 31, 2023');
  });
});
