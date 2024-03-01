const express = require('express');
const mysql2 = require('mysql2');

const app = express();
const port = 3000;

const connection = mysql2.createConnection({
  host: 'localhost',
  port: '3306',
  user: 'root',
  password:'Panpan4869',
  database: 'datacp',
});

connection.connect(err => {
  if (err) {
    console.error('Error connecting to MySQL: ', err);
    return;
  }
  console.log('Connected to MySQL');
});

app.get('/api/data', (req, res) => {
  // Thực hiện các truy vấn MySQL ở đây
  connection.query('SELECT * FROM sach', (error, results) => {
    if (error) {
      console.error('Error executing MySQL query: ', error);
      res.status(500).json({ error });
      return;
    }
    res.json(results);
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
