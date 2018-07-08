import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Config } from './config';
import * as io from 'socket.io-client';

@Injectable()
export class MemberActionService {
  private _findMember = 'http://localhost:5000/api/member';
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
}
