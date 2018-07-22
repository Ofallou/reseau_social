import { Component, OnInit } from '@angular/core';
import { CommentService } from '../comment.service';
import { AuthService } from '../auth.service';
import { User } from '../models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {
  commentsArray: Array<Comment>= [];
  membersArray:Array<User>= [];
  currentUser;
  constructor(private commentService: CommentService, private authService: AuthService, private router:Router) { 
    this.commentService.onBegin()
    .subscribe(
      res => console.log(res)
    );
     this.commentService.onPosted()
    .subscribe(data => {
      this.commentsArray.splice(0,0,data)
     // console.log("Apres ajout",this.commentsArray)
    }
    ); 

  }

  ngOnInit() {

    this.authService.getAllMembers().subscribe(
      res => {
        console.log(res.members)
        this.membersArray =res.members
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

  }

onSelect(member){

  this.router.navigate(['/member_space', member._id])

}
  

}
