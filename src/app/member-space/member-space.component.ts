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
 currentUser;
 membersNotFriends;
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
  this.friends=[]
          //On recupere  tous les membres

          this.authService.getData().subscribe(

            res => {this.user= res.user 
              console.log(this.user)
          

          console.log(this.user)
          this.authService.getAllMembers()
          .subscribe(
            res => {
              this.membersNotFriends = res
              console.log(this.membersNotFriends)
              
              var toto = this.membersNotFriends.findIndex(user => user._id=== this.member_id)
              console.log(toto)
              this.membersNotFriends.splice(this.membersNotFriends.findIndex(user => user._id=== this.member_id),1)
              console.log('l** Liste de tous les membres *** ',this.membersNotFriends )
            }
          )
        }
      );
         //Comments information.
         this.authService.memberSpace(this.member_id).subscribe(
          res=> {
               this.user= res.user;
              console.log(this.user.friendsList)
            this.user.friendsList.forEach(element => {

              this.memberActionService.getMemberById(element).subscribe(
                  res=> {

                    this.friends.push(res)
                    
                  } 
  
                  
                )
              }) 

              console.log("arretete",this.friends) 

      
              
               this.authService.getData().
               subscribe(

                 res => {
                  this.currentUser = res
                  this.comment.author=res.user.first_name + ' ' +res.user.last_name;
                  
                  if(res.user._id != this.member_id){
                    this.comment.authorId=this.member_id
                  }else {
                    this.comment.authorId=res.user._id
                  }
                  this.comment.authorPicture = res.user.picture;
                 
                 } 

               )

            
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
               
                
                //this.user=res.user;
                console.log('Ma liste membre invités',this.user.friendsList)
               


              }

            }
            

          )        

          
      }

    )

    
  }


  

  updateMemberList(member){


    this.membersNotFriends=this.membersNotFriends.splice(this.membersNotFriends.indexOf(member),1);

    
      
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
    console.log('le membre  eeeee',member)

    this.router.navigate(['/member_space', member._id])
  
  }



  cancelInvitation(member){


  }

  sendInvitationrequest(member) {
    console.log('Id a inviter ',member)
    console.log(' Liste vide ? ??????',this.user.friendsList)
    let test;
   

    if(this.user.friendsList.length !=0 && this.member_id != member._id){
      test=this.user.friendsList.find((element)=> {
          
        return element.friendId==member._id ;
  
        })
    }
    
    
    console.log(test)
  
    if(test=== undefined){

     // console.log('On rajoute a la liste de demande amis',id)

     // console.log('On continu et on ajoute  la liste')
     
      //console.log("Le membre est comment ?",id)
      this.memberActionService.add_friend(member._id)
      .subscribe(
        res => {
          if(res.succes){
            this.updateMemberList(member)
            this.user.friendsList.push({status:"invitation en cours",friendId:member._id})
            console.log(member._id);
            this.authService.updateUser(this.user).
            subscribe(
              res=> console.log("Mise a jour de la liste du demandeur",res)
            )
            
          }
  
         // this.updateListmember()
        }) 
    }else {

      alert('Invitation deja envoyée ou Membre deja amis')
    }
  
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