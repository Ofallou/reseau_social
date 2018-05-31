const express = require ('express');
const router = express.Router();
const nodemailer =  require ('nodemailer')

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





var sentPassword =  function(email, password, last_name){

  nodemailer.createTestAccount((err, account) => {
    let transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: 'ofallou@gmail.com',
        pass:'meissa1971'
      }
    });
    let mailOptions = {
      from:'"Socialbook"<exemple@of.fr>',
      subject:'Information sur votre compte',
      to:email,
      replyTo:'ofbk@hotmail.fr',
      text:'test from nodemail',
      html:'<p>Bonjour,' +last_name+' <br> Vous trouverez ci-dessous votre mot de passe de connection   </p>'+ password
    };
    transporter.sendMail(mailOptions, (error, info) => {
         if(error){
           return console.log(error)
         }
         console.log('Message sent : %s', info.messageId)
    })
  });

}



var currentUserId;
function veriFyToken(req,res, next){
  if(!req.headers.authorization){
    return res.statut(401).send('invalide request')
  }
  // On recupere le token apres le terme beare
  const token= req.headers.authorization.split(' ')[1];
  if(token === 'null') {
    return res.statut(401).send('invalide request')
  }
  const payload = jwt.verify(token, secret);
  if(!payload){
    return res.statut(401).send('invalide request')
  } else {
    req.userId = payload.subject;
    currentUserId= req.userId;
    //console.log(payload.subject);

    next();
  }
}


// Enregistrement de l'utilisateur
router.post('/register',  (req, res) => {
  let userdata= req.body;
  let user = new User(userdata);
   User.findOne({email:req.body.email},(err,data) => {
    if(data){
      console.log(data)
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
  //console.log(userdata)
 // console.log(req.body.password)
  let user = new User(userdata);
  User.findOne({email:req.body.email}, (err, data)=>{
   if(err){
     console.log(err)
   } else {
     if(!data){
       res.json({message:'Email invalide '});

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



router.get('/userdata',veriFyToken ,(req, res) => {

  User.findOne({_id:currentUserId}, (err, user)=>{
    if(!err){
      res.send({user: user})
    }
  })

})


router.post('/lostpwd', (req, res) => {
  let email = req.body.email;
  User.findOne({email: email}, (err, data)=>{
    if(err){
      console.log(err)
      res.send({error:'Adresse email inconnu'})
      //console.log(data.password)
    }else {

      if(data){
        console.log(data.length)

        sentPassword(email,data.password, data.last_name)
      res.send({success:'Mot de passe envoyé,merci de verifier votre boite de reception de meme votre dossier spam'})
      }else {
        res.send({error:'Adresse email inconnu'})

      }



    }

  })

})
module.exports= router;
