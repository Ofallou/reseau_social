const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const http= require('http');
const mongoose= require('mongoose');
const server = http.createServer(app);
const io = require('socket.io').listen(server);
const jwt = require('jsonwebtoken');
//Models
const User = require ('./back/models/user');
const Comment = require ('./back/models/comment');

const db="mongodb://ofallou:meissa71@ds249079.mlab.com:49079/reseau_social";
const secret='RffrtejksizikskiksizkskizkskkzikskskksMpp';

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'POST,GET,OPTIONS,PUT,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With');
  next();
});

mongoose.connect(db, err => {
  if(err){
    console.log('Oups Erreur '+err)
  }else {
    console.log('Connecté a Mongodb')
  }
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
  // On recupere tous les messages posté et enr  du serveur
  
    socket.emit('user join',{message:'Welcome'});
      
      socket.on('posted', (data) => {
        console.log('Message reçu', data);
        // Ici connecte toi a la base de donnees et sauvegared les messages
        io.sockets.emit('message',data)
      });

})


server.listen(PORT, function () {
  console.log('Server running on localhost port:', PORT);
});

module.exports = {app: app, server: server};
