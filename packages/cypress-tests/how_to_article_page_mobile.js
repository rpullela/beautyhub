context('HowTo article tests', () => {
  beforeEach(() => {
    cy.viewport(375, 812) //iphone x
    cy.visit('/hair-style/learning-how-to-french-twist-a-quick-step-by-step-tutorial/')
  })

  describe('Hero slider', () => {
    it('Hero slider is present and works properly', () => {
      cy.get('main')
      const $time = Cypress.$('div strong:contains("Time")')
        cy.wrap($time)
          .should('be.visible')

    })

  })

})
