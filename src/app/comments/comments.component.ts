import { Component, OnInit , EventEmitter,  Output, Input } from '@angular/core';
import {CommentService} from '../comment.service';
import {Router} from '@angular/router';
import { Comment } from '../models/comment';
import {AuthService} from '../auth.service';
import {User} from "../models/user";


@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  commentsArray: Array<Comment>= [];
  comment:Comment ={
    title: '',
 author: '',
 content: '',
 date:null,
 authorId: '',
 authorPicture:'',
 explicit: false

  }
  constructor(private auth: AuthService, private  commentService: CommentService) {
    this.commentService.onBegin()
    .subscribe();
    this.commentService.onPosted()
    .subscribe(data => this.commentsArray.splice(0,0,data)
    );
  }

  ngOnInit() {
    this.auth.getData().subscribe(
      res =>{
        this.comment.authorId= res.user._id;
        this.comment.author = res.user.first_name + ' ' +res.user.last_name;
        this.comment.authorPicture = res.user.picture;
        console.log(this.comment )
      }
    )
    this.commentService.getComments().subscribe(
      res => {
        this.commentsArray=res.comments;
        console.log('Les commentaires en base',this.commentsArray);
        
      }
      
    )
   
}

posted() {
  this.comment.date=new Date();
  this.commentService.postMessage(this.comment)
}



}
