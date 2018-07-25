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
 userloginId;
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

    this.updateListmember()
    
    
    this.activatedRouter.paramMap.subscribe(
      params => {
        //Check who is who !!
          this.member_id =params.get('id')
         
         //Comments information.
         this.authService.getData().subscribe(
          res=> {
               this.user= res;
               this.userloginId=res.user._id
               console.log('ID de utilisateur loggé',this.userloginId)
            if(res.user._id!= this.member_id){
              this.visitor= true;
              console.log('visiteur amis')
            }else{
              this.visitor= false;
              console.log('Mon profil a moi !!!')
              //this.updateFriendMist(res.user.friendsList);
            }
            this.comment.author=res.user.first_name + ' ' +res.user.last_name;
            this.comment.authorId=this.member_id
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
               
                
                this.user=res.user;
                console.log('Ma liste membre invités',this.user.friendsList)
             
              }
              console.log('------------------',this.user.friendsList)
              
            }
            

          )        

          
      }

    )

    console.log("fin de reload",this.user.friendsList) 
    
  }


  updateListmember(){
    this.authService.getAllMembers()
    .subscribe(
      res => {
        this.membersNotFriends = res
      }
    )
  }

  updateFriendMist(){
      this.memberActionService.getMemberById(this.user.friendsList).subscribe(
        res=> {
          this.friends=res
          console.log("arretete",this.friends) 
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

  sendInvitationrequest(id) {

  var test=this.user.friendsList.find((element)=> {
     element.friendId = id;
     return true;
   })

     
   console.log('Mon test donne quoi ??????',test.friendId)
   if(test){

    console.log('he ben hé ben ')
   }
    console.log("Le membre est comment ?",id)
    this.memberActionService.add_friend(id)
    .subscribe(
      res => {
        if(res.succes){
          this.user.friendsList.push({status:"invitation en cours",friendId:id})
          console.log(id);
          this.authService.updateUser(this.user).
          subscribe(
            res=> console.log("Mise a jour de la liste du demandeur",res)
          )
          
        }

        this.updateListmember()
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