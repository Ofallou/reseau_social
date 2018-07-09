const express = require ('express');
const router = express.Router();
const nodemailer =  require ('nodemailer');
const mongoose= require('mongoose');
const jwt = require('jsonwebtoken');
var gravatar = require('gravatar');
//Models
const User = require ('./models/user.js');
const Comment = require ('./models/comment');

//Mongodb
const db="mongodb://ofallou:meissa71@ds249079.mlab.com:49079/reseau_social";

const secret='RffrtejksizikskiksizkskizkskkzikskskksMpp';



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
    return res.send('invalide request')
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
      user.picture = gravatar.url(req.body.email, {
        s: '150',
        r: 'pg',
        d: 'robohash'});
        
      user.save((err, dataUser)=>{
        if(err){
          console.log(err)
        }else {
          console.log(dataUser)
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
        res.json({err: 'Mot de passe Invalide'})       }

     }
   }

  });
});



router.get('/userdata',veriFyToken ,(req, res) => {

  User.findOne({_id:currentUserId}, (err, user)=>{
    if(!err){
      res.send({user: user})
    }
  })

})

router.get('/',(req, res) => {

res.send({message: 'connecté'})

})


router.get('/admin', veriFyToken, (req,res) => {

  res.send('admin welcome !')
})



// Lost passwaord recovery
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
      res.send({success:'Mot de passe envoyé,merci de verifier votre boite de reception de meme votre dossier spam'});
      }else {
        res.send({error:'Adresse email inconnu'})

      }


    }

  })

})

// comment recording (register user only)


router.post('/post_comment',veriFyToken ,(req,res) => {

  //On valide le token et le user connecté
  const token= req.headers.authorization.split(' ')[1];
  const payload = jwt.verify(token, secret);
  const user_id = payload.subject;

//recherche via id **
 User.findById(user_id, (err, user) =>{
  let commentForm = req.body;
   if(err) console.log(err)
  // console.log(user)
   commentForm.author= user.first_name +' '+ user.last_name;
   commentForm.user_id=payload.subject;

   let comment= new Comment(commentForm);

   if(comment){
     comment.save((err, commentData) =>{
       if(err){
         console.log(err)
       }
       console.log('Commentaire sauvegardé : ',commentData)
       res.status(200).send({commentData})

     })
   }

 })

})


router.get('/comments', (req,res) => {
  Comment.find({},null,{sort:{date: -1}},(err, comments)=>{
    if(err) throw err;
    //console.log(comments);
    res.status(200).send({comments})
  })

})

router.post('/member',veriFyToken, (req,res)=> {
  let key = req.body.name
  User.find({email:key},(err, data) =>{
    if(err) throw err;
    if(data.length>0){
      console.log(data);
      res.json(data)
    }else {
      console.log(data);
     res.json({message:'pas de membre trouvé avec cette adresse email'})
    }
     
  })
 
})


module.exports= router;
