import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { Router } from '@angular/router';
import { AuthService} from '../auth.service';
import {FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../login/login.component.css'],


})
export class RegisterComponent implements OnInit {
   user: User;
   photoUpload: File = null;
   imageUrl: string;
   email = new FormControl('', [Validators.required, Validators.email]);
   hide = true;
   pseudoEnable;
   pseudoNotEnable;
   errormessage;
   emailAvailable;
  constructor( private authService: AuthService, private _router: Router) {
    
    this.user = new User ({first_name: '',
    last_name: '',
    email: '',
    gender: '',
    password: '',
    pseudo: '',
    dateNaissance: '',
    admin: false,
    friendsList:[],
      pictures:'',
      online: false
    });
  }

  getErrorMessage() {
    return this.email.hasError('required') ? 'Le champs doit etre rempli' :
        this.email.hasError('email') ? "Le format de l'adresse Email est invalide" :'';
  }
  ngOnInit() {
    if (this.authService.getToken()) {
      this._router.navigate(['/member_space',this.user.pseudo]);
    }
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

  registerUser() {
     this.authService.registerUser(this.user)
    .subscribe(
      res => {
        if(res.message){
          this.errormessage = res.message;
          //alert(this.errormessage);
          this.user.email="";
        }else {

          localStorage.setItem('token', res.token );
          this._router.navigate(['/member_space',this.user.pseudo])
        }
        
      }
    );

  }

}
