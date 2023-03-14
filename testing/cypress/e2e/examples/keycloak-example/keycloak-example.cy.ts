/// <reference types="cypress" />
//
// This spec file contains a sample test for connection to Keycloak
// You need to create a cypress.env.json based on the sample.cypress.env.json containing your keycloak and application settings
//

describe('Keycloak Example', () => {
  beforeEach(() => {
    cy.logout();
    cy.login();
  });
  afterEach(() => {
    cy.logout();
  });

  it('displays two todo items by default', () => {
    cy.visit(Cypress.env("host"));
    cy.wait(10000);
  })
})
