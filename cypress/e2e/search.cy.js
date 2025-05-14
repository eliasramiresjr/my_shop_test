/// <reference types="cypress"/>

describe('Search', () => {

  beforeEach('Go to home page',() => {
    cy.visit('/')
  })

  it('Should search with invalid inputs ', () => {
    cy.get('#search_query_top').type('!@#$')
    cy.get('#searchbox > .btn').click()
    cy.get('.alert').should('contain', 'No results were found for your search')
  })

  it('Should search with valid inputs ', () => {
    cy.get('#search_query_top').type('Blouse')
    cy.focused().type('{enter}')
    cy.get('.right-block > h5 > .product-name').should('contain', 'Blouse')
  })

})