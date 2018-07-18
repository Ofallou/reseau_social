const nodemailer =  require ('nodemailer');

module.exports  = register =  (first_name, email)=>{
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
        subject:'Inscription sur SocialBook',
        to:email,
        replyTo:'ofbk@hotmail.fr',
        
        html:"<html>"+
             "<h6>Bonjour "+first_name+"<h6>"+
             "<p>Merci pour votre inscription.  </p> "+
             "<br> Vous pouvez maintenant poster des messages, inviter des amis et chater"+
             "<a href='https://dry-fortress-71234.herokuapp.com/'>Socialbook </a>"+
             "<br> Cordialement,</html>"
               
      };
      transporter.sendMail(mailOptions, (error, info) => {
           if(error){
             return console.log(error)
           }
           console.log('Message sent : %s', info.messageId)
      })
    });
  
  }