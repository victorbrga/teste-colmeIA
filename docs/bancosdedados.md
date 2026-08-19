## Casos de Teste - Bancos de Dados

### **CT-001: Validar criação de um banco de dados**

- **Dado** que o usuário entrou no menu "Bancos de dados" 
- **E** clicou no botão "Criar" com ícone de lápis no lado direito
- **Quando** inserir um nome para o banco de dados
- **Então** o novo banco de dados deve ser visualizado na listagem

  Resultado atual✅: O usuário consegue criar um banco de dados corretamente, e ele aparece na listagem conforme esperado. 
  
  Evidência por vídeo: https://jam.dev/c/866e0158-f986-476f-8caa-10df0c8db8f3

### **CT-002: Validar obrigatoriedade do nome ao criar um banco de dados**

- **Dado** que o usuário clicou no botão "Criar" com ícone de lápis no lado direito
- **Quando** ele tentar criar um banco de dados sem nome
- **Então** o sistema deve impedir o usuário de criar esse banco de  dados
- **E** deve mostrar a mensagem "O nome do item é obrigatório"

  Resultado atual❌: Ao clicar em "Criar" a primeira vez, a mensagem "O nome do item é obrigatório" é exibida corretamente. Porém, ao clicar novamente em "Criar" (segunda tentativa), o sistema permite a criação do banco de dados mesmo sem nome, contrariando a própria validação que ele mesmo exibiu. O usuário pode acabar criando registros sem nome só por insistir no clique, gerando bancos de dados "vazios" ou não identificáveis na listagem, o que compromete a organização e rastreabilidade dos dados cadastrados.
  
  Evidência por vídeo: https://jam.dev/c/a0775a56-a74f-4aff-b820-fb1f7e157ea1

### **CT-003: Validar impossibilidade de inserir dois ou mais bancos de dado com o mesmo nome**

- **Dado** que o usuário clicou no botão "Criar" com ícone de lápis no lado direito
- **E** criou um Banco de Dados com o nome de preferência
- **Quando** o usuário tentar criar outro banco de dados com o mesmo nome do anterior
- **Então** o usuário não deve ser possibilitado de criar dois ou mais bancos com o mesmo nome
- **E** deve ser aparecer uma mensagem como "Nome já cadastrado"

  Resultado atual❌: Não existe nenhuma validação de nome duplicado, é possível criar múltiplos bancos de dados com o nome idêntico, sem nenhum aviso ou bloqueio. Isso gera ambiguidade e risco de erro operacional, se o usuário precisar localizar ou selecionar um banco de dados específico por nome, a duplicidade torna impossível saber qual é o correto, aumentando a chance de manipular dados no registro errado.
  
  Evidência por vídeo: https://jam.dev/c/a42d1f0b-f52a-46fc-83fb-fd0d776ab822

### **CT-004: Validar comportamento correto da barra de pesquisa**

- **Dado** que o usuário criou diversos bancos de dados com nomes diferentes
- **E** clicou no placeholder escrito "Pesquisar"
- **Quando** inserir o nome do banco de dados que deseja pesquisar
- **Então** ele deve mostrar o banco de dados referente ao nome pesquisado

  Resultado atual✅: A busca funciona conforme esperado, filtrando corretamente por letra e palavra digitada.
  
  Evidência por vídeo: https://jam.dev/c/c0371780-42fc-48f0-860c-fc627f6201dc

### **CT-005: Validar comportamento do ícone de "Atualizar"**

- **Dado** que o usuário criou diversos bancos de dados com êxito
- **E** visualizou o ícone de "Atualizar" ao lado esquerdo do botão de "Criar"
- **Quando** clicar no ícone
- **Então** atualize a lista caso algum novo banco de dados ainda não esteja aparecendo

  Resultado atual❌: O ícone de "Atualizar" limpa a listagem de bancos de dados cadastrados, em vez de atualizá-la. Além disso, o mesmo ícone tem uma segunda função distinta: quando o usuário está na lista de "Itens arquivados", clicar nele retorna à lista de bancos de dados criados. Isso é enganoso e pode levar o usuário a pensar que perdeu todos os dados cadastrados, gerando pânico ou desconfiança na confiabilidade do sistema. A dupla função do mesmo ícone, dependendo do contexto de tela, também quebra a expectativa de consistência de interface.
  
  Evidência por vídeo: https://jam.dev/c/4cfd5bc4-f227-4c7e-ade6-90af406f4023

### **CT-006: Validar funcionamento correto da opção de arquivar um banco de dados**

- **Dado** que o usuário criou um banco de dados com êxito
- **E** clicou no ícone azul de "Arquivar" ao lado do ícone de deletar
- **Quando** o usuário ir no ícone de "Arquivados" do lado esquerdo da barra de pesquisa
- **Então** a lista de "Itens arquivados" ser atualizada para aparecer todos os bancos de dados que o usuário arquivou

  Resultado atual❌: Ao clicar em "Arquivar", o banco de dados desaparece da lista principal corretamente. Porém, ao acessar "Itens arquivados", a lista aparece sempre vazia, independentemente de quantos bancos de dados tenham sido arquivados. Os dados arquivados ficam efetivamente **inacessíveis** pois o usuário perde a referência de onde o registro foi parar, sem conseguir consultá-lo. 
  
  Evidência por vídeo: https://jam.dev/c/63e4c471-855b-4299-b5a3-d4984a571748

### **CT-007: Validar funcionamento correto da opção de deletar um banco de dados**

- **Dado** que o usuário criou um banco de dados com êxito
- **E** visualizou o ícone vermelho de "Lixeira" ao lado do ícone de arquivar
- **Quando** o usuário clicar no ícone
- **Então** o banco de dados selecionado deve ser excluído e não aparecer em mais nenhuma lista

  Resultado atual✅:  O item é excluído e não aparece mais em nenhuma listagem, como esperado.
  
  Evidência por vídeo: https://jam.dev/c/7699d176-5a48-42ff-999a-760de8eab857

### **CT-008: Validar formatação de data de criação para o formato nacional(DD/MM/AAAA)**

- **Dado** que o usuário criou um banco de dados com êxito
- **Quando** visualizar a data de criação
- **Então** a data de criação deve estar no padrão nacional de dia, mês e ano (em sequência)

  Resultado atual❌: A data é exibida no formato AAAA/MM/DD, diferente do padrão nacional esperado, podendo gerar leitura equivocada da data por parte do usuário brasileiro, já que o padrão internacional (AAAA/MM/DD) não é o formato de leitura natural no Brasil e existe o risco de confundir dia com mês em datas ambíguas (ex: 03/04 pode ser interpretado incorretamente).
  
  Evidência por vídeo: https://jam.dev/c/a4e1a94a-3b3b-4d2b-8f92-92735aba52f4

### **CT-009: Validar persistência dos dados ao ir para outro menu e voltar para a lista de bancos de dados**

- **Dado** que o usuário criou um banco de dados com êxito
- **E** acessou outro menu como "Colmeia Forms"
- **Quando** voltar a acessar o menu de "Bancos de dados"
- **Então** o banco de dados inserido anteriormente ainda deve estar cadastrado na lista

  Resultado atual❌: Ao navegar para "Colmeia Forms" e retornar para "Bancos de dados", todos os registros criados anteriormente desaparecem da lista. Na minha visão esse é um dos achados mais graves identificados porque sugere perda de dados apenas por navegação entre telas, o que é um comportamento crítico. A experiência do usuário é de que o trabalho realizado foi perdido, gerando desconfiança severa na confiabilidade do sistema.
  
  Evidência por vídeo: https://jam.dev/c/9f0e5429-49f0-43f1-bf9a-6030596652b0

### **CT-010: Validar persistência dos dados ao ir para listas de itens arquivados e voltar para a lista de bancos de dados criados**

- **Dado** que o usuário criou um banco de dados com êxito
- **E** acessou o menu de "Itens arquivados"
- **Quando** voltar a acessar a lista de banco de dados criados
- **Então** os bancos de dados inseridos anteriormente ainda deve estar cadastrados na lista

  Resultado atual✅: Funciona corretamente e os registros permanecem na lista após essa navegação específica.
  
  Evidência por vídeo: https://jam.dev/c/58647463-495e-47f1-946a-1f6705575a28

