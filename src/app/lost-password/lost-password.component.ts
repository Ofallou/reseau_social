import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import {FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';

import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { NewPasswordComponent } from '../new-password/new-password.component';

@Component({
  selector: 'app-lost-password',
  templateUrl: './lost-password.component.html',
  styleUrls: ['./lost-password.component.css']
})
export class LostPasswordComponent implements OnInit {
 userData = {
   email: ''
 };
 email = new FormControl('', [Validators.required, Validators.email]);


 message: '';
  constructor(private authService: AuthService, private _router: Router,public dialog: MatDialog) { }

  ngOnInit() {
  }

  passwordRetrival() {
    console.log(this.userData);
    this.authService.lostPassword(this.userData)
    .subscribe(
      res => {
        if (res.success) {
          const dialog = this.dialog.open(NewPasswordComponent,{
            width : '400px',
            data :res.success
           
          });
          console.log(res)
          dialog.afterClosed().
          subscribe(
            res => this._router.navigate(['/login'])
          )
         
        } else {

          this.message = res.error;
          this.userData.email = '';
        }
      }
    );

  }



  getErrorMessage() {
    return this.email.hasError('required') ? 'Le champs doit etre rempli' :
        this.email.hasError('email') ? "Le format de l'adresse Email est invalide" :
            '';
  }


}
