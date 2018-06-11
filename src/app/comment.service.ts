import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';

@Injectable()
export class CommentService {
  private _postCommentUrl = 'http://localhost:3000/api/post_comment';
  private _getUserCommentsUrl = 'http://localhost:3000/api/comments';


  constructor(private http: HttpClient, private _router: Router) { }

  postComment(comment) {
    return this.http.post<any>(this._postCommentUrl, comment);
  }

 getComments() {
    return this.http.get<any>(this._getUserCommentsUrl);
  }
}
