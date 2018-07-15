import { Component, OnInit } from '@angular/core';
import { AuthService} from '../auth.service';
import { Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';

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

  constructor(private authService: AuthService, private _router: Router) {
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
            
            localStorage.setItem('token', res.token);
            this._router.navigate(['/userdata']);
          }

        }
      );

  }

}
