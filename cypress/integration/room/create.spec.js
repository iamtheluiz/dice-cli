/* eslint-disable no-undef */
// create.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test
/// <reference types="cypress" />
import { validate } from 'uuid';

context('Actions', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });

  it('should create a room', () => {
    // Insert form values
    cy.get('[href="#rooms-actions"]').click();
    cy.get('.left > input')
      .type('Dungeons and Dragons')
      .should('have.value', 'Dungeons and Dragons');

    // Create method interception
    cy.intercept({ method: 'POST', url: '/room' }).as('roomCheck');

    // Send form
    cy.get('.left > .button').click();

    // Capture post method
    cy.wait('@roomCheck').then((interception) => {
      const { body } = interception.response;

      assert.isNotNull(body.id);
      expect(validate(body.id)).to.equal(true);

      assert.isNotNull(body.name);
      expect(body.name).to.equal('Dungeons and Dragons');

      assert.isNotNull(body.members);
      expect(Array.isArray(body.members)).to.equal(true);

      // Verify new route
      cy.url().should('eq', `http://localhost:3000/room/${body.id}`);
    });
  });
});
