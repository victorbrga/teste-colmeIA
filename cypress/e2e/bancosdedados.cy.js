describe('CT-001: Validar criação de um banco de dados', () => {

  beforeEach(() => {
    cy.visit('https://teste-colmeia-qa.colmeia-corp.com/dashboard')
    cy.get('a[routerlink="/dashboard/campanha"]').click()
    cy.get('a[href="/dashboard/campanha/bancos-de-dados"]').click()
  })

  it('Deve criar um banco de dados e exibi-lo na listagem', () => {
    const nomeBanco = `Banco Teste ${Date.now()}`

    cy.contains('button', 'Criar').click()

    cy.contains('Adicionar novo item').should('be.visible')
    cy.get('input[placeholder="Nome do item"]').type(nomeBanco)
    cy.contains('button', 'Salvar').click()

    cy.contains(nomeBanco).should('be.visible')
  })

})

describe('CT-002: Validar obrigatoriedade do nome ao criar um banco de dados', () => {

  beforeEach(() => {
    cy.visit('https://teste-colmeia-qa.colmeia-corp.com/dashboard')
    cy.get('a[routerlink="/dashboard/campanha"]').click()
    cy.get('a[href="/dashboard/campanha/bancos-de-dados"]').click()
    cy.contains('button', 'Criar').click()
  })

  it('Deve exibir a mensagem "O nome do item é obrigatório" na primeira tentativa sem nome', () => {
    cy.contains('button', 'Salvar').click()

    cy.contains('O nome do item é obrigatório').should('be.visible')
  })

  it('Não deve permitir criar o banco de dados sem nome na segunda tentativa', () => {


    cy.contains('button', 'Salvar').click() 
    cy.contains('O nome do item é obrigatório').should('be.visible')

    cy.contains('button', 'Salvar').click() 

    cy.contains('O nome do item é obrigatório').should('be.visible')
  })

})

describe('CT-003: Validar impossibilidade de inserir dois ou mais bancos de dados com o mesmo nome', () => {

  const nomeBanco = `Banco Duplicado ${Date.now()}` 

  beforeEach(() => {
    cy.visit('https://teste-colmeia-qa.colmeia-corp.com/dashboard')
    cy.get('a[routerlink="/dashboard/campanha"]').click()
    cy.get('a[href="/dashboard/campanha/bancos-de-dados"]').click()
  })

  it('Não deve permitir criar um segundo banco de dados com nome já existente', () => {

    cy.contains('button', 'Criar').click()
    cy.get('input[placeholder="Nome do item"]').type(nomeBanco)
    cy.contains('button', 'Salvar').click()
    cy.contains(nomeBanco).should('be.visible')

    cy.contains('button', 'Criar').click()
    cy.get('input[placeholder="Nome do item"]').type(nomeBanco)
    cy.contains('button', 'Salvar').click()

    cy.contains('Nome já cadastrado').should('be.visible')
  })

})

describe('CT-004: Validar comportamento correto da barra de pesquisa', () => {

  const cores = ['Azul', 'Vermelho', 'Verde', 'Amarelo', 'Roxo']

  beforeEach(() => {
    cy.visit('https://teste-colmeia-qa.colmeia-corp.com/dashboard')
    cy.get('a[routerlink="/dashboard/campanha"]').click()
    cy.get('a[href="/dashboard/campanha/bancos-de-dados"]').click()

    cores.forEach((cor) => {
      cy.contains('button', 'Criar').click()
      cy.get('input[placeholder="Nome do item"]').type(cor)
      cy.contains('button', 'Salvar').click()
      cy.contains(cor).should('be.visible')
    })
  })

  it('Deve filtrar corretamente ao pesquisar por um nome completo', () => {
    cy.get('input[placeholder="Pesquisar"]').type('Vermelho')

    cy.contains('Vermelho').should('be.visible')
    cy.contains('Azul').should('not.exist')
    cy.contains('Verde').should('not.exist')
    cy.contains('Amarelo').should('not.exist')
    cy.contains('Roxo').should('not.exist')
  })

  it('Deve filtrar corretamente ao pesquisar por parte do nome (letras)', () => {
    cy.get('input[placeholder="Pesquisar"]').type('Ver')

    cy.contains('Vermelho').should('be.visible')
    cy.contains('Verde').should('be.visible')
    cy.contains('Azul').should('not.exist')
    cy.contains('Amarelo').should('not.exist')
    cy.contains('Roxo').should('not.exist')
  })

  it('Deve exibir mensagem de "nenhum encontrado" ao pesquisar termo inexistente', () => {
    cy.get('input[placeholder="Pesquisar"]').type('Rosa')

    cy.contains('Nenhum resultado encontrado para').should('be.visible')
  })

  it('Deve exibir todos os bancos novamente ao limpar a pesquisa', () => {
    cy.get('input[placeholder="Pesquisar"]').type('Vermelho')
    cy.contains('Azul').should('not.exist')

    cy.get('input[placeholder="Pesquisar"]').clear()

    cores.forEach((cor) => {
      cy.contains(cor).should('be.visible')
    })
  })

})

describe('CT-005: Validar comportamento do ícone de "Atualizar"', () => {

  const nomeBanco = `Banco Teste ${Date.now()}`

  beforeEach(() => {
    cy.visit('https://teste-colmeia-qa.colmeia-corp.com/dashboard')
    cy.get('a[routerlink="/dashboard/campanha"]').click()
    cy.get('a[href="/dashboard/campanha/bancos-de-dados"]').click()

    cy.contains('button', 'Criar').click()
    cy.get('input[placeholder="Nome do item"]').type(nomeBanco)
    cy.contains('button', 'Salvar').click()
    cy.contains(nomeBanco).should('be.visible')
  })

  it('Não deve limpar a listagem ao clicar no ícone de "Atualizar"', () => {

    cy.get('path[d*="M17.65 6.35"]').parents('button').click()

    cy.contains(nomeBanco).should('be.visible')
  })

})

describe('CT-006: Validar funcionamento correto da opção de arquivar um banco de dados', () => {

  const nomeBanco = `Banco Teste ${Date.now()}`

  beforeEach(() => {
    cy.visit('https://teste-colmeia-qa.colmeia-corp.com/dashboard')
    cy.get('a[routerlink="/dashboard/campanha"]').click()
    cy.get('a[href="/dashboard/campanha/bancos-de-dados"]').click()

    cy.contains('button', 'Criar').click()
    cy.get('input[placeholder="Nome do item"]').type(nomeBanco)
    cy.contains('button', 'Salvar').click()
    cy.contains(nomeBanco).should('be.visible')
  })

  it('Deve remover o banco de dados da listagem principal ao arquivar', () => {
    cy.contains(nomeBanco)
      .parents('tr')
      .find('button[title="Arquivar"]')
      .click()

    cy.contains(nomeBanco).should('not.exist')
  })

  it('Não deve haver ausência do item arquivado na lista de "Itens arquivados"', () => {

    cy.contains(nomeBanco)
      .parents('tr')
      .find('button[title="Arquivar"]')
      .click()

    cy.get('path[d*="M20 2H4c-1"]').parents('button').click()

    cy.contains(nomeBanco).should('be.visible')
  })

})

describe('CT-007: Validar funcionamento correto da opção de deletar um banco de dados', () => {

  const nomeBanco = `Banco Teste ${Date.now()}`

  beforeEach(() => {
    cy.visit('https://teste-colmeia-qa.colmeia-corp.com/dashboard')
    cy.get('a[routerlink="/dashboard/campanha"]').click()
    cy.get('a[href="/dashboard/campanha/bancos-de-dados"]').click()

    cy.contains('button', 'Criar').click()
    cy.get('input[placeholder="Nome do item"]').type(nomeBanco)
    cy.contains('button', 'Salvar').click()

    cy.contains(nomeBanco).should('be.visible')
  })

  it('Deve excluir o banco de dados da listagem principal', () => {

    cy.contains(nomeBanco)
      .parents('tr')
      .find('button:has(path[d^="M6 19"])')
      .click()

    cy.contains(nomeBanco).should('not.exist')
  })

})


describe('CT-008: Validar formatação de data de criação para o formato nacional (DD/MM/AAAA)', () => {

  const nomeBanco = `Banco Teste ${Date.now()}`

  beforeEach(() => {
    cy.visit('https://teste-colmeia-qa.colmeia-corp.com/dashboard')
    cy.get('a[routerlink="/dashboard/campanha"]').click()
    cy.get('a[href="/dashboard/campanha/bancos-de-dados"]').click()

    cy.contains('button', 'Criar').click()
    cy.get('input[placeholder="Nome do item"]').type(nomeBanco)
    cy.contains('button', 'Salvar').click()

    cy.contains(nomeBanco).should('be.visible')
  })

  it('Deve exibir a data de criação no formato DD/MM/AAAA', () => {

    cy.contains(nomeBanco)
      .parents('tr')
      .find('td')
      .eq(1)
      .invoke('text')
      .then((dataCriacao) => {
        expect(dataCriacao.trim()).to.match(/^\d{2}\/\d{2}\/\d{4}$/)
      })

  })

})

describe('CT-009: Validar persistência dos dados ao ir para outro menu e voltar para a lista de bancos de dados', () => {

  const nomeBanco = `Banco Teste ${Date.now()}`

  beforeEach(() => {
    cy.visit('https://teste-colmeia-qa.colmeia-corp.com/dashboard')
    cy.get('a[routerlink="/dashboard/campanha"]').click()
    cy.get('a[href="/dashboard/campanha/bancos-de-dados"]').click()

    cy.contains('button', 'Criar').click()
    cy.get('input[placeholder="Nome do item"]').type(nomeBanco)
    cy.contains('button', 'Salvar').click()

    cy.contains(nomeBanco).should('be.visible')
  })

  it('Deve manter o banco de dados cadastrado após navegar para outro menu e retornar', () => {

    cy.contains('a', 'Colmeia Forms').click()

    cy.contains('a', 'Bancos de dados').click()

    cy.contains(nomeBanco).should('be.visible')
  })

})
