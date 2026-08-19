describe('CT-001: Validar estruturação do e-mail inserido pelo usuário', () => {

  const emailsInvalidos = [
    'usuarioexemplo',           
    'usuario.exemplo',          
    'usuario@',                 
    '@exemplo.com',             
    'usuario@@exemplo.com',     
    'usuario@exemplo..com',     
  ]

  emailsInvalidos.forEach((email) => {
    it(`Não deve permitir login com e-mail inválido: "${email}"`, () => {
      cy.visit('https://teste-colmeia-qa.colmeia-corp.com')
      cy.get('#email').type(email)

      cy.contains(' Email inválido ').should('be.visible')
    })
  })
})

describe('CT-002: Validar que nenhum dos campos está vazio', () => {

  beforeEach(() => {
    cy.visit('https://teste-colmeia-qa.colmeia-corp.com')
  })

  it('Não deve permitir login com ambos os campos vazios', () => {
    cy.contains('button', 'Entrar').click()
    cy.contains('Usuário ou senha inválidos').should('be.visible')
  })

  it('Não deve permitir login apenas com e-mail preenchido (senha vazia)', () => {
    cy.get('#email').type('usuario@teste.com')
    cy.contains('button', 'Entrar').click()
    cy.contains('Usuário ou senha inválidos').should('be.visible')
  })

  it('Não deve permitir login apenas com senha preenchida (e-mail vazio)', () => {
    cy.get('#password').type('SenhaQualquer123')
    cy.contains('button', 'Entrar').click()
    cy.contains('Usuário ou senha inválidos').should('be.visible')
  })

it('Deve exibir "Esse campo é obrigatório" ao sair do campo vazio, mas a mensagem muda para genérica ao clicar em Entrar (comportamento a melhorar)', () => {

  cy.get('#email').click().blur()
  cy.contains(' Este campo é obrigatório ').should('be.visible')

  cy.get('#password').click().blur()
  cy.contains(' Este campo é obrigatório ').should('be.visible')

  cy.contains('button', 'Entrar').click()
  cy.contains('Usuário ou senha inválidos').should('be.visible')
})

})

describe('CT-003: Validar funcionamento da função "Esqueceu a senha?"', () => {

  beforeEach(() => {
    cy.visit('https://teste-colmeia-qa.colmeia-corp.com')
  })

  it('Deve redirecionar para uma página de recuperação de senha ao clicar em "Esqueceu sua senha?"', () => {
    cy.url().as('urlLogin')

    cy.contains('Esqueceu sua senha?').click()

    cy.get('@urlLogin').then((urlLogin) => {
      cy.url().should('not.eq', urlLogin)
    })
  })

})


describe('CT-004: Validar o funcionamento do botão "Entrar" com dado incoerente', () => {

  beforeEach(() => {
    cy.visit('https://teste-colmeia-qa.colmeia-corp.com')
  })

  it('Deve exibir mensagem de erro com e-mail inexistente e senha qualquer', () => {
    cy.get('#email').type('teste@colmeIA.com')
    cy.get('#password').type('SenhaQualquer123')
    cy.contains('button', 'Entrar').click()

    cy.contains('Usuário ou senha inválidos').should('be.visible')
  })

  it('Deve exibir mensagem de erro com e-mail válido cadastrado e senha incorreta', () => {
    cy.get('#email').type('teste@colmeIA.com')
    cy.get('#password').type('senhaErradaDePropositoAqui')
    cy.contains('button', 'Entrar').click()

    cy.contains('Usuário ou senha inválidos').should('be.visible')
  })

  it('Não deve permitir acesso à área logada com dados incoerentes', () => {
    cy.get('#email').type('teste@colmeIA.com')
    cy.get('#password').type('SenhaQualquer123')
    cy.contains('button', 'Entrar').click()

    cy.get('#email').should('be.visible')
    cy.get('#password').should('be.visible')
  })

})

describe('CT-005: Validar funcionamento correto do botão "Entrar" com dado coerente', () => {

  beforeEach(() => {
    cy.visit('https://teste-colmeia-qa.colmeia-corp.com')
    cy.get('#email').type(('qa@test.com'))
    cy.get('#password').type(('123456'))
    cy.contains('button', 'Entrar').click()
  })

  it('Não deveria exibir mensagem de erro com credenciais válidas', () => {
    cy.contains('Seu login está incorreto, quer continuar?').should('not.exist')
  })

  it('Deve conceder acesso ao clicar em "Continuar" no modal, apesar da mensagem enganosa', () => {
    cy.contains('Seu login está incorreto, quer continuar?').should('be.visible')
    cy.contains('button', 'Continuar').click()

    cy.get('#email').should('not.exist')
  })

})

describe('CT-006: Validar consistência de idioma nos campos do formulário', () => {

  beforeEach(() => {
    cy.visit('https://teste-colmeia-qa.colmeia-corp.com')
  })

it('O campo de senha deveria exibir o label em português ("Senha")', () => {
  cy.contains('span', 'Password').should('not.exist')
  cy.contains('span', 'Senha').should('exist')
})

  it('Deve exibir os demais textos da interface em português (comportamento correto, para contraste)', () => {
    cy.contains('Login').should('be.visible')
    cy.contains('Esqueceu sua senha?').should('be.visible')
    cy.contains('button', 'Entrar').should('be.visible')
  })

})