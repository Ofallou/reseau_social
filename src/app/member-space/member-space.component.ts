import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router'
import { AuthService } from '../auth.service';
import { CommentService } from '../comment.service';
import { User } from '../models/user';
import { Comment } from '../models/comment';
import { MemberActionService } from '../member-action.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { Observable } from 'rxjs';
import * as Rx from 'rxjs';

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

displayedColumns: string[] = ['photo','prenom', 'nom', 'pseudo', 'status'];

dataSource;

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
   friendsList:[
     {status:"", friendId:""}
   ],
   picture:''

 };
 currentUser;
 membersNotFriends=[];
 friends=[];
 visitor:Boolean;
 userPicture:String;
 userComment;
 message;
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

    this.memberActionService.onRequestInvitation().subscribe(
      invitation => {
  
        this.message= invitation
        localStorage.setItem('message',this.message)
  
      }
    )
  

   }

   

  ngOnInit() {




   
         //var amisLocal=   localStorage.getItem('myMemberlist')

         //console.log('liste membre en local',amisLocal)
    
    this.activatedRouter.paramMap.subscribe(
      params => {
        this.member_id =params.get('id')
        this.friends=[]
        this.membersNotFriends=[];

        this.authService.getAllMembers()
        .subscribe(
          members => {
            this.membersNotFriends = members
            console.log('Liste de tous les membres avant traitement',this.membersNotFriends)
            //On se supprime de la liste des membre a l'affichage
            this.membersNotFriends.splice(this.membersNotFriends.findIndex(user => user._id=== this.member_id),1)
            

            this.authService.getData().subscribe(

              res => { 
                this.user= res.user 
              });

     //Comments information.
     console.log('ki es tu ??',this.member_id)
     this.authService.memberSpace(this.member_id).subscribe(
      
      res=> {
           this.user= res.user;
           console.log(res.user)

          console.log(this.user.friendsList.length)
          console.log('liste amis',this.user.friendsList)
          console.log('Liste de tous les membres ',this.membersNotFriends)
         this.user.friendsList.forEach(element => {
           console.log('element bi !!!',element.friendId)
           this.membersNotFriends.splice(this.membersNotFriends.findIndex(user => user._id=== element.friendId),1)

         })
          console.log('Liste de tous les membres ',this.membersNotFriends)
          this.user.friendsList.forEach(element => {
            //console.log(element)
            this.memberActionService.getMemberById(element).subscribe(
                res=> {
                  this.friends.push(res)
                  //console.log(res)

                  
                  
                }
              )
            }) 



        }
      )

      console.log('Liste de tous les membres avant traitement bis',this.membersNotFriends)
      console.log("Mes amis",this.friends) ;
      console.log("Mes amis",this.user.friendsList) ;
     
      
      console.log('au final',this.membersNotFriends)
/*       this.membersNotFriends= this.membersNotFriends.filter(function(element){
        return this.user.friendsList.includes(element._id)
      }) */

      console.log('apres coup !!',this.membersNotFriends)
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

            
        



         
          this.commentService.getMemberComments(this.member_id)
    .subscribe(
      res => {
       // console.log(res)
        this.userComment= res.comments
      }
    )

       

          
      }

    )

    
  }


  testSocket(){
  
    this.memberActionService.requestInvitation('hello')
  }



   remove(array, element) {
    const index = array.indexOf(element);
    array.splice(index, 1);
}


  updateMemberList(member){
    
    this.membersNotFriends.splice(this.membersNotFriends.findIndex(user => user=== member),1)
    console.log('update ok ou pas',this.membersNotFriends)
    this.user.friendsList.forEach(element => {

      this.memberActionService.getMemberById(element).subscribe(
          res=> {

            this.friends.push(res)
          }
        )
      }) 

  
      
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

  console.log(member)
  }


  acceptInvitation(friendId){
    console.log(friendId.members._id)
    console.log(this.user.friendsList)
    this.user.friendsList.forEach(element => {
    
    if(element.friendId ==friendId.members._id && element.status=="en attente de confirmation" ){
        
          element.status="confirmé";
    }
   
    
  });
  console.log('aprés modif',this.user.friendsList)

  this.authService.updateUser(this.user).subscribe(
    res => console.log(res)
  )
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
  
    if(test=== undefined || this.user.friendsList.length==0){

     // console.log('On rajoute a la liste de demande amis',id)

     // console.log('On continu et on ajoute  la liste')
     
      //console.log("Le membre est comment ?",id)
      console.log('//////', member)
      this.memberActionService.add_friend(member)
      .subscribe(
        res => {
          if(res.success){
            this.updateMemberList(member)
            this.user.friendsList.push({status:"invitation en cours ",friendId:member._id})
            console.log(member._id);
            this.authService.updateUser(this.user).
            subscribe(
              res=> console.log("Mise a jour de la liste du demandeur",res)
            )
            
          }
  
          
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