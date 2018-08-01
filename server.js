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
const shortId = require('shortid')
const Pusher = require('pusher')
const cors = require('cors')


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

const PORT = process.env.PORT || 8080;
//routes
const api = require('./back/routes');

app.use(bodyParser.json());
//config route
app.use('/api', api);

app.get('*', (req, res) => {
  const index= path.join(__dirname, 'dist','index.html')
  res.sendFile(index);

}); 

//app.use(express.static(__dirname + "/dist/"))

io.on('connection' , (socket) =>{
  console.log('User joined', socket.id);

  socket.on('login', (data)=> {
    console.log('est connecte',data);
    io.sockets.emit('isconnected', data);
  })

  socket.on('save-message', function(data){
  console.log(data)
    io.emit('new-message', {mesage: data})

    console.log('open the room',room )
  })

    //socket.emit('user join',{message:'Welcome'});
    

    socket.on('invitation:send' , (data)=> {
      socket.join(data)
      console.log(data);
      io.sockets.emit('invitation:res',data)

    })
    socket.on('iamOnline', (data)=> {
      io.sockets.emit('iamOnline:res',data)
    })

    socket.on('iamOffline',(data)=> {
      io.sockets.emit('iamOffline:res',data)
    })

    socket.on('invitation:cancel',(data) => {
      console.log(data);
      io.sockets.emit('invitation:ko', data)
    })

    socket.on('invitation:accept',(data) => {
      console.log(data);
      io.sockets.emit('invitation:ok', data)
    })
      
      socket.on('posted', (data) => {
        console.log('Message reçu', data, socket.id);
        io.sockets.emit('message',data)
      });

      socket.on('disconnect',() => {
        
        io.emit('user disconnect', socket.id)
        console.log('user disconnected', socket.id)
      })

})



server.listen(PORT, function () {
  console.log('Server running on localhost port:', PORT);
});

module.exports = {app: app, server: server};
