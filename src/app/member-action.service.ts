import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
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
private _cancelRequestUrl = this.url+'/api/cancelRequest'
  private socket = io(Config.SOCKET_HOST);
  
  constructor(private http:HttpClient) { }
 

  searchResult(keyword) {
    return this.http.post<any>(this._findMember, keyword);
  }


  add_friend (member){
        return this.http.post<any>(this._addFriendUrl, member)
  }

  cancelInvitationrequest(id){
    return this.http.post<any>(this._cancelRequestUrl, id)
  }

  acceptInvitation(member){

    return this.http.post<any>(this._acceptInvitationUrl, member)
  }


  getMemberById(id){
    return this.http.post<any>(this._getMemberById, id)
  }
}
