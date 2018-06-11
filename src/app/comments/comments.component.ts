import { Component, OnInit , EventEmitter, Input, Output } from '@angular/core';
import {CommentService} from '../comment.service';
import {Router} from '@angular/router';
import { User } from '../models/user';
import { Comment } from '../models/comment';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  @Input() user: User;
 comment: Comment;

  constructor(private commentService: CommentService, private _router: Router, private authService: AuthService) {
    this.comment = new Comment({
      content: '',
      title: '',
      author: '',

    });
  }



  ngOnInit() {

  }

  addComment() {
     this.commentService.postComment(this.comment)
       .subscribe(

         res => {
           this._router.navigate(['/home']);

         });
  }
}
