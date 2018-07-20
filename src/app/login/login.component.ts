import { Component, OnInit } from '@angular/core';
import { AuthService} from '../auth.service';
import { Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';
import { CommentService } from '../comment.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userData = {
    email: '',
    password: ''
  };


  email = new FormControl('', [Validators.required, Validators.email]);

  errorMessage = '';
  hide = true;

  constructor(private authService: AuthService, private _router: Router,private commentService: CommentService) {
  }

  ngOnInit() {
    if (this.authService.getToken()) {
      this._router.navigate(['/home']);
    }


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
            this.userData.email =null;
            this.userData.password = null;
            
           
          } else {

            

            this.commentService.onLogin(this.userData.email);

            localStorage.setItem('token', res.token);
            this.authService.getData().subscribe(
              res => {
                this.userData = res.user;
                console.log('**/***/***/', this.userData)
              }
            )
            this._router.navigate(['/userdata']);
          }

        }
      );

      

  }

}
