describe('CT-001: Validar área de conteúdo principal no menu Colmeia Forms', () => {

  beforeEach(() => {
    cy.visit('https://teste-colmeia-qa.colmeia-corp.com/dashboard/campanha')
    cy.contains('Colmeia Forms').click()
  })

  it('Deve ser possível visualizar um formulário na área principal', () => {
    cy.get('form').should('exist')
  })

})