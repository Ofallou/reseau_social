import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';
import { Observable, Subject} from 'rxjs/Rx';
import { WebsocketService } from './websocket.service';

@Injectable()
export class CommentService {
  private _postCommentUrl = 'http://localhost:3000/api/post_comment';
  private _getUserCommentsUrl = 'http://localhost:3000/api/comments';
  comments: Subject<any>;


  constructor(private http: HttpClient, private _router: Router, private wsService: WebsocketService) {

    this.comments = <Subject<any>>wsService
    .connect()
    .map((response: any): any => {
      return response;
    });
  }

  sendMsg(message) {
    this.comments.next(message);
  }

  postComment(comment) {
    return this.http.post<any>(this._postCommentUrl, comment);
  }

 getComments() {
    return this.http.get<any>(this._getUserCommentsUrl);
  }
}
