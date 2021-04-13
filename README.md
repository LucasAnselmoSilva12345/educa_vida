# EducaVida

<p>A EducaVida é um programa para escolas públicas, onde contém um projeto chamado de Ensino+, onde as intenções são ajudar os alunos dessas escolas nas tarefas do dia da escola, além de os alunos para as situações do futuro, como as provas na propría escola, provas para escolas técnicas e provas de vestibulares, além de um auxilio profissional sobre plano de carreira, pós fim do ano escolar.</p>

<p>A escola que aceita participar deste programa, deve realizar um cadastro, preenchendo com os dados da escola, e após esse cadastro, nossa equipe entrará em contato com os mesmo.</p>

<p>Nossa missão é ajudar os alunos mais necessitados, e promover uma competição igualitártia no ensino, promovendo um ensino justo, para os alunos de escola pública.</p>

## Aplicação 💾

<p>O site se baseia em 5 paginas principais, subdividas em:</p>
  1. A "index" do site, onde apresentamos a ideia principal do programa e do projeto, além de uma apresentação sobre o que vamos abranger no projeto.
  2. A segunda página, é uma apresentação sobre nós, falamos um pouco de nós, e apresentamos nossos valores.
  3. A pagina "projeto" é onde apresentamos à tese do projeto Ensino+, onde apresentamos a ideia do nosso projeto, alinhado com relatos de ex-alunos de escolas que participaram do nosso programa.
  4. Em relação aos nosso patrocinadores, temos uma página especial só para eles, onde dizemos á função de cada um nesse programa e atuações nas escolas participantes.
  5. E para retirada de dúvidas, temos uma página "contato", para as escolas entrarem em contatos conosco para retirada de algumas dúvidas.

<p>Em relação ao cadastro de escolas para participação no projeto, a etapa é subdivida em 3 partes:</p>
  1. O responsável pelo cadastro deve acessar a página de projeto, para ter a opção de ir para a página do projeto Ensino+, logo, assim que estiver nessa página, ele terá acesso ao menu para cadastrar / pesquisar escolas por cidade que já se cadastraram.
  2. Clicar na opção "Cadastrar escola" e preencher o formulario, com todas as informações solicitadas.
  3. Após preencher, você é redireicionado, de volta para a página inicial da Ensino+, e poderá pesquisar no campo "Pesquisar escolas já cadastrada", filtrando por cidade, digitar sua cidade, e assim você verâ que sua escola já está cadastrada.

<p>Em resumo geral, essa aplicação é para aprensentar sobre a EducaVida e promover o conhecimento sobre o projeto Ensino+, além de motivar as escola há se cadastrarem, para ajudar os seus alunos à construirem um ótimo futuro.</p>

### Detalhes da Aplicação 🖥️

- A aplicação foi desenvolvida usando as seguintes tecnologias:

      > HTML

      > CSS

      > JavaScript

      > Nunjucks

      > SQLite3

- A aplicação está rodando pelo servidor interno da aplicação, através do comando _npm start_, onde executa um arquivo _server.js_ - onde está configurado tudo da aplicação.

- A aplicação, tem algumas depedências a serem instaladas, que já vão está salvas, no _package.json_, que são as depedências de:

      > express - 'npm install express' ou 'yarn add express'

      > nunjucks - 'npm install nunjucks' ou 'yarn add nunjucks'

      > sqlite3 - 'npm install sqlite3' ou 'yarn add sqlite3' - Para iniciar o banco, rode no terminal 'npm db'

      > Instalação obrigatoria, para conter a pasta 'node_modules'

- Também algumas dependências de desenvolvida:

      > nodemon - 'npm install nodemon' ou 'yarn add nodemon'
      > Instalação obrigatoria, para conter a pasta 'node_modules'

- A aplicação, contém um banco de dados com as seguintes tabelas:

      > image - image da escola
      > name - nome da escola
      > address - nome da rua && nome do bairro
      > address2 - Numero identificador do local
      > state - Unidade Federal
      > city - cidade em que a escola se encontra
      > items - Quais anos sua escola aborda

- Em relação ao estilo do site, temos:

      > A pasta global, onde se encontra os estilos
      > "styleGlobal" - definição global das paginas + variaveis de cores
      > "style.css" - estilos das paginas - index, sobre, projeto, patrocinadores e sobre
      > "template - estilos das paginas - home, register_school e search-results (ensino+)
      > "modal" - template de paginas adiconadas via nunjucks
      > "error" - template de paginas adiconadas via nunjucks

- A aplicação está responsiva, acessivel para os dispositivos moveis.

      > Detalhes sobre responsividade, no arquivo "responsive.css"

- Imagens > Todas as imagens são de repositorios gratuitos, e se localizam na pasta 'assets'

### Imagem do inicio da index da aplicação 🖨️

<p width="100%">
  <a data-flickr-embed="true" href="https://www.flickr.com/photos/190690980@N06/51113791609/in/dateposted-public/" title="a"><img src="https://live.staticflickr.com/65535/51113791609_9fd05cb3a4_b.jpg" width="1024" height="451" alt="a"></a>
</p>

### Como baixar e executar o site 'EducaVida' 📁

<p>Primeiro, verifique que você tenha o "GIT" instalado na sua máquina, caso não tenha, baixe ele, através desse link <a href="https://git-scm.com/">git</a>, após concluir a instalação do git na sua máquina, seguia esses passos: </p>

1.  Abra seu terminal, na pasta onde deseja salvar o projeto, e rode o comando:

        [git clone 'link desse repositorio']

2.  Após isso, abra o projeto no seu editor de código, e no terminal interno do editor, rode o comando:

        [npm install || yarn install] - para instalar a pasta 'node_modules' & dependências do projeto

3.  Após isso, rode o comando:

        [npm db || yarn db] - para configurar o banco de dados

4.  Após isso, rode o comando para executar o projeto:

        [npm start]

### Projeto Pessoal 👨‍🎓

<p> O site EducaVida é um site de desenvolvimento pessoal, logo é um projeto pessoal, onde há intenção é treinar as habilidades em relação aos conhecimentos em desenvolvimento web.
</p>
