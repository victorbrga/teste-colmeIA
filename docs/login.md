## Login

**CT-001: Validar estruturação do e-mail inserido pelo usuário ✅**

- **Dado** que o usuário está na tela inicial de Login 
- **E** insere seu e-mail no campo "Email",
- **Quando** o e-mail for inserido sem "@" ou domínio (ex: "usuarioexemplo", "usuario.exemplo", "usuario@exemplo")
- **Então** o usuário não pode prosseguir o Login
- **E** a mensagem "Email Inválido" deve ser exibido abaixo do campo

**CT-002: Validar que nenhum dos campos está vazio ✅**

- **Dado** que o usuário está na tela inicial de Login
- **E** deixa o campo de "Email" ou "Senha" vazio
- **Quando** tentar o login clicando no botão "Entrar"
- **Então** o usuário deve ser impossibilitado de acessar as próximas páginas
- **E** deve ter uma mensagem intuitiva como "Esse campo é obrigatório"

**CT-003: Validar funcionamento da função “Esqueceu a senha?” ⚠️**

- **Dado** que o usuário está na tela inicial de Login
- **E** esquece a senha de seu acesso
- **Quando** clicar no texto "Esqueceu a senha?"
- **Então** ele deve ser redirecionado para uma página/tela que possibilite a recuperação da senha

**CT-004: Validar o funcionamento do botão “Entrar” com dado incoerente⚠️**

- **Dado** que o usuário está na tela inicial de Login
- **E** colocar seu e-mail ou senha de maneira que não condiz com seus dados
- **Quando** tentar acessar a próxima página ao clicar no botão "Entrar"
- **Então** o usuário deve ser avisado que Email ou senha estão inválidos

**CT-005: Validar funcionamento correto do botão “Entrar” com dado coerente**

- **Dado** que o usuário está na tela inicial de Login
- **Quando** colocar suas informações (Email e senha) condizentes com seus dados
- **E** clicar no botão "Entrar" para acessar a próxima página
- **Então** o usuário deve prosseguir sem impedimentos ou mensagens inesperadas

**CT-006: Validar consistência de idioma nos campos do formulário**

- **Dado** que o usuário está na tela de login
- **Quando** observa os textos da interface
- **Então** todos os textos deveriam estar no mesmo idioma
