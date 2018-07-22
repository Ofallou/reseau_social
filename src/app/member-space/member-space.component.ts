import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router'
import { AuthService } from '../auth.service';
import { CommentService } from '../comment.service';
import { User } from '../models/user';
import { Comment } from '../models/comment';

@Component({
  selector: 'app-member-space',
  templateUrl: './member-space.component.html',
  styleUrls: ['./member-space.component.css']
})
export class MemberSpaceComponent implements OnInit {
 member_id;
 comment: Comment ={
  title: '',
author: '',
content: '',
date:null,
authorId: '',
authorPicture:'',
explicit: false

}
 user : User = {
   first_name:'',
   last_name:'',
   pseudo:'',
   email:'',
   admin:false,
   online:false,
   dateNaissance:new Date,
   gender:'',
   password:'',
   friendList:[],
   picture:''

 };
 userComment;
  constructor( private activatedRouter: ActivatedRoute,private commentService:CommentService, private router:Router,private authService: AuthService) { }

  ngOnInit() {

    this.member_id=this.activatedRouter.snapshot.paramMap.get('id');
    console.log(this.member_id);

    this.authService.memberSpace(this.member_id)
    .subscribe(
      res => {
        console.log('membre', res)
        if(res.user===undefined){
          this.router.navigate(['/notFound'])
        }else {
          //this.router.navigate(['/userdata'])
        
          this.user=res.user;

          this.comment.author=this.user.first_name + ' ' +this.user.last_name;
          this.comment.authorId=this.member_id
          this.comment.authorPicture = this.user.picture;

        }
      }
    )
   
    this.commentService.getMemberComments(this.member_id)
    .subscribe(
      res => {
        console.log(res)
        this.userComment= res.comments
      }
    )

  }


  posted() {
    this.comment.date=new Date();
    this.commentService.postMessage(this.comment)
    
  }

}
