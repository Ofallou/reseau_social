import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { Router } from '@angular/router';
import { AuthService} from '../auth.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],


})
export class RegisterComponent implements OnInit {
   public user: User;

  constructor( private authService: AuthService, private _router: Router) {
    this.user = new User ({first_name: '',
    last_name: '',
    email: '',
    gender: '',
    password: '',
    pseudo: ''});
  }

  ngOnInit() {
  }

  registerUser() {
    this.authService.registerUser(this.user)
    .subscribe(
      res => {
        localStorage.setItem('token', res.token );
        this._router.navigate(['/userdata']);
      }
    );
   // console.log(this.user);
   // console.log('+++++' + this.userService.setUserData(this.user));
  }

}
