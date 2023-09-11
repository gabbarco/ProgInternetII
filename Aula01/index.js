const express = require('express');
const app = express()
const hostname = '127.0.0.1';
const port = 3000;

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

app.get('/', (req, res) => {
    res.send('Hello world!');
});

app.get('/users/:userID/books/:booksID', (req,res) => {
  res.json(req.params);
})