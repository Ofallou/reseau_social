import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, identity } from 'rxjs';
import { Config } from './config';
import * as io from 'socket.io-client';

@Injectable()
export class MemberActionService {
  member = {
    _id:'',
    email : '',
    password : ''
  };
 
  url = Config.SOCKET_HOST || "http://localhost";
  private _findMember = this.url+'/api/member';
private _getMemberById=this.url+'/api/memberbyid'
  private _addFriendUrl= this.url+'/api/addfriend';
  private _acceptInvitationUrl=this.url+'/api/acceptInvitation'
  private _updateInvitationUrl=this.url+'/api/updateInvitation'
private _cancelRequestUrl = this.url+'/api/cancelRequest'
  private socket = io(Config.SOCKET_HOST);
  
  constructor(private http:HttpClient) { }
 

  searchResult(keyword) {
    return this.http.post<any>(this._findMember, keyword);
  }


  add_friend (member, user){
        return this.http.post<any>(this._addFriendUrl, {member:member, user:user})
  }

  onRequestInvitation(){

    let observable = new Observable<any>
    (observer => {
      this.socket.on('invitation:res', (data ) => {
        observer.next(data);
      });
      return () => {this.socket.disconnect();};
    })
    return observable;
   }
  
   requestInvitation(data){
     this.socket.emit('invitation:send', data)
   }

  


  cancelInvitationrequest(id){
    return this.http.post<any>(this._cancelRequestUrl, id)
  }

  acceptInvitation(member, user){

    return this.http.post<any>(this._acceptInvitationUrl, {member:member, user:user})
  }
  updateInvitation(member, user){

    return this.http.post<any>(this._updateInvitationUrl, {member:member, user:user})
  }

  getMemberById(id){
    return this.http.post<any>(this._getMemberById, id)
  }
}
