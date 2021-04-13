const express = require('express');
const server = express();

//pegar o banco de deletados
const db = require('./database/db');

server.use(express.static('public'));

server.use(express.urlencoded({ extended: true }));

// UTILIZANDO O NUNJUCKS
const nunjucks = require('nunjucks');
nunjucks.configure('src/template', {
  express: server,
  noCache: true,
});

server.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

server.get('/sobre', (req, res) => {
  res.sendFile(__dirname + '/views/sobre.html');
});

server.get('/projeto', (req, res) => {
  res.sendFile(__dirname + '/views/projeto.html');
});

server.get('/patrocinadores', (req, res) => {
  res.sendFile(__dirname + '/views/patrocinadores.html');
});

server.get('/contato', (req, res) => {
  res.sendFile(__dirname + '/views/contato.html');
});

server.get('/home', (req, res) => {
  return res.render('home.html');
});

server.get('/register', (req, res) => {
  // console.log(req.query);

  return res.render('register_school.html');
});

server.post('/saveregister', (req, res) => {
  // console.log(req.body);

  //inserir dados no banco de dados
  const query = `
    INSERT INTO school (
      image,
      name,
      address,
      address2,
      state,
      city,
      items
    ) VALUES (?,?,?,?,?,?,?);
  `;
  const values = [
    req.body.image,
    req.body.name,
    req.body.address,
    req.body.address2,
    req.body.state,
    req.body.city,
    req.body.items,
  ];
  function afterInsertData(err) {
    if (err) {
      console.log(err);
      // return res.send('Erro na cadastro!');
      return res.render('register_school.html', { error: true });
    }

    console.log('Cadastrado com sucesso');
    console.log(this);

    return res.render('register_school.html', { saved: true });
  }

  db.run(query, values, afterInsertData);
});

server.get('/search', (req, res) => {
  const search = req.query.search;

  if (search == '') {
    // pesquisa vazia
    return res.render('search_results.html', { total: 0 });
  }

  // pegar os dados do bd
  db.all(
    `SELECT * FROM school WHERE city LIKE '%${search}%'`,
    function (err, rows) {
      if (err) {
        return console.log(err);
      }

      const total = rows.length;

      // mostrar pag html com dados do banco de dados
      return res.render('search_results.html', { school: rows, total });
    }
  );
});

server.listen(3000);
