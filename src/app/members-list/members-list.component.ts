import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { CommentService } from '../comment.service';

@Component({
  selector: 'app-members-list',
  templateUrl: './members-list.component.html',
  styleUrls: ['./members-list.component.css']
})
export class MembersListComponent implements OnInit {
 member;
  constructor(private authService: AuthService, private commentServie: CommentService) { }

  ngOnInit() {
    this.authService.getData().subscribe(
      res => {
          this.member= res.user;
          console.log(this.member)
      }
    )
    this.commentServie.isConnected()
    .subscribe(
      res => {
        
        console.log('les infos membre connecté', res)
      }
    )

  }

}
