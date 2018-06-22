import { Component, OnInit , EventEmitter, Input, Output } from '@angular/core';
import {CommentService} from '../comment.service';
import {Router} from '@angular/router';
import { User } from '../models/user';
import { Comment } from '../models/comment';
import {AuthService} from '../auth.service';
import { WebsocketService } from '../websocket.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  @Input() user: User;
 comment: Comment;
 @Output() notify: EventEmitter<boolean> = new EventEmitter<boolean>();


  // tslint:disable-next-line:max-line-length
  constructor(private commentService: CommentService, private _router: Router, private authService: AuthService, private socket: WebsocketService) {
    this.comment = new Comment({
      content: '',
      title: '',
      author:''

    });
  }


  ngOnInit() {

  }

posted() {
  this.notify.emit(true);
}

  addComment() {
     this.commentService.postComment(this.comment)
       .subscribe(
         res => {
           this._router.navigate(['/home']);
         });
  }


  sendMessage() {
    console.log(this.user);
    this.comment.author = this.user.first_name;
    this.commentService.sendMsg(this.comment);
    this.addComment();
  }
}
