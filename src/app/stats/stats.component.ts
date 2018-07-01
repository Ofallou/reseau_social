import { Component, OnInit } from '@angular/core';
import { CommentService } from '../comment.service';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {
nbComments: number;
  constructor(private commentService: CommentService) { }

  ngOnInit() {
    this.commentService.getComments().subscribe(
      res => this.nbComments = res.comments.length
    )
  }

}
