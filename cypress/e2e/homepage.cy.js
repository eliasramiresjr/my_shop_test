/// <reference types="cypress"/>

describe('Homepage', () => {

  beforeEach('Go to home page', () => {
    cy.visit('/')
  })

  it('Verify sale Banner', () => {
    cy.get('.row > a > .img-responsive')
  })

  it('Verify Call us now button', () => {
    cy.get('.shop-phone').should('contain', '0123-456-789')
  })

  it('Verify Sign in button', () => {
    cy.get('.login').should('contain', 'Sign in')
  })

  it('Verify Logo available', () => {
    cy.get('.logo')
  })

  it('Verify Cart available', () => {
    cy.get('[title="View my shopping cart"]')
  })

  it('Verify Women available', () => {
    cy.get('.sf-menu > :nth-child(1) > [href="http://www.automationpractice.pl/index.php?id_category=3&controller=category"]').should('contain', "Women")
  })

  it('Verify Dresses available', () => {
    cy.get('.sf-menu > :nth-child(2) > .sf-with-ul').should('contain', 'Dresses')
  })

  it('Verify T-Shirts available', () => {
    cy.get('.sf-menu > :nth-child(3) > a').should('contain', 'T-shirts')
  })

  it('Verify Blog available', () => {
    cy.get('.sf-menu > :nth-child(4) > a').should('contain', 'Blog')
  })
  
})