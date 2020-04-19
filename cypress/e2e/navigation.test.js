/// <reference types="Cypress" />

describe("Navigation tests", () => {
  beforeEach(() => {
    cy.visit("/")
    .get("button").click();

    cy.url().should('include', '/')
  })
});
