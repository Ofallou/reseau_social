import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import * as io from 'socket.io-client';
import { Observable, Subject} from 'rxjs';
import { Config } from './config'
import { environment } from '../environments/environment';
import { User } from './models/user';

@Injectable()
export class CommentService  {
  url = Config.SOCKET_HOST || "http://localhost";
  private _postCommentUrl = this.url+'/api/post_comment';
  //For each member's space
  private _getCommentPostedUrl =this.url+'/api/get_member_comments';
  //Admin & stats
  private _getAllUserCommentsUrl = this.url+'/api/comments';
  private socket = io(Config.SOCKET_HOST);
  message:any;
  constructor(private http: HttpClient, private _router: Router) {}
  
  onBegin() {
    let observable = new Observable<{message:String}>
    (observer => {
      this.socket.on('user join', (data) => {
        observer.next(data);
      }
        
    );

      return () => {this.socket.disconnect();};
    });
    return observable;
  }



  onPosted() {
    let observable = new Observable<any>
    (observer => {
      this.socket.on('message', (data) => {
        observer.next(data);
      });
      return () => {this.socket.disconnect();};
    });
    return observable;
  }

 isConnected(){
  let observable = new Observable<any>
  (observer => {
    this.socket.on('isconnected', (data) => {
      observer.next(data);
    });
    return () => {this.socket.disconnect();};
  });
  return observable;
 }



openChat(data){
  this.socket.emit('join', data)
}

  onLogin(data) {
    this.socket.emit('login', data)
  }

getMemberComments (pseudo){
  return this.http.get<any>(this._getCommentPostedUrl+'/'+pseudo ,{params:pseudo})
}
 
postMessage(data) {
  this.socket.emit('posted', data)
  this.postComment(data).subscribe();
}

getAllMember() {
  let observable= new Observable<any>
  (observer => {
    this.socket.on('allmember',(data)=> {
      observer.next(data);
    })
    return () => {this.socket.disconnect();};
  })
  return observable;
}


postComment(comment) {
  return this.http.post<any>(this._postCommentUrl, comment);
} 

getComments() {
  return this.http.get<any>(this._getAllUserCommentsUrl);
}



}


