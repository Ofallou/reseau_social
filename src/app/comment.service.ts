import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';
import * as io from 'socket.io-client';
import { Observable, Subject} from 'rxjs/Rx';
import { WebsocketService } from './websocket.service';
import {AuthService} from "./auth.service";
import { Component, OnInit } from '@angular/core';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Config } from '../app/config'

@Injectable()
export class CommentService  {
  private _postCommentUrl = 'http://localhost:3000/api/post_comment';
  private _getUserCommentsUrl = 'http://localhost:3000/api/comments';
  private socket = io(Config.SOCKET_HOST);
  message:any;
  constructor(private http: HttpClient, private _router: Router) {}
  
  onBegin() {
    let observable = new Observable<{message:String}>
    (observer => {
      this.socket.on('user join', (data) => {
        observer.next(data);
      });
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
 
postMessage(data) {
  this.socket.emit('posted', data)
  this.postComment(data).subscribe();
  
}

postComment(comment) {
  return this.http.post<any>(this._postCommentUrl, comment);
}

getComments() {
  return this.http.get<any>(this._getUserCommentsUrl);
}

}


