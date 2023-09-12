const express = require('express');
const app = express()
const hostname = '127.0.0.1';
const port = 3000;
const sn = require('./bd_sn')
const bbt = require('./bd_bbt')
const st = require('./bd_st')

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

app.get('/sn', (req, res) => {
    res.render('index', sn);
});

app.get('/st', (req, res) => {
    res.render('index', st);
});

app.get('/bbt', (req, res) => {
    res.render('index', bbt);
});

app.set('views', './views')
app.set('view engine', 'pug')