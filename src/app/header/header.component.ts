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
    pseudo:'',
    email:'',
    picture:'',
    admin:false,
    online:false,

  };

  membersOnlines=[];
  constructor( private authService: AuthService) {

    this.getUserState()
    
    console.log(this.isAuth)
  if(this.isAuth){
    
    this.authService.getData()
    .subscribe(
      res => {//console.log('////',res)
      this.user = res.user;
      this.userid=res.user._id
      this.user.online=true
      this.authService.iamOnline(this.user)
      this.authService.updateUserStatus(this.user)

      this.authService.onOnlineEvent().subscribe
      (online  => {
        this.membersOnlines.push(online)
      }
    )
    
      })
  }
  
  this.authService.onOfflineEvent().subscribe(
    offline=> console.log('offline: => ',offline)
  )
  
  }
 
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
    this.authService.logoutUser();
    this.authService.iamOffline(this.user)
    this.isAuth =false;
    this.user.online=false
    this.authService.updateUserStatus(this.user)
    
    
    }

 

}
