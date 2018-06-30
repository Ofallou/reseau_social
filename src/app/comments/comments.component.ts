import { Component, OnInit , EventEmitter,  Output, Input } from '@angular/core';
import {CommentService} from '../comment.service';
import {Router} from '@angular/router';
import { Comment } from '../models/comment';
import {AuthService} from '../auth.service';
import {User} from "../models/user";


@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  constructor() {}
  ngOnInit() {
   
}



}
