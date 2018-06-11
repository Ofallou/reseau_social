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
  constructor(private auth: AuthService, private _comments: CommentService) { }

  ngOnInit() {
    this.getComments();
    if (this.auth.loggedIn()) {
      this.isMember = true;
    }
    console.log(this.isMember);
}


getComments() {
  this._comments.getComments()
  .subscribe(
    res => {
      this.comments = res.comments;
    }
  );
}

}

