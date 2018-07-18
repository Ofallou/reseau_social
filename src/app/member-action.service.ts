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
  private _addFriendUrl= this.url+'/api/addfriend';

  private socket = io(Config.SOCKET_HOST);
  
  constructor(private http:HttpClient) { }
   
/*   onSearch(){
    let observable= new Observable<any>
    (observer => {
      this.socket.on('find',(data)=> {
        observer.next(data);
      });
      return () => {
        this.socket.disconnect();
      }
     
    })
    return observable;
  } */

  searchResult(keyword) {
    return this.http.post<any>(this._findMember, keyword);
  }


  add_friend (member){
    
    console.log('******************',member)
    
        return this.http.post<any>(this._addFriendUrl, member)
  }
}
