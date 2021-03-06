import { Component, OnInit } from '@angular/core';
import { AuthService} from '../auth.service';
import { Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';
import { CommentService } from '../comment.service';
import { User } from '../models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
/*   userData = {
    _id:'',
    email:'',
    pseudo:'',
    password:'',
    admin:false,
    online:false,
  }; */


  userData: User = {
    _id: '',
    first_name: '',
    last_name: '',
    pseudo: '',
    email: '',
    admin: false,
    online: false,
    dateNaissance: new Date,
    gender: '',
    password: '',
    friendsList: [
      { status: "", friendId: "" }
    ],
    picture: ''

  };
  


  email = new FormControl('', [Validators.required, Validators.email]);

  errorMessage = '';
  hide = true;

  constructor(private authService: AuthService, private _router: Router,private commentService: CommentService) {


  
  }

  ngOnInit() {


  }

 

  getErrorMessage() {
    return this.email.hasError('required') ? 'Le champs doit etre rempli' :
        this.email.hasError('email') ? "Le format de l'adresse Email est invalide" :
            '';
  }
  onLogin() {
   

    this.authService.loginUser(this.userData)
      .subscribe(
        res => {
          if (res.message || res.err) {
            if(res.message === undefined) this.errorMessage = res.err;
            if(res.err=== undefined ) this.errorMessage = res.message;
            this.userData.pseudo =null;
            this.userData.password = null;
            
           
          } else {
        

            this.commentService.onLogin(this.userData.pseudo);

            localStorage.setItem('token', res.token);
            this.authService.getData().subscribe(
              res => {
                this.userData = res.user;
                console.log('**/***/***/', this.userData._id)

                if(this.userData.admin){
                  this._router.navigate(['/admin']);
                }else {
                  this.userData.online= true;
                  this.authService.updateUser(this.userData)
                  this._router.navigate(['/member_space', this.userData.pseudo]);

                }
              }

            )
           
            
          }

        }
      );

      

  }

}
