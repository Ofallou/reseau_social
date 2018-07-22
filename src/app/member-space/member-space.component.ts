import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router'
import { AuthService } from '../auth.service';
import { CommentService } from '../comment.service';
import { User } from '../models/user';
import { Comment } from '../models/comment';
import { MemberActionService } from '../member-action.service';

@Component({
  selector: 'app-member-space',
  templateUrl: './member-space.component.html',
  styleUrls: ['./member-space.component.css']
})
export class MemberSpaceComponent implements OnInit {
 member_id;
 step=0;
keyword = {
  name:''
};
resultList:any[];
messageErreur;

 comment: Comment ={
  title: '',
author: '',
content: '',
date:null,
authorId: '',
authorPicture:'',
explicit: false

}

allMembers;

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
   friendsList:[],
   picture:''

 };

 friends;
 userPicture:String;
 userComment;
  constructor( 
    private activatedRouter: ActivatedRoute,
    private commentService:CommentService, 
    private router:Router,private authService: AuthService,
    private memberActionService: MemberActionService
  ) {

    this.commentService.onPosted()
    .subscribe(data => {
      this.userComment.splice(0,0,data)
      console.log("Apres ajout",this.userComment)
    }
    );

    this.authService.getAllMembers()
    .subscribe(
      res => this.allMembers =res.members
    )

   }

  ngOnInit() {

   
   
    this.activatedRouter.paramMap.subscribe(
      params => {
          this.member_id =params.get('id')
          console.log(this.member_id);


          this.commentService.getMemberComments(this.member_id)
    .subscribe(
      res => {
        console.log(res)
        this.userComment= res.comments
      }
    )

     
          this.authService.memberSpace(this.member_id)
          .subscribe(
            res => {
              console.log('membre', res)
              if(res.user===undefined){
                this.router.navigate(['/notFound'])
              }else {
                //this.router.navigate(['/userdata'])
                console.log(res.user)
                this.user=res.user;
                this.user.friendsList=res.user.friendsList;
                console.log(this.user.friendsList)

                this.authService.getData().subscribe(
                  res=> {
                    this.comment.author=res.user.first_name + ' ' +res.user.last_name;
                    this.comment.authorId=res.user_id
                    this.comment.authorPicture = res.user.picture;
                  }
                )
                
/*                 this.comment.author=this.user.first_name + ' ' +this.user.last_name;
                this.comment.authorId=this.member_id
                this.comment.authorPicture = this.user.picture; */
      
              }
            }
          )

      }
    )
   
    

   
    
    

  }

  friendList (){
    this.user.friendsList.forEach(element => {

      this.authService.memberSpace(element).subscribe(
        res => console.log('La liste de mùes amissss',res.user)
      )
      
      
    });
  }


  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }


  posted() {
    this.comment.date=new Date();
    this.commentService.postMessage(this.comment)
    
  }


  searchfriend(){
    console.log(this.keyword)
    this.memberActionService.searchResult(this.keyword)
    .subscribe(
      res => {
        //Liste non vide..
        if(res.length>0){
          this.resultList = res;
          console.log('liste amis trouvé : ',this.resultList);
        }else {
          console.log(res.message)
          this.messageErreur=res.message

        }        
        
          
      })
    
  }

  onSelect(member){

    this.router.navigate(['/member_space', member._id])
  
  }


  sendInvitationrequest() {
    this.memberActionService.add_friend(this.resultList[0])
    .subscribe(
      res => {
        if(res.succes){
          
          this.user.friendsList.splice(0,0,this.resultList[0])
          //this.user.friendList = this.friends;
          console.log('Contenu d',this.user.friendsList)

          this.authService.updateUser(this.user).subscribe(
            res=> console.log(res)
          )

        }
      }) 
  }

}
