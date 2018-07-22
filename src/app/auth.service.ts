import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import {Config} from './config'
import { Observable } from 'rxjs';
import * as io from 'socket.io-client';




@Injectable()
export class AuthService {
  user = {
    _id:'',
    email : '',
    pseudo:'',
    password : '',
    admin:false,
    online:false,
  };

  private socket = io(Config.SOCKET_HOST);
  userConnected: number=0;
  _id:String
  url = Config.SOCKET_HOST || "http://localhost";
  private _registerURL = this.url + '/api/register';
  private _checkPseudoURL = this.url + '/api/checkPseudo';
  private _checkEmailURL = this.url + '/api/checkEmail';
  private _loginURL = this.url + '/api/login';
  private _userdataURL = this.url + '/api/userdata';
  private _lostPassword = this.url + '/api/lostpwd';
  private _home = this.url + '/api/';
  private _admin = this.url + '/api/admin';
  private _updateUser= this.url+'/api/update';
  private _getAllMembers= this.url+'/api/getAllMembers'
  private _memberUrl = this.url+'/api/member_space'
  connected: number=0;
   
  constructor(private http: HttpClient, private _router: Router) {}

  checkPseudo(user){
    return this.http.post<any>(this._checkPseudoURL, user);
  }

  checkEmail(user){
    return this.http.post<any>(this._checkEmailURL, user);

  }
  registerUser(user) {
    return this.http.post<any>(this._registerURL, user);
  }
  updateUser(user) {
    return this.http.put<any>(this._updateUser, user);
  }
  loginUser(user) {
    return this.http.post<any>(this._loginURL, user);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  logoutUser() {
    
    localStorage.removeItem('token');
    //this._router.navigate(['/home']);
  }

  loggedIn() {
    
    return !!localStorage.getItem('token');
  }



  lostPassword(_email) {
    return this.http.post<any>(this._lostPassword, _email);
  }

  isAdmin(){
    return true;
  }
 
  getData() {
    return this.http.get<any>(this._userdataURL);
  }

  admin() {
    return this.http.get<any>(this._admin);
  }
  home() {
    return this.http.get<any>(this._home);
  }
  getAllMembers(){
    return this.http.get<any>(this._getAllMembers);
  }
  
  onLeave() {
    this.socket.emit('disconnect')
    console.log(this.socket.id)
    }
    
  memberSpace(id){
   
    return this.http.get<any>(this._memberUrl+'/'+id, {params:id})
  }

}
