const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const http= require('http');
const server = http.createServer(app);
const io = require('socket.io').listen(server);


app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'POST,GET,OPTIONS,PUT,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With');
  next();
});


app.use(express.static(path.join(__dirname, 'dist')));

const PORT = 3000;
//routes
const api = require('./back/routes');

app.use(bodyParser.json());
//config routes
app.use('/api', api);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});


io.on('connection' , (socket) =>{
  console.log('User joined');
  socket.emit('message', ('hello'))
  socket.on('message', (data) =>{
    console.log('Message reçu', data);
   socket.emit('message', data)

  })
})


server.listen(PORT, function () {
  console.log('Server running on localhost port:', PORT);
});

module.exports = {app: app, server: server};
