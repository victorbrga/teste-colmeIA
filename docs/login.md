## Casos de Teste - Login

**CT-001: Validar estruturação do e-mail inserido pelo usuário ✅**

- **Dado** que o usuário está na tela inicial de Login 
- **E** insere seu e-mail no campo "Email",
- **Quando** o e-mail for inserido sem "@" ou domínio (ex: "usuarioexemplo", "usuario.exemplo")
- **Então** o usuário não pode prosseguir o Login
- **E** a mensagem "Email Inválido" deve ser exibido abaixo do campo


  Resultado atual✅: O sistema valida a inserção de "@" e de domínio, fazendo assim com que caso o usuário coloque um e-mail fora da estrutura correta, a mensagem: "Email Inválido é exibida", é importante ressaltar que o usuário não consegue prosseguir com o login depois disso.
  

  Evidência por vídeo: https://jam.dev/c/e1169944-1e7f-4c32-84a7-7437ba6dbf33


**CT-002: Validar que nenhum dos campos está vazio**

- **Dado** que o usuário está na tela inicial de Login
- **E** deixa o campo de "Email" ou "Senha" vazio
- **Quando** tentar o login clicando no botão "Entrar"
- **Então** o usuário deve ser impossibilitado de acessar as próximas páginas
- **E** deve ter uma mensagem intuitiva como "Esse campo é obrigatório"


  Resultado atual✅: O sistema a mensagem "Esse campo é obrigatório" e não permite o avanço com nenhum dos dois campos vazios, porém ao clicar em entrar o erro muda para "Usuário ou senha inválidos", não esta categoricamente errado, porém não exibe a causa raiz do problema para o usuário, minha sugestão de melhoria é que mantenha a mensagem de campo obrigatório nesse caso.


  Evidência por vídeo: https://jam.dev/c/ecdde981-73e9-46fc-9b4f-7db872f23535


**CT-003: Validar funcionamento da função “Esqueceu a senha?”**

- **Dado** que o usuário está na tela inicial de Login
- **E** esquece a senha de seu acesso
- **Quando** clicar no texto "Esqueceu a senha?"
- **Então** ele deve ser redirecionado para uma página/tela que possibilite a recuperação da senha


  Resultado atual❌: Atualmente o botão "Esqueceu a senha?" não direciona o usuário para nenhuma tela/página, fazendo assim com que o botão não tenha nenhuma funcionalidade e que o usuário não consiga mudar sua senha, causando uma instabildade e confusão.
 

  Evidência por vídeo: https://jam.dev/c/dc21b1fa-95fe-4145-8682-06b235713f3d
 

**CT-004: Validar o funcionamento do botão “Entrar” com dado incoerente**

- **Dado** que o usuário está na tela inicial de Login
- **E** colocar seu e-mail ou senha de maneira que não condiz com seus dados
- **Quando** tentar acessar a próxima página ao clicar no botão "Entrar"
- **Então** o usuário deve ser avisado que Email ou senha estão inválidos


    Resultado atual✅: Ao inserir dados incoerentes(ou inexistentes) e tentar acesso ao clicar no botão de "Entrar" é exibida a mensagem "Usuário ou senha inválidos", tendo o comportamento correto é impedir o usuário com dados incoerentes de entrar.
  

  Evidência por vídeo: https://jam.dev/c/78ddfbdc-f9ab-41af-9f5a-0e1cc1101f4a


**CT-005: Validar funcionamento correto do botão “Entrar” com dado coerente**

- **Dado** que o usuário está na tela inicial de Login
- **Quando** colocar suas informações (Email e senha) condizentes com seus dados
- **E** clicar no botão "Entrar" para acessar a próxima página
- **Então** o usuário deve prosseguir sem impedimentos ou mensagens inesperadas


  Resultado atual❌: Ao realizar o teste de acessar o sistema com um usuário existente e com seus dados coerentes e clicar no botão "Entrar", foi exibido um modal com a mensagem "Seu login está incorreto, quer continuar?", independentemente de qual seja a credencial "correta" no ambiente de teste, o sistema apresenta uma contradição lógica: a mensagem de erro aparece exatamente no fluxo que **permite** o acesso, e não aparece no fluxo que **bloqueia** o acesso. Isso é logicamente invertido e enganoso para o usuário, pois sugere ao usuário que ele errou algo mesmo quando o sistema efetivamente concede acesso.


  Evidência por vídeo: https://jam.dev/c/9ab91a4d-76b1-4fc9-9376-0f7bb80b20d9


**CT-006: Validar consistência de idioma nos campos do formulário**

- **Dado** que o usuário está na tela de login
- **Quando** observa os textos da interface
- **Então** todos os textos deveriam estar no mesmo idioma


  Resultado atual❌: Existe o campo de input que exibe o placeholder "Password" em inglês, enquanto todo o restante da interface ("Esqueceu sua senha?" e botão "Entrar") está em português, gerando inconsistência de idioma na mesma tela.


  Evidência por vídeo: https://jam.dev/c/138fc820-cea2-448b-8a9b-5daf32b77d41
