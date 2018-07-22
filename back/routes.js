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
const Comment = require ('./models/comment.js');
const SentPassword = require ('./mails/sendPassword.js');
const SendNotificationFriendRequest = require ('./mails/sendNotifications')
const Register =  require ('./mails/register.js');
const FriendRequest =  require('./member/member_request.js')



//Mongodb
const db="mongodb://ofallou:meissa71@ds249079.mlab.com:49079/reseau_social";

const secret='RffrtejksizikskiksizkskizkskkzikskskksMpp';

const myPassword= 'meissa71'
const saltRounds = 10;

/*

 LOGIN AND REGISTER SECTION

*/

//To be sure to have current member ..
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





//check if the pseudo is available
router.post('/checkPseudo', (req,res) => {
let myPseudo = req.body.pseudo;
User.findOne({pseudo:myPseudo}, (err,data)=> {
  if(err)console.log(err);
  if(data!==null){
    res.json({error:"pseudo non disponible"})
  }else {
    res.json({message:"Le pseudo est disponible"})
  }
})

})
//like the pseudo check if email is already registered
router.post('/checkEmail', (req,res)=> {
  let myEmail = req.body.email;
  User.findOne({email:myEmail},(err, data)=>{
    if(err)console.log(err);
    console.log(data)
    if(data!== null){
      
      res.json({error:"Email déjà associé à un compte."})
    }else {
      res.json({Message:"Email disponible."})
     
    }
  })

})


// Enregistrement de l'utilisateur
router.post('/register',  (req, res) => {
  let userdata= req.body;
  let user = new User(userdata);
  
   User.findOne({email:req.body.email},(err,data) => {
    if(data){

      res.json({message:'Un compte avec cette adresse email existe déjà, Merci de recuperer le mot de passe associé'})
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
         res.json({success: true, token : token, user: data})

       }else {
        res.json({err: 'Mot de passe Invalide'})       }

     }
   }

  });
});





router.get('/get_member_comments/:id', (req,res) => {
  let userId= req.params.id
  Comment.find({authorId:userId},null,{sort:{date: -1}}, (err,comments)=>{
    if(err) throw err;
    res.status('200').send({comments});
  })
})




// Recup des infos utilisateurs (membres)
router.get('/userdata',veriFyToken ,(req, res) => {
   let name=  req.params.name
  User.findOne({_id:currentUserId}, (err, user)=>{
    if(!err){
      res.status('200').send({user: user})
    }else {
      res.status('404').send({error:err})
    }
  })

})


router.get('/',(req, res) => {

res.send({message: 'connecté'})

})



// Mise a jour des données )
router.put('/update',veriFyToken, (req,res)=> {
 console.log('test update',req.body.friendsList)
 let userdata=req.body;
 User.findOneAndUpdate({_id:userdata._id},{$set:{friendsList:userdata.friendsList}},(err,data)=>{

  console.log(data)

  if(err){
    console.log(err)
  }else {
    res.json({data: data})
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


router.get('/getAllMembers', (req,res) => {
  User.find({}, (err, members)=> {
    if(err) throw err;
    res.status('200').send({members})

  })
})
//recherche de membre
router.post('/member',veriFyToken, (req,res)=> {

   //find if email request exist
   console.log(req.body);
   let key = req.body.name;
   User.find({ $or: [{pseudo:key},{email:key},{last_name:key}, {first_name: key}]} ,(err, data) =>{
     if(err) throw err;
     if(data.length>0){
       console.log('demande de friend',data)
       res.json(data)
     }else {
       console.log(data);
      res.json({message:'Aucun membre trouvé'})
     }
      
   })
})

router.get('/member_space/:id',(req,res) =>{
  
  let memberId=req.params.id
  User.findOne({_id:memberId}, (err, user)=>{
    if(err){
      console.log(err.reason)
      res.status('200').send({error: err})
    }else {
      res.status('200').send({user: user})
    }
  })
   

})


/* router.get('/memberbyId/:id',(req,res)=>{

  let memberId=req.params.id
  User.findOne({_id:memberId}, (err, user)=>{
    if(err){
      console.log(err.reason)
      res.status('200').send({error: err})
    }else {
      res.status('200').send({user: user})
    }
  })

}) */

//Ajouter un amis
router.post('/addfriend', (req,res) => {
  var member= req.body
  SendNotificationFriendRequest(member.email,member.last_name); 
  console.log(member.email)
  res.json({response:"Demande d'ajout d'amis envoyé a "+member.last_name+ " "+member.first_name, succes:true})



})





module.exports= router;
