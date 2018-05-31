import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-lost-password',
  templateUrl: './lost-password.component.html',
  styleUrls: ['./lost-password.component.css']
})
export class LostPasswordComponent implements OnInit {
 userData = {
   email: ''
 };

 message: '';
  constructor(private authService: AuthService, private _router: Router) { }

  ngOnInit() {
  }

  passwordRetrival() {
    console.log(this.userData);
    this.authService.lostPassword(this.userData)
    .subscribe(
      res => {
        if (res.success) {
          alert(res.success);
          this._router.navigate(['/login']);
        } else {

          this.message = res.error;
          this.userData.email = '';
        }
      }
    );

  }

}
