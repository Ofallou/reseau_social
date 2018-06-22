import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { HttpInterceptor} from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService} from '../auth.service';
import {CommentService} from '../comment.service';
import { WebsocketService } from '../websocket.service';


@Component({
  selector: 'app-userdata',
  templateUrl: './userdata.component.html',
  styleUrls: ['./userdata.component.css']
})
export class UserdataComponent implements OnInit {
   user = {};
  constructor(private authService: AuthService, private commentService: CommentService) {}

  ngOnInit() {
    this.commentService.comments.subscribe(
      msg => {
        console.log(msg);
      });
    this.getUserdata();

  }

   getUserdata() {
     this.authService.getData()
     .subscribe(
       res => {
          this.user = res.user;
          console.log(res.user);
          return this.user;
       }
     );
   }


}



