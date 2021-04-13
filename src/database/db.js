const sqlite3 = require('sqlite3').verbose();

// Iniciar o banco de dados
const db = new sqlite3.Database('./src/database/database.db');

module.exports = db;

//utilizar o objeto de bano de dados
db.serialize(() => {
  // 1. Criar uma tabela
  // db.run(`
  //   CREATE TABLE IF NOT EXISTS school (
  //     id INTEGER PRIMARY KEY AUTOINCREMENT,
  //     image TEXT,
  //     name TEXT,
  //     address TEXT,
  //     address2 TEXT,
  //     state TEXT,
  //     city TEXT,
  //     items TEXT
  //   );
  // `);
  // // 2. Inserir dados tabela
  // const query = `
  //   INSERT INTO school (
  //     image,
  //     name,
  //     address,
  //     address2,
  //     state,
  //     city,
  //     items
  //   ) VALUES (?,?,?,?,?,?,?);
  // `;
  // const values = [
  //   'https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=889&q=80',
  //   'Escola Estadual Jose Ribeiro',
  //   'Guilherme Savio, Jardim America',
  //   'N° 555',
  //   'São Paulo',
  //   'Jundiai',
  //   'Ensino Fundamental',
  // ];
  // function afterInsertData(err) {
  //   if (err) {
  //     return console.log(err);
  //   }
  //   console.log('Cadastrado com sucesso');
  //   console.log(this);
  // }
  // db.run(query, values, afterInsertData);
  // 3. Consultar os dados da tabela
  // db.all(`SELECT * FROM school`, function (err, rows) {
  //   if (err) {
  //     return console.log(err);
  //   }
  //   console.log('Aqui estão seus registros');
  //   console.log(rows);
  // });
  // // 4. Deletar
  // db.run(`DELETE FROM school WHERE id = ?`, [6], function (err) {
  //   if (err) {
  //     return console.log(err);
  //   }
  //   console.log('registros deletados com sucesso');
  // });
});
