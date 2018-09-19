const nodemailer =  require ('nodemailer');

module.exports  = sendFriendRequestNotification =  (email2,last_name2)=>{
    nodemailer.createTestAccount((err, account) => {
      let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
          user: 'ofallou@gmail.com',
          pass:'oumar1971'
        }
      });
      let mailOptions = {
        from:'"Socialbook"<admin@socialbook.fr>',
        subject:"Demande d'amis",
        to:email2,
        replyTo:"noreply",
        text:'test from nodemail',
        html:"<html>"+
             "<h6>Bonjour "+last_name2+"<h6>"+
             "<p> Une demande d'amis vient de vous etre envoyer.</p>"+
             "<br>Connectez vous à votre espace pour y repondre. "+
             "<a href='https://dry-fortress-71234.herokuapp.com/'>Se connecter </a>"+
             "<br> Cordialement, SocialBook</html>"
            
      };
      transporter.sendMail(mailOptions, (error, info) => {
           if(error){
             return {result: error}
           }
           return  {result : info.messageId}
      })
    });
  
  }
  