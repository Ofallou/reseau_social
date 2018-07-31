import { Component, OnInit } from '@angular/core';
import {AuthService} from "../auth.service";
import {User} from "../models/user";
import { FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-user-settings',
  templateUrl: './user-settings.component.html',
  styleUrls: ['./user-settings.component.css']
})
export class UserSettingsComponent implements OnInit {
user:{};
email = new FormControl('', [Validators.required, Validators.email]);
password;
retype_password;
error;
hide = true;
messageFromSpace;
pseudoEnable;
pseudoNotEnable;
errormessage;
emailAvailable;
  constructor(private authService: AuthService,private snackBar: MatSnackBar) {}

  ngOnInit() {
    this.userSettings();
  }
  getErrorMessage() {
    return this.email.hasError('required') ? 'Le champs doit etre rempli' :
        this.email.hasError('email') ? "Le format de l'adresse Email est invalide" :
            '';
  }

  userSettings() {
    this.user = this.authService.getData().subscribe(
      res => {
        this.user= res.user;
        console.log(this.user);
      }

    );
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 3000,
    });
  }



  checkEmail (){
    this.authService.checkEmail(this.user)
    .subscribe(
      res => {
          if(res.message){
            this.emailAvailable = res.message
          }else {
            this.emailAvailable =res.error
          }
      } 
    )
  }

  checkPseudo(){
    this.authService.checkPseudo(this.user)
    .subscribe(
      res => {
        if(res.message){
          this.pseudoEnable = res.message
          this.pseudoNotEnable=null
        }else {
          this.pseudoNotEnable =res.error
          this.pseudoEnable=null
        }
      }
       
  )
  }






  update() {
    this.authService.updateUser(this.user)
    .subscribe(
      response => {
        console.log(response)
       
        this.messageFromSpace = response;
        this.openSnackBar(this.messageFromSpace,null)
      }
    )
  }

  passwordUpdate(){
    if(this.retype_password === this.password){

      console.log('password match !!');
    } else {
      this.error="Les mots de passe ne sont pas identiques";
      console.log('password does not match !!');
    }
    
  }
}
