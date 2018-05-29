import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { HttpInterceptor} from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService} from '../auth.service';


@Component({
  selector: 'app-userdata',
  templateUrl: './userdata.component.html',
  styleUrls: ['./userdata.component.css']
})
export class UserdataComponent implements OnInit {
   user: User;
  constructor(private authService: AuthService ) {}

  ngOnInit() {
    this.getUserdata();


  }

   getUserdata() {
     this.authService.getData()
     .subscribe(
       res => {
          this.user = res.user;
       }
     );
   }


}



