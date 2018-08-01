import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointState, BreakpointObserver } from '@angular/cdk/layout';
import { AuthService } from '../auth.service';
import { CommentService } from '../comment.service';
import { Router } from '@angular/router';
import { User } from '../models/user';

@Component({
  selector: 'admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent {
  commentsArray: Array<Comment>= [];
  membersArray:Array<User>= [];
  currentUser;
  user: User= {
    _id: '',
    first_name: '',
    last_name: '',
    pseudo: '',
    email: '',
    admin: false,
    online: false,
    dateNaissance: new Date,
    gender: '',
    password: '',
    friendsList: [
      { status: "", friendId: "" }
    ],
    picture: ''

  };;
  constructor(private authService: AuthService, private commentService: CommentService, private  _router: Router) {
    this.authService.getData().subscribe
    (res => this.user=res.user)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
    this.authService.onOnlineEvent().subscribe(
      online=> console.log(online.pseudo)                                    
    )
  this.commentService.onBegin().subscribe(
    online2=> console.log('ki est online', online2)
  )
    
  }

  ngOnInit() {
  
  


    this.authService.getAllMembers().subscribe(
      res => {
        //console.log(res)
        this.membersArray =res
      }
    
    )

  this.authService.getData().subscribe(
    res => {
      this.currentUser = res.user
      console.log(this.currentUser)

    }
  )

    this.commentService.getComments().subscribe(
      res => {
        this.commentsArray=res.comments;
        console.log('stats',this.commentsArray);
        
      }
      
    )

    this.commentService.isConnected().subscribe(
      res => console.log('le rest', res)
    )

    
      
  }
  


 
}
