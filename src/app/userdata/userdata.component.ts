import {Component, OnInit, Output} from '@angular/core';
import { User } from '../models/user';
import { HttpInterceptor} from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService} from '../auth.service';
import {CommentService} from '../comment.service';
import { WebsocketService } from '../websocket.service';
import { subscribeOn } from 'rxjs/operators';
import { AngularFireStorage } from 'angularfire2/storage';
import { MemberActionService } from '../member-action.service';
import { Comment} from '../../app/models/comment';

@Component({
  selector: 'app-userdata',
  templateUrl: './userdata.component.html',
  styleUrls: ['./userdata.component.css']
})
export class UserdataComponent implements OnInit {
userData = User;
step=0;
keyword = {
  name:''
};

comment:Comment ={
  title: '',
author: '',
content: '',
date:null,
authorId: '',
authorPicture:'',
explicit: false

}
userPicture:String;

comments :Array<any>=[];

member ={
  first_name:'',
  pseudo:'',
  _id:'',
}
currentUser_id;
messageErreur;
resultList:any[];

  constructor(private commentService: CommentService,
     private auth: AuthService,
     private afStorage:AngularFireStorage,
     
    
    ) {
    
       this.commentService.onPosted()
      .subscribe(data => {
        this.comments.splice(0,0,data)
        console.log("Apres ajout",this.comments)
      }
      );
  }

  ngOnInit() {
    

      this.auth.getData()
    .subscribe(

      data => {
        data.user.online = true;
        this.userData =  data.user;
        console.log('*--**--*',data.user)
        this.auth.isAdmin=data.user.admin;
        
        console.log('mes infos',this.userData)
        this.currentUser_id= data.user._id;
        this.comment.author=data.user.first_name + ' ' +data.user.last_name;
        this.comment.authorId=this.currentUser_id
        this.comment.authorPicture = data.user.picture;
      }
    );
      

    this.commentService.getMemberComments(this.currentUser_id)
    .subscribe(
      res => {
        this.comments = res.comments;
      } 
    )
    
  }

/*   upload(event) {
    this.afStorage.upload('/', event.target.files[0]);
    console.log('fait')
  } */
 
  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }
  
 // Post copmment on space or friend space
  posted() {
    this.comment.date=new Date();
    this.commentService.postMessage(this.comment)
    
  }








}