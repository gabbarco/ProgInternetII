const express = require('express');
const server = express()


const hostname = '127.0.0.1';
const port = 3000;

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

server.use((req, res, next) => {
    console.log(hostname)
});