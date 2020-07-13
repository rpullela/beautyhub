context('Home page tests', () => {
  beforeEach(() => {
    cy.viewport(1920, 800)
    cy.visit('')
  })

  describe('Hero slider', () => {
    it('Hero slider is present and works properly', () => {
      cy.get('main')
        .wait(500)
        .find('section.hero')
        .should('be.visible')
        .within(() => {
          cy.get('button').eq(0)
            .should('be.visible')
            .and('not.be.disabled')
          cy.get('button').eq(1)
            .should('be.visible')
            .and('be.disabled')
          //get next slide
          cy.get('button').eq(0)
            .click()
            .should('be.visible')
            .and('not.be.disabled')
          cy.get('button').eq(1)
            .should('be.visible')
            .and('not.be.disabled')
        })
    })
  })

  describe('Text block', () => {
    it('Text block is present', () => {
      cy.get('main')
        .wait(500)
        .find('section.textblock-type1')
        .should('be.visible')
    })
  })

  describe('Tile block', () => {
    it('Text block is present and visible', () => {
      cy.get('main')
        .wait(500)
        .find('section.textblock-type1')
        .should('be.visible')
    })
  })

  describe('Image block (type a)', () => {
    it('Image block is present and visible', () => {
      cy.get('main')
        .wait(500)
        .find('section.imageblocktypea')
        .should('be.visible')
    })
  })

  describe('Image block (type b)', () => {
    it('Image block is present and visible', () => {
      cy.get('main')
        .wait(500)
        .find('section.imageblocktypeb')
        .should('be.visible')
    })
  })

  describe('Subscription form', () => {
    it('Email form is present', () => {
      cy.get('main')
        .wait(500)
        .find('section form[action="/newsletter"]')
        .should('be.visible')
    })
  })

})
