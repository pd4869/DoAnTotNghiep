const mysql2 = require('mysql2')
const fileUpload = require('express-fileupload');

const connection = mysql2.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password:'Panpan4869',
    database: 'datacp',
  });
module.exports = connection;

