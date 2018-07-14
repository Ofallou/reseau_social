const nodemailer =  require ('nodemailer');

module.exports  = sentPassword =  (email, password, first_name, new_password)=>{
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
        html:"<html>"+
             "<h6>Bonjour "+first_name+"<h6>"+
             "<p>Veuillez trouver ci-dessous votre nouveau mot de passe:  </p> <strong>"+ new_password +"</strong>"+
             "<br> Une fois connecté à votre espace vous pourrez le modifier. "+
             "<a href='https://dry-fortress-71234.herokuapp.com/login'>Se connecter </a>"+
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
  