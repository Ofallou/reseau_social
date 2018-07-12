import {Component, OnInit, Output} from '@angular/core';
import { User } from '../models/user';
import { HttpInterceptor} from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService} from '../auth.service';
import {CommentService} from '../comment.service';
import { WebsocketService } from '../websocket.service';
import { subscribeOn } from 'rxjs/operators';


@Component({
  selector: 'app-userdata',
  templateUrl: './userdata.component.html',
  styleUrls: ['./userdata.component.css']
})
export class UserdataComponent implements OnInit {
userData =  User;
  constructor(private commentService: CommentService, private auth: AuthService  ) {
  }

  ngOnInit() {

    this.auth.getData()
    .subscribe(
      data => {
        this.userData =  data.user;
        console.log(this.userData)
      }
    )
    
  }

 

}
