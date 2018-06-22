import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { CommentService } from '../comment.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isMember = false;
  comments: {};
  isPosted = false;
  constructor(private auth: AuthService, private commentService: CommentService) { }

  ngOnInit() {

    this.commentService.comments;
    console.log('le message ',this.commentService.comments);
      this.getComments();
    if (this.auth.loggedIn()) {
      this.isMember = true;
    }

}

getComments() {
  this.commentService.getComments()
  .subscribe(
    res => {
      this.comments = res.comments;
    }
  );
  return this.comments;
}

onPostedEvent(event: boolean) {
  console.log('*************', event);
  this.isPosted = event;
  if (this.isPosted) {
    console.log('$$$', this.isPosted);
    this.commentService.getComments();
  }

  }

}

