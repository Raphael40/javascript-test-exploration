describe('My First Test', () => {
  it('Does not do much!', () => {
    cy.visit('http://example.cypress.io') 
    cy.get('.dropdown-toggle').click()
    cy.get('a[href="/commands/traversal"]').first().click()
    cy.get('.banner h1').contains('Traversal')
  })
})