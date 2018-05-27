const express = require ('express');
const router = express.Router();
const User = require ('./models/user.js');
const mongoose= require('mongoose');
const jwt = require('jsonwebtoken');
const db="mongodb://localhost/reseau_social_db";
const secret='RffrtejksizikskiksizkskizkskkzikskskksMpp';
mongoose.connect(db, err => {
    if(err){
        console.log('Oups Erreur '+err)
    }else {
        console.log('Connecté a Mongodb')
    }
});

// Enregistrement de l'utilisateur
router.post('/register',  (req, res) => {
  let userdata= req.body;
  let user = new User(userdata);
   User.findOne({email:req.body.email},(err,data)=>{
    if(data.length>0){
      console.log('deja enregistré avec email ' + req.body.email);
    } else {
      user.save((err, dataUser)=>{
        if(err){
          console.log(err)
        }else {
          let payload = {subject: dataUser._id};
          let token = jwt.sign(payload, secret);
          res.status(200).send({token})
        }
       })
    }
   })
  //resp.send('register Page')
});

// gestion du login utilisateur
router.post('/login', (req, res)=> {
  let userdata= req.body
  console.log(userdata)
  console.log(req.body.password)
  let user = new User(userdata);
  User.findOne({email:req.body.email}, (err, data)=>{
   if(err){
     console.log(err)
   } else {
     if(!data){
       res.json({message:'Email inavlide '});

     } else {
       if(data.password === req.body.password){
         let payload = {subject: data._id};
         let token = jwt.sign(payload, secret);
         res.json({success: true, token : token})
       }else {
         res.json({err: 'Mot de passe Invalide'})
       }

     }
   }

  })
});

module.exports= router;
