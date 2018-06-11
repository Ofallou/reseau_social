const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const jwt = require('jsonwebtoken');

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});



const PORT = 3000;
//routes
const api = require('./back/routes');

app.use(bodyParser.json());
//config routes
app.use('/api', api);

app.use(express.static(path.join(__dirname, 'dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.listen(PORT, function () {
  console.log('Server running on localhost port:', PORT)
});
