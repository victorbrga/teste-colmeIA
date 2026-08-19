## Casos de Teste - Tela inicial(Dashboard)

**CT-001:Validar funcionamento do ícone de Perfil**

- **Dado** o acesso do usuário a tela inicial pós login  
- **E** visualiza o ícone de Perfil no canto superior direito
- **Quando** o usuário clicar no ícone
- **Então** deveria haver alguma ação como: abrir menu, redirecionar para página de perfil, ou expandir opções

    Resultado atual❌: Nenhuma ação ocorre ao clicar no ícone, mesmo após tentar clicar diversas vezes, isso limita a experiência do usuário e impossibilita que ele possa realizar certas opções como mudar alguma informação de seu perfil.
    
    Evidência por vídeo: https://jam.dev/c/c0c9c052-dd56-4d3a-b4b1-6e30ed902e51

  **CT-002:Validar funcionamento do dropdown de "Candidato"**

- **Dado** que o usuário está autenticado e na tela inicial
- **E** visualiza a palavra "Candidato" com um dropdown no canto superior direito
- **Quando** o usuário clicar no menu "Candidato"
- **Então** deveria abrir um dropdown com opções (ex: configurações, sair da conta)

    Resultado atual❌: O clique não produz nenhuma reação visível, nenhum menu ou dropdown se abre. O usuário fica sem acesso a funcionalidades essenciais de conta, como configurações e, principalmente, logout, podendo ficar "preso" logado sem forma de encerrar a sessão, o que é especialmente problemático em dispositivos compartilhados ou públicos.
    
    Evidência por vídeo: https://jam.dev/c/f3650059-13fe-4ab6-aad1-65ecd00873e9

  **CT-003: Validar área de conteúdo principal após login**

- **Dado** que o usuário realiza login com sucesso 
- **Quando** é redirecionado para a tela inicial (dashboard)
- **Então** deveria exibir algum conteúdo relevante no centro da tela (ex: painel, boas-vindas, dados, ou funcionalidades principais do sistema)

    Resultado atual❌: A área principal aparece completamente vazia, sem nenhum conteúdo, mensagem de carregamento ou erro. A tela vazia não comunica se é um erro, um carregamento, ou se o sistema simplesmente não tem nada pra mostrar. Gera insegurança sobre se o login realmente funcionou e não dá nenhum caminho de ação, podendo levar o usuário a abandonar o acesso.
    
    Evidência por vídeo: https://jam.dev/c/d0d1c3b4-a9c3-4989-b002-2bac8563ee6d

  **CT-004: Validar função do ícone da barra lateral esquerda (megafone)**

- **Dado** que o usuário está autenticado e na tela inicial
- **E** observa a barra lateral esquerda
- **Quando** clica no ícone de megafone
- **Então** deveria abrir uma seção com identificação clara do que representa (label/título visível, navegação consistente)

    Resultado atual⚠️: Ao clicar, o ícone fica destacado (ativo) e abre um painel lateral com o título "Campanha", listando duas opções: "Bancos de dados" e "Colmeia Forms". Não há indicação prévia (tooltip, label) de que o ícone levaria a essa seção, o usuário precisa clicar "no escuro" para descobrir a função. Falta de rotulagem em ícones de navegação prejudica a usabilidade, especialmente pra novos usuários que não sabem o que esperar antes de clicar.
    
    Evidência por vídeo: https://jam.dev/c/cf609154-3e50-41fa-8cbe-adbbad07c896

  **CT-005: Validar direcionamento de página após clicar na opção "Bancos de dados"**

- **Dado** que o usuário está autenticado e na tela inicial
- **E** clica no ícone de megafone no canto esquerdo
- **Quando** selecionar a opção "Bancos de dados"
- **Então** Deve ser direcionado para a tela de criação e pesquisa de banco de dados

    Resultado atual⚠️: O usuário consegue clicar em "Bancos de dados" e acessar a nova tela normalmente. Mas como proposta de melhoria, notei que ele só consegue acessar se clicar na palavra "Bancos de dados", caso clique na área sombreada da opção, ele não tem ação nenhuma, o que causa confusão na interface e no entendimento do usuário.

    Evidência por vídeo: https://jam.dev/c/a7abe246-40c5-40d4-9dae-d2f1e7dc89a3

  **CT-006:Validar direcionamento de página após clicar na opção "Colmeia Forms"**

- **Dado** que o usuário está autenticado e na tela inicial
- **E** clica no ícone de megafone no canto esquerdo
- **Quando** selecionar a opção "Bancos de dados"
- **Então** Deve ser direcionado para a tela de formulário

    Resultado atual⚠️: O usuário consegue clicar em "Colmeia Forms" e acessar a nova tela normalmente, o problema é que a tela não tem nenhum conteúdo, o nome indica que deveria ter um formulário, isso deixa o usuário inseguro e tende a achar que algo errado está aconecendo. Também como proposta de melhoria, notei que ele só consegue acessar se clicar na palavra "Colmeia Forms", caso clique na área sombreada da opção, ele não tem ação nenhuma, o que causa confusão na interface e no entendimento do usuário.
    
    Evidência por vídeo: https://jam.dev/c/adfb3d69-2415-4b88-ab88-149ffc7e358c


  **CT-007: Validar fechamento do menu de "Campanha"**

- **Dado** que o usuário clicou no ícone de "Megafone" no canto esquerdo
- **E** o menu de "Campanha" foi aberto
- **Quando** tenta fechar o painel (clicando novamente no ícone de megafone, clicando fora do painel, ou buscando algum botão/ícone de fechar)
- **Então** o painel deveria fechar, retornando o usuário à visualização anterior da tela inicial 

    Resultado atual❌: o painel "Campanha" permanece aberto independentemente da ação tentada, não há botão de fechar, clicar novamente no ícone de megafone não reverte a ação, e clicar fora do painel também não o fecha. Isso compromete a navegabilidade básica do sistema, forçando o usuário a soluções alternativas (reload) para continuar usando a aplicação.

    Evidência por vídeo: https://jam.dev/c/4cca115e-6d57-4063-8acc-2f847fac34fe

  **CT-008: Validar volta a tela inicial após entrar em outra tela**

- **Dado** que o usuário clicou no ícone de "megafone" no canto esquerdo
- **E** selecionou algum dos itens do menu (ex: Bancos de dados ou Colmeia Forms)
- **Quando** decidir voltar a tela inicial
- **Então** a interface deve conter algum ícone ou texto para volta da inicial

    Resultado atual❌: Não existe nenhum ícone ou texto dedicado para retornar à tela inicial. A única forma de voltar é clicar novamente no próprio ícone de megafone, o mesmo ícone usado para abrir o menu "Campanha". Isso faz com que um único elemento acumule duas funções opostas (abrir o menu e voltar para tela inicial), sem nenhuma indicação visual de que ele se comporta de forma diferente na segunda interação. Acaba sendo um problema de usabilidade e consistência de UI, não bloqueia o uso mas prejudica a experiência de navegação.

    
    Evidência por vídeo: https://jam.dev/c/f8be6c60-effa-4745-a7dd-7bf6ea433a81
