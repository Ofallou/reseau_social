import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';



@Injectable()
export class AuthService {
  user = {
    email : '',
    password : ''
  };
  private _registerURL = 'http://localhost:3000/api/register';
  private _loginURL = 'http://localhost:3000/api/login';
  private _userdataURL = 'http://localhost:3000/api/userdata';
  private _lostPassword = 'http://localhost:3000/api/lostpwd';

  constructor(private http: HttpClient, private _router: Router) {}
  registerUser(user) {
    return this.http.post<any>(this._registerURL, user);
  }

  loginUser(user) {
    return this.http.post<any>(this._loginURL, user);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  logoutUser() {
    localStorage.removeItem('token');
    this._router.navigate(['/login']);
  }

  loggedIn() {
    return !!localStorage.getItem('token');
  }
  lostPassword(_email) {
    return this.http.post<any>(this._lostPassword, _email);
  }

  getData() {
    return this.http.get<any>(this._userdataURL);
  }



}

