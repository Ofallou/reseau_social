import { Component, OnInit } from '@angular/core';
import {AuthService} from "../auth.service";
import { CommentService } from '../comment.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isAuth = false;
  title = 'app';
  constructor( private authService: AuthService, private com: CommentService) {}
  getUserState() {
    this.isAuth = !!this.authService.getToken();
    return this.isAuth;
  }
  ngOnInit() {
   
  }
  logoutUser() {
    this.authService.logoutUser();
    this.com.onLeave();
    console.log('leave ??')
  }

 
 

}
