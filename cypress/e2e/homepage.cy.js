/// <reference types="cypress"/>

describe('Homepage', () => {

  beforeEach('Go to home page', () => {
    cy.visit('/')
  })

  it('Banner', () => {
    cy.get('.row > a > .img-responsive')
  })

  it('Call us now', () => {
    cy.get('.shop-phone').should('contain', '0123-456-789')
  })

  it('Sign in', () => {
    cy.get('.login').should('contain', 'Sign in')
  })

  it.only('Logo', () => {
    cy.get('.logo')
  })

})