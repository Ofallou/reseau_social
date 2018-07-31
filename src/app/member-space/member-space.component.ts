import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { AuthService } from '../auth.service';
import { CommentService } from '../comment.service';
import { User } from '../models/user';
import { Comment } from '../models/comment';
import { MemberActionService } from '../member-action.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig } from '@angular/material';
import { Observable } from 'rxjs';
import * as Rx from 'rxjs';
import { ChatWindowComponent } from '../chat-window/chat-window.component';
import { Http } from '@angular/http';
import { ChatService } from '../services/chat.service';
import { Ichat } from '../interfaces/ichat';



@Component({
  selector: 'app-member-space',
  templateUrl: './member-space.component.html',
  styleUrls: ['./member-space.component.css']
})



export class MemberSpaceComponent implements OnInit {


  member_pseudo;
  step = 0;
  keyword = {
    name: ''
  };
  resultList: any[];
  messageErreur;
  isAdmin:Boolean;

  comment: Comment = {
    title: '',
    author: '',
    content: '',
    date: null,
    authorId: '',
    authorPicture: '',
    explicit: false

  }

 


  dataSource;

  //allMembers =[];

  user: User = {
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

  };
  currentUser;
  membersNotFriends = [];
  friends=[];
  visitor: Boolean;
  userPicture: String;
  userComment;
  message;
  chats: Ichat[] = [];
  sending: boolean;


  constructor(
    private activatedRouter: ActivatedRoute,
    private commentService: CommentService,
    private router: Router, private authService: AuthService,
    private memberActionService: MemberActionService,
    private chatService:ChatService
    
  ) {
    
    this.commentService.onPosted()
      .subscribe(data => {
        this.userComment.splice(0, 0, data)
        //console.log("Apres ajout",this.userComment)
      }
      );

    this.memberActionService.onRequestInvitation().subscribe(
      invitation => {
        console.log(invitation)    
            this.message = invitation

      }
    )


  }

  


 

  ngOnInit() {




    this.activatedRouter.paramMap.subscribe(
      params => {

        
       
        this.member_pseudo = params.get('pseudo')
        this.friends=[]
       
        this.membersNotFriends = [];
        
        this.authService.getData().subscribe(
         
          res => {
            this.user = res.user;
            this.isAdmin=this.user.admin;
            console.log('Moi user',this.user)
            this.onSubmit()
            const myFriends=this.user.friendsList.filter(element => element.status=='confirmer');
            console.log(myFriends);
            myFriends.forEach(element => {
              //console.log(element)
              this.memberActionService.getMemberById(element).subscribe(
                res => {
                  this.friends.push(res)
                  //console.log(res
                 

                }
              )
            })

            this.chatService.getChannel().bind('chat',data => {
              console.log(data)
              if(data.email === this.chatService.user.email){
                data.isMe= true;
              }
              this.chats.push(data)
            })

            this.commentService.getMemberComments(this.member_pseudo)
            .subscribe(
              res => {
               console.log('Les commentaires de ki ???',res)
                this.userComment = res.comments
              }
            )
            

            console.log("Mes amis", this.friends);

            //console.log('le user est  connecté :',res.user._id, res.user.last_name)

            if (this.member_pseudo === this.user.pseudo) {
              this.visitor = false;
            } else {
              this.visitor = true;
              //console.log('Amis ou membre qui visite ma page',false)
            }
          });

        this.authService.getAllMembers()
          .subscribe(
            members => {
              this.membersNotFriends = members
              //console.log('Liste de tous les membres avant traitement',this.membersNotFriends)
              //On se supprime de la liste des membre a l'affichage le mebre loggé
              this.membersNotFriends.splice(this.membersNotFriends.findIndex(user => user.pseudo === this.member_pseudo), 1)

              this.authService.memberSpace(this.member_pseudo).subscribe(
                res => {
                  console.log("le res est comment ??",res)
                  if(res ===  null ||res === undefined){
                    this.router.navigate(['/notFound'])
                  }else {
                    this.user = res;
                  }
              
               
                 // console.log('liste amis', this.user.friendsList)
                 // On enleve de la lsite les 
                  console.log('Liste de tous les membres ', this.membersNotFriends)
                  this.user.friendsList.forEach(element => {
                    console.log('element bi !!!',element.status)
                    this.membersNotFriends.splice(this.membersNotFriends.findIndex(user => user._id === element.friendId), 1)
                  })


                }
              )

            }
          )
          //On recupere les info du user connecté
        this.authService.getData().
          subscribe(

            res => {
              this.currentUser = res
              this.comment.author = res.user.first_name + ' ' + res.user.last_name;
   console.log('ki est tu pseudo ??',this.member_pseudo)
              if (res.user.pseudo != this.member_pseudo) {
                this.comment.authorId = this.member_pseudo
              } else {
                this.comment.authorId = res.user.pseudo
              }
              this.comment.authorPicture = res.user.picture;

            }

          )


      }

    )


  }



  chatRequest(friend){
    const pseudo =friend.members.pseudo
    this.memberActionService.requestInvitation(pseudo);
  }

 


  onSubmit() {
    const params= {email:this.user.email, displayName:this.user.pseudo}
    this.chatService.join(params).subscribe(
      res => {
        console.log(res)
      },
      error => {
        console.error(error)
      }
    )
    //this.chatService.openChatRoom({user:this.user, friend:friend.members})
    

  }

  sendMessage(message: string) {
    this.sending = true;
    this.chatService.sendMessage(message)
      .subscribe(resp => {
        console.log(resp)
        this.message = undefined;
        this.sending = false;
      }, err => {
        this.sending = false;
      } );
  }



  remove(array, element) {
    const index = array.indexOf(element);
    array.splice(index, 1);
  }

  updateFriendList(member) {
   
     this.friends.push(member)
    
  }




  updateMemberList(member) {
    this.membersNotFriends.splice(this.membersNotFriends.findIndex(user => user === member), 1)
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
    this.comment.date = new Date();
    this.commentService.postMessage(this.comment)

  }
/* 
  openDialog(friend) {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;

    dialogConfig.data = {
    me:  this.user,
    myfriend:friend
    }
    

    this.dialog.open(ChatWindowComponent, dialogConfig);
} */

 


  all(){

    this.friends=[]
    
    this.user.friendsList.forEach(element => {
      //console.log(element)
      this.memberActionService.getMemberById(element).subscribe(
        res => {
          this.friends.push(res)
         // console.log(this.friends)
         

        }
      )
    })


    console.log('de alll',this.friends)

  }

  confirm(){
    this.friends=[];
    const conf= this.user.friendsList.filter(element => element.status=='confirmer');
    //console.log('conf est egala a ',conf)
    conf.forEach(element => {
      //console.log(element)
      this.memberActionService.getMemberById(element).subscribe(
        res => {
          this.friends.push(res)
          //console.log(this.friends)
         

        }
      )
    })

    //console.log('Confirme',this.friends)
    //console.log(this.user.friendsList)

  }
  send(){
   
    this.friends=[];
    const send = this.user.friendsList.filter(element => element.status=='invitation en cours ');
    send.forEach(element => {
      //console.log(element)
      this.memberActionService.getMemberById(element).subscribe(
        res => {
          this.friends.push(res)
          //console.log('envoyées',this.friends)
         

        }
      )
    })
  //  console.log('pour send',send)
  //  console.log('envoyées',this.friends)
    

  }

  waiting(){


    this.friends=[];
    const wainting= this.user.friendsList.filter(element => element.status=='en attente de confirmation');
    wainting.forEach(element => {
      //console.log(element)
      this.memberActionService.getMemberById(element).subscribe(
        res => {
          this.friends.push(res)
          //console.log(res
         

        }
      )
    })
    //console.log('En attente',this.friends)
  }

  searchfriend() {
 console.log(this.authService.getAllMembers().subscribe(
   res =>{
      console.log('Tous les members',res);
   } )
  )
  }

  onSelect(member) {
    this.router.navigate(['/member_space', member.pseudo])

  }

  sendInviation(member){

    this.memberActionService.requestInvitation(member);
  }


receiveInvitation(){
  this.memberActionService.onRequestInvitation().subscribe(
    res => console.log('Invitation envoyé de :', res)
  )

  
}

  cancelInvitation(member) {
    console.log(member)
  }

  acceptRequestInvitation(member){

    this.user.friendsList.forEach(element => {

      if (element.friendId == member.members._id && element.status == "en attente de confirmation") {

        element.status = "confirmé";
      }


    });

    this.memberActionService.acceptInvitation(member, this.user).subscribe(
      res => {

        if(res==1){
        // On fait la meme chose de l'autre coté 
        this.memberActionService.updateInvitation(member,this.user).subscribe(
          res2=> console.log(res2)
        )

        this.authService.getData().subscribe(
          res => {
            this.user= res.user;
          } 
        );
          console.log('update ok')
        }else {

          console.log('update non effectué')
        }

      }
    )
  }

 



  acceptInvitation(friendId) {
    console.log(friendId.members._id)
    console.log(this.user.friendsList)
    this.user.friendsList.forEach(element => {

      if (element.friendId == friendId.members._id && element.status == "en attente de confirmation") {

        element.status = "confirmé";
      }


    });
    console.log('aprés modif', this.user.friendsList)

    this.authService.updateUser(this.user).subscribe(
      res => console.log(res)
    )
  } 

  sendInvitationrequest(member) {
    console.log('Id a inviter ', member)
    console.log(' Liste vide ? ??????', this.user.friendsList)
    let test;


    if (this.user.friendsList.length != 0 && this.member_pseudo != member.pseudo) {
      test = this.user.friendsList.find((element) => {

        return element.friendId == member._id;

      })
    }


   
    

    console.log(test)

    if (test === undefined || this.user.friendsList.length == 0) {

      // console.log('On rajoute a la liste de demande amis',id)

      // console.log('On continu et on ajoute  la liste')

      //console.log("Le membre est comment ?",id)
      console.log('//////', member)
      console.log('les amis du user en cour', this.friends)
      this.memberActionService.add_friend(member,this.user)
        .subscribe(
          res => {
            if (res) {
              this.updateMemberList(member);
              this.user.friendsList.push({ status: "invitation en cours ", friendId: member._id })
              
              this.memberActionService.getMemberById({ status: "invitation en cours ", friendId: member._id }).subscribe(
                res => {
                  this.friends.push(res)
                  //console.log(res
                 

                }
              )


              console.log(member._id);
              this.authService.updateUser(this.user).
                subscribe(
                  res => {
                    console.log('Apres update la reponse API', res.data)
                    //this.updateFriendList(member);
                    

                  }
                )



            }


          })
    } else {

      alert('Invitation deja envoyée ou Membre deja amis')
    }

  }








}


/* @Component({
  selector: 'chat',
  templateUrl: '../../app/templates/chat.html',
})
export class InvitationRequest {
  constructor(public dialogRef: MatDialogRef<InvitationRequest>, ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
} */