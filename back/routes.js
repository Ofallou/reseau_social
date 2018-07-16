const express = require ('express');
const router = express.Router();
const nodemailer =  require ('nodemailer');
const mongoose= require('mongoose');
const jwt = require('jsonwebtoken');
var gravatar = require('gravatar');
var generator = require ('generate-password');
var bcrypt = require('bcrypt')
//Models
const User = require ('./models/user.js');
const Comment = require ('./models/comment');
const SentPassword = require ('./mails/sendPassword')
const Register =  require ('./mails/register')


//Mongodb
const db="mongodb://ofallou:meissa71@ds249079.mlab.com:49079/reseau_social";

const secret='RffrtejksizikskiksizkskizkskkzikskskksMpp';

const myPassword= 'meissa71'
const saltRounds = 10;




var currentUserId;
function veriFyToken(req,res, next){
  if(!req.headers.authorization){
    return res.statut(401).send('invalide request')
  }
  // On recupere le token apres le terme beare
  const token= req.headers.authorization.split(' ')[1];
  if(token === 'null') {
    return res.send('invalide request ')
  }
  const payload = jwt.verify(token, secret);
  if(!payload){
    return res.statut(401).send('invalide request ')
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
       
      user.password= bcrypt.hashSync(user.password, saltRounds);
      user.save((err, dataUser)=>{
        if(err){
          console.log(err)
        }else {
          console.log(dataUser)
          Register(dataUser.first_name,dataUser.email)
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
          var pass=bcrypt.compareSync(req.body.password, data.password)
          console.log(pass)
       if(pass){
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
      res.status('200').send({user: user})
    }
  })

})

router.get('/',(req, res) => {

res.send({message: 'connecté'})

})


router.post('/update',veriFyToken, (req,res)=> {
 User.findById(req.body._id).exec((err,data) => {

  console.log('qui est data', data)

  if(JSON.stringify(data)=== JSON.stringify(req.body)){
     

    res.json('pas de changement');
    
  }else {

    User.update({_id: req.body._id}, {$set: {email: req.body.email, pseudo:req.body.pseudo}},
      (err,data) => {
        if(!err) {
          console.log( "Mise a jour effectuée ",data)
          res.json('Mise a jour ok !');
        } else {
          res.json('Mise a jour KO !!!! !');
          console.log(err)
        }
        
      })
  }

 })

 

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
        console.log("Info du user",data)
        var new_password = generator.generate({
          length:8,
          numbers:true
        });

        var new_password_crypt= bcrypt.hashSync(new_password, saltRounds);

        User.update({_id: data._id}, {$set: {password: new_password_crypt}}, (err, data) => {
          if(err) console.log(err);
          console.log('info mises a jours en base', data , new_password)
        })
        
        SentPassword(email,data.password, data.first_name,new_password);
      res.send({success:'Un nouveau mot de passe a été envoyé a votre adresse email, Merci de verifier votre boite aux lettres ainsi que le dossier spam !'});
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


router.post('/notification')


module.exports= router;
