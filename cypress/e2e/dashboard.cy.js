describe('CT-001: Validar funcionamento do ícone de Perfil', () => {

  beforeEach(() => {
    cy.visit('https://teste-colmeia-qa.colmeia-corp.com/dashboard')
  })

  it('Deve haver alguma ação ao clicar no ícone de Perfil', () => {

    cy.url().as('urlDashboard')

    cy.get('path[d*="M12 2C6.48 2 2 6.48"]')
      .parents('svg')
      .click()

    cy.get('@urlDashboard').then((urlDashboard) => {
      cy.url().should('not.eq', urlDashboard)
    })
  })

})

describe('CT-002: Validar funcionamento do dropdown de "Candidato"', () => {

  beforeEach(() => {
    cy.visit('https://teste-colmeia-qa.colmeia-corp.com/dashboard')
  })

  it('Deve abrir um dropdown com opções ao clicar em "Candidato"', () => {

    cy.contains('Candidato').click()

    cy.get('[role="menu"]').should('be.visible')
  })

  it('Não deveria haver nenhuma mudança no HTML da página ao clicar em "Candidato"', () => {
    cy.get('body').then(($before) => {
      const htmlDashboard = $before.html()

      cy.contains('Candidato').click()

      cy.get('body').then(($after) => {
        expect($after.html()).to.eq(htmlDashboard)
      })
    })
  })

  it('Deve abrir um dropdown ao clicar diretamente na seta (ícone)', () => {
    cy.get('path[d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"]')
      .parents('svg')
      .click()

    cy.get('[role="menu"]').should('be.visible')
  })

})

describe('CT-004: Validar função do ícone da barra lateral esquerda (megafone)', () => {

  beforeEach(() => {
    cy.visit('https://teste-colmeia-qa.colmeia-corp.com/dashboard')
  })

  it('Deve abrir o painel "Campanha" com as opções esperadas ao clicar no ícone', () => {
    cy.get('a[routerlink="/dashboard/campanha"]').click()

    cy.contains('Campanha').should('be.visible')
    cy.contains('Bancos de dados').should('be.visible')
    cy.contains('Colmeia Forms').should('be.visible')
  })

  it('Não deve haver ausência de indicação prévia (tooltip/aria-label) no ícone', () => {

    cy.get('a[routerlink="/dashboard/campanha"]')
      .should('have.attr', 'aria-label')
      .and('not.be.empty')
  })

  it('Deve marcar o ícone como ativo (data-active="true") após o clique', () => {
    cy.get('a[routerlink="/dashboard/campanha"]')
      .should('have.attr', 'data-active', 'false')
      .click()
      .should('have.attr', 'data-active', 'true')
  })

})

describe('CT-005: Validar direcionamento de página após clicar na opção "Bancos de dados"', () => {

  beforeEach(() => {
    cy.visit('https://teste-colmeia-qa.colmeia-corp.com/dashboard')
    cy.get('a[routerlink="/dashboard/campanha"]').click()
  })

  it('Deve navegar para a tela de bancos de dados ao clicar no texto "Bancos de dados"', () => {
    cy.get('a[href="/dashboard/campanha/bancos-de-dados"]').click()

    cy.url().should('include', '/dashboard/campanha/bancos-de-dados')
  })

  it('Não deve haver área clicável limitada apenas ao texto (ausência de ação na área sombreada ao redor)', () => {

    cy.contains('li', 'Bancos de dados').click({ force: true })

    cy.url().should('include', '/dashboard/campanha/bancos-de-dados')
  })

})

describe('CT-006: Validar direcionamento de página após clicar na opção "Colmeia Forms"', () => {

  beforeEach(() => {
    cy.visit('https://teste-colmeia-qa.colmeia-corp.com/dashboard')
    cy.get('a[routerlink="/dashboard/campanha"]').click()
  })

  it('Deve navegar para a tela de Colmeia Forms ao clicar no texto "Colmeia Forms"', () => {
    cy.get('a[href="HREF_COLMEIA_FORMS_AQUI"]').click()

    cy.url().should('include', 'HREF_COLMEIA_FORMS_AQUI')
  })

  it('A tela deveria exibir um formulário, mas aparece vazia (já documentado como CT-001 em colmeiaforms.md)', () => {
    cy.get('a[href="/dashboard/campanha/colmeia-forms"]').click()

    cy.get('form').should('exist')
  })

  it('Não deveria haver área clicável limitada apenas ao texto (ausência de ação na área sombreada ao redor)', () => {


    cy.contains('li', 'Colmeia Forms').click('right')

    cy.url().should('include', '/dashboard/campanha/colmeia-forms')
  })

})

describe('CT-007: Validar fechamento do menu de "Campanha"', () => {

  beforeEach(() => {
    cy.visit('https://teste-colmeia-qa.colmeia-corp.com/dashboard')
    cy.get('a[routerlink="/dashboard/campanha"]').click()
    cy.contains('Campanha').should('be.visible')
  })

  it('Não deve permanecer aberto ao clicar novamente no ícone de megafone', () => {

    cy.get('a[routerlink="/dashboard/campanha"]').click()

    cy.contains('Campanha').should('not.exist')
  })

  it('Não deve permanecer aberto ao clicar fora do painel', () => {
    cy.get('body').click(50, 50)
    cy.contains('Campanha').should('not.exist')
  })

  it('Não deve haver ausência de um botão/ícone dedicado para fechar o painel', () => {
    cy.get('[aria-label="Fechar"], [aria-label="Close"], button:contains("×")').should('exist')
  })

})

describe('CT-008: Validar volta à tela inicial após entrar em outra tela', () => {

  beforeEach(() => {
    cy.visit('https://teste-colmeia-qa.colmeia-corp.com/dashboard')
    cy.get('a[routerlink="/dashboard/campanha"]').click()
    cy.get('a[href="/dashboard/campanha/bancos-de-dados"]').click()
    cy.url().should('include', '/bancos-de-dados')
  })

  it('Não deve haver ausência de um ícone/texto dedicado para retornar à tela inicial', () => {
    cy.get('[aria-label="Voltar"], [aria-label="Início"], [aria-label="Home"]').should('exist')
  })

  it('A única forma de retornar é clicar novamente no ícone de megafone (mesmo ícone usado para abrir o menu)', () => {
    cy.get('a[routerlink="/dashboard/campanha"]').click()

    cy.url().should('include', '/dashboard/campanha')
    cy.contains('Campanha').should('not.exist')
  })

})