import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointState, BreakpointObserver } from '@angular/cdk/layout';
import { AuthService } from '../auth.service';
import { CommentService } from '../comment.service';
import { Router } from '@angular/router';

@Component({
  selector: 'admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent {

  constructor(private authService: AuthService, private commentService: CommentService, private  _router: Router) {}

  ngOnInit() {
  

  

    this.commentService.isConnected().subscribe(
      res => console.log('le rest', res)
    )
    this.authService.getData().subscribe
    (res => console.log(res))
      
  }
  
}
