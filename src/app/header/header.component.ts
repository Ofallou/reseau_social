import { Component, OnInit } from '@angular/core';
import {AuthService} from "../auth.service";
import { CommentService } from '../comment.service';
import { User } from '../models/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isAuth = false;
  title = 'app';
  user = {
    first_name :'',
    last_name:'',
    email:'',
    picture:''

  };

  
  constructor( private authService: AuthService, private com: CommentService) {}
  getUserState() {
    this.isAuth = !!this.authService.getToken();
    return this.isAuth;
  }
  ngOnInit() {
    this.getUserState()
    this.isLoged()
    console.log(this.isAuth)
   
  }
  logoutUser() {
    this.authService.logoutUser();
    this.isAuth =false;
    this.com.onLeave();
    console.log('leave ??')
  }

 isLoged(){
   if(this.isAuth){

    this.authService.getData()
    .subscribe(
      res => {console.log(res)
      this.user = res.user;
      })
   }
 }
 

}
