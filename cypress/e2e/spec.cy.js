/// <reference types="cypress" />
describe('page', () => {
  it('works', () => {
    cy.visit('https://example.cypress.io')
    cy.crypto().should('eq', 'some-secret')
  })
})
