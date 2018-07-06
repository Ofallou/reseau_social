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
  constructor( private authService: AuthService, private _router: Router) {
    this.user = new User ({first_name: '',
    last_name: '',
    email: '',
    gender: '',
    password: '',
    pseudo: '',
    dateNaissance: '',
    roleAdmin: false,
      pictures:'',
    });
  }


  getErrorMessage() {
    return this.email.hasError('required') ? 'Le champs doit etre rempli' :
        this.email.hasError('email') ? "Le format de l'adresse Email est invalide" :
            '';
  }
  ngOnInit() {
    if (this.authService.getToken()) {
      this._router.navigate(['/userdata']);
    }
  }
  /* gere l'upload de photo 
  onFileSelected(file: FileList) {
    console.log(file);
    this.photoUpload= file.item(0);
     var reader = new FileReader();
     reader.onload = (event:any) => {
       this.imageUrl = event.target.result;
     }
     reader.readAsDataURL(this.photoUpload);
     this.user.pictures.push(this.photoUpload);
  }*/

  registerUser() {
 
    this.authService.registerUser(this.user)
    .subscribe(
      res => {
        localStorage.setItem('token', res.token );
        this._router.navigate(['/']);
      }
    );
   // console.log(this.user);
   // console.log('+++++' + this.userService.setUserData(this.user));
  }

}
