describe('Anecdotes', function() {
  it('front page can be opened', function() {
    cy.visit('http://localhost:3000')
    cy.contains('Software anecdotes')
    cy.contains('Anecdote app')
  })

  it('from the main page to the anecdote if it hurts', function() {
    cy.visit('http://localhost:3000')
    cy.contains('If it hurts, do it more often').click()
    cy.contains('for more see')
  })
})

