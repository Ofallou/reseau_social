import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import {Config} from './config'



@Injectable()
export class AuthService {
  user = {
    email : '',
    password : ''
  };
  url = Config.SOCKET_HOST;
  private _registerURL = this.url + '/api/register';
  private _loginURL = this.url + '/api/login';
  private _userdataURL = this.url + '/api/userdata';
  private _lostPassword = this.url + '/api/lostpwd';
  private _home = this.url + '/api/';

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

  home() {
    return this.http.get<any>(this._home);
  }

}
