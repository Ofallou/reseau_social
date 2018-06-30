import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { CommentService } from '../comment.service';
import { Comment } from '../models/comment';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isMember = false;
  message :String;
  comment:Comment ={
    title: '',
 author: '',
 content: '',
 date:null,
 authorId: '',
 explicit: false

  }

commentsArray: Array<Comment>= [];
  constructor(private auth: AuthService, private  commentService: CommentService) {
   
  
    this.commentService.onBegin()
    .subscribe(

    );

    this.commentService.onPosted()
    .subscribe(data => this.commentsArray.push(data)
    );
      
        console.log(this.commentsArray)
  }

  ngOnInit() {
    if (this.auth.loggedIn()) {
      this.isMember = true;
    }
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

getMessages(){
  this.commentService.onBegin()
    .subscribe(data => this.message
    );
}

}

