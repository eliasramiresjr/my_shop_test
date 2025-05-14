/// <reference types="cypress"/>

describe('Login', () => {

  beforeEach('Go to home page', () => {
    cy.visit('/')
  })

  it('Should login with a valid account', () => {
    cy.get('.login').click()
    cy.get('#email').type('teste@email.com')
    cy.get('#passwd').type('teste')
    cy.get('#SubmitLogin > span').click()
    // xivagi8072@daupload.com
  })

  it('Try login with a invalid password', () => {
    cy.get('.login').click()
    cy.get('#email').type('teste@email.com')
    cy.get('#passwd').type('teste1')
    cy.get('#SubmitLogin > span').click()
    cy.get('.alert').should('contain', 'Authentication failed.')
  })
})