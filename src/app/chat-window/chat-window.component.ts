import { Component, OnInit, Inject, Input } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import { FormGroup } from '@angular/forms';
import { AuthService } from '../auth.service';
import { User } from '../models/user';
import { Comment } from '../models/comment';
import { ChatService } from '../chat/chat.service';
import { Message } from '../models/message';



@Component({
  selector: 'app-chat-window',
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.css']
})
export class ChatWindowComponent implements OnInit {

  user: User;
message: Message ={
  id: '',
   sentAt:new Date,
   author: '',
   text: '',
   authorPicture:''
} ;
commentsArray: Array<Comment>= [];


constructor(public authService:AuthService , public chatService: ChatService) { 
  this.authService.getData().subscribe(
    res=> this.user=res.user
  )


    this.chatService.messageSent().subscribe(
      res => this.commentsArray.push(res)
    )
  }

  ngOnInit() {
         
  }

  sent(){
    this.message.id=this.user._id
    this.message.author=this.user.pseudo
    this.message.authorPicture= this.user.picture;
    this.chatService.sendMessage(this.message);
    this.message.text='';

  }


}
