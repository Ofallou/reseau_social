import { Component, OnInit, Inject, Input } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import { FormGroup } from '@angular/forms';
import { AuthService } from '../auth.service';
import { User } from '../models/user';
import { Comment } from '../models/comment';


@Component({
  selector: 'app-chat-window',
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.css']
})
export class ChatWindowComponent implements OnInit {

  @Input() comment: Comment;
  currentUser: User;
  incoming: boolean;
 
  constructor(public authService:AuthService ) { }

  ngOnInit() {

    this.authService.getData()
    .subscribe(
      (user:User)=> {
        this.currentUser=user;
        if(this.comment.author && user){
          this.incoming=this.comment.authorId!== user._id;
        }
        
      }
    )
    
    
  }



}
