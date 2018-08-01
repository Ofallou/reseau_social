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
  private _updateUserSatus= this.url+'/api/updatestatut';
  private _getAllMembers= this.url+'/api/getAllMembers'
  private _memberUrl = this.url+'/api/member_space'
  connected: number=0;
   
  constructor(private http: HttpClient, private _router: Router) {}

  onOnlineEvent() {
    let observable = new Observable<any>
    (observer => {
      this.socket.on('iamOnline:res', (data) => {
        observer.next(data);
      });
      return () => {this.socket.disconnect();};
    });
    return observable;
  }

  onOfflineEvent() {
    let observable = new Observable<any>
    (observer => {
      this.socket.on('iamOffline:res', (data) => {
        observer.next(data);
      });
      return () => {this.socket.disconnect();};
    });
    return observable;
  }

  checkPseudo(user){
    return this.http.post<any>(this._checkPseudoURL, user);
  }
                                                                                                                                                        
  checkEmail(user){
    return this.http.post<any>(this._checkEmailURL, user);

  }
  registerUser(user) {
    return this.http.post<any>(this._registerURL, user);
  }
  updateUserStatus(user) {
    return this.http.put<any>(this._updateUserSatus, user);
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

  iamOnline(user){
    this.socket.emit('iamOnline', user)
    //this.postComment(data).subscribe();
  }

  iamOffline(user){
    this.socket.emit('iamOffline', user)
  }

  onLeave(user) {
    user.online=false;
    this.updateUser(user);
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
  
 
    
  memberSpace(pseudo){
   
    return this.http.get<any>(this._memberUrl+'/'+pseudo, {params:pseudo})
  }

}
