import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router'
import { AuthService } from '../auth.service';
import { CommentService } from '../comment.service';
import { User } from '../models/user';
import { Comment } from '../models/comment';
import { MemberActionService } from '../member-action.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { element } from 'protractor';


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

//allMembers =[];
membersNotFriends;

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

 friends=[];
 visitor:Boolean;
 userPicture:String;
 userComment;
  constructor( 
    private activatedRouter: ActivatedRoute,
    private commentService:CommentService, 
    private router:Router,private authService: AuthService,
    private memberActionService: MemberActionService,
    public dialog: MatDialog
  ) {

    this.commentService.onPosted()
    .subscribe(data => {
      this.userComment.splice(0,0,data)
      //console.log("Apres ajout",this.userComment)
    }
    );


   }

   

  ngOnInit() {
    this.activatedRouter.paramMap.subscribe(
      params => {
        //Check who is who !!
          this.member_id =params.get('id')
         this.membersNotFriends= []
         //Comments information.
         this.authService.getData().subscribe(
          res=> {
            console.log(res)
            if(res.user._id!= this.member_id){
              this.visitor= true;
              console.log('visiteur amis')
            }else{
              this.visitor= false;
              console.log('Mon profil a moi !!!')
            }
            this.comment.author=res.user.first_name + ' ' +res.user.last_name;
            this.comment.authorId=res.user_id
            this.comment.authorPicture = res.user.picture;
          }
        )

         
          this.commentService.getMemberComments(this.member_id)
    .subscribe(
      res => {
       // console.log(res)
        this.userComment= res.comments
      }
    )

          this.authService.memberSpace(this.member_id)
          .subscribe(
            res => {
              //console.log('membre', res)
              if(res.user===undefined){
                this.router.navigate(['/notFound'])
              }else {
                //this.router.navigate(['/userdata'])
                //console.log(res.user)
                console.log('il existe des membres ???',res.user.friendsList)
                this.user=res.user;
                this.updateListmember();
                //this.friends=res.user.friendlist
                //console.log('liste mod de depart',this.friends)
                
                  
                console.log('Et aprés ??? ',this.user.friendsList)
              }
            }
          )        
          
      }
     
    )
    
  }


  updateListmember(){
    var allMembers =[];
  console.log("id du membre visité ",this.member_id)
  console.log("amis du membre visité ",this.user.friendsList)
    if(this.user.friendsList.length===0){
   this.authService.getAllMembers().subscribe(
     res => {
       res.forEach(element => {

        if(element._id != this.member_id){

          allMembers.push(element)
        }
         
       });
       this.membersNotFriends= allMembers
     }
    )

   
    };
    
    this.authService.getAllMembers()
    .subscribe(
      res => {
        res.forEach(element => {
          console.log(this.user.friendsList)
          
          this.user.friendsList.forEach(element2 => {

            if(element._id != element2.friend._id && element._id != this.member_id){

              allMembers.push(element)
            }
          })
          
        });
          this.membersNotFriends= allMembers

   console.log('*/*/*/',allMembers)
    
                    
         

      }
      
    )
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

  openDialog(): void {
    const dialogRef = this.dialog.open(InvitationRequest, {
      width: '100px',
      height:'200px',
      data: {}
    });

  }





  searchfriend(){
    //console.log(this.keyword)
    this.memberActionService.searchResult(this.keyword)
    .subscribe(
      res => {
        //Liste non vide..
        if(res.length>0){
          this.resultList = res;
          //console.log('liste amis trouvé : ',this.resultList);
        }else {
          //console.log(res.message)
          this.messageErreur=res.message

        }        
        
          
      })
    
  }

  onSelect(member){

    this.router.navigate(['/member_space', member._id])
  
  }



  cancelInvitation(member){


  }

  sendInvitationrequest(member) {
    console.log("Le mebre est comment ?",member)
    this.memberActionService.add_friend(member)
    .subscribe(
      res => {
        if(res.succes){
          
          //this.user.friendsList.splice(0,0,this.resultList[0])
          this.user.friendsList.push({status:"invitation en cours",friend:member})
          console.log(member);
          //member.friendsList.push({status:"en attente de confirmation", friend:this.user})
         /*   this.authService.updateUser(member).
          subscribe(
            res => console.log("Mise a jour de la liste amis",res)
          )  */
          //this.user.friendList = this.friends;
         // console.log('Contenu d',this.user.friendsList)

          this.authService.updateUser(this.user).
          subscribe(
            res=> console.log("Mise a jour de la liste du demandeur",res)
          )

          

        }
      }) 
  }


  



}


@Component({
  selector: 'invitation-request',
  templateUrl: '../../app/templates/invitation-request.html',
})
export class InvitationRequest {
  constructor(public dialogRef: MatDialogRef<InvitationRequest>,) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}