import { Component, OnInit } from '@angular/core';
import { AuthService} from '../auth.service';
import { Router } from '@angular/router';
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
 errorMessage = '';
  constructor(private authService: AuthService, private _router: Router) {}

  ngOnInit() {
  if (this.authService.getToken()) {
  this._router.navigate(['/home']);
}
  }

  onLogin() {

    this.authService.loginUser(this.userData)
    .subscribe(
      res => {
        if (res.message || res.err) {
          this.errorMessage = 'Identifiant ou mot de passe invalide';
          console.log(this.errorMessage);
          this.userData.email = '';
          this.userData.password = '';
        } else {

          localStorage.setItem('token', res.token);
          this._router.navigate(['/home']);
        }

      }
    );

  }

}
