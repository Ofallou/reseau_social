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
 userid;
  isAuth = false;
  title = 'app';
  user = {
    first_name :'',
    last_name:'',
    email:'',
    picture:'',
    admin:false,
    online:false,

  };

  
  constructor( private authService: AuthService) {}
 
  ngOnInit() {

    this.getUserState()
    //console.log(this.isAuth)
  if(this.isAuth){
    this.authService.getData()
    .subscribe(
      res => {//console.log('////',res)
      this.user = res.user;
      this.userid=res.user._id
      })
  }
    
  }



  getUserState() {
    this.isAuth = !!this.authService.getToken();
    return this.isAuth;
  }

  logoutUser() {
    this.authService.onLeave()
    this.authService.logoutUser();
    this.isAuth =false;
    
    }

 

}
