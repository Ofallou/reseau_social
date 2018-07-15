import { Component, OnInit } from '@angular/core';
import { CommentService } from '../comment.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {

  constructor(private commentService: CommentService, private authService: AuthService) { }

  ngOnInit() {
  }


  

}
