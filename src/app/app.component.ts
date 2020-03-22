import { Component } from '@angular/core';
import * as jwt_decode from "jwt-decode";
import { TokenService } from './token.service';
import { AuthService } from './auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  constructor(private tokenService: TokenService, private authService: AuthService){

    const myToken = this.authService.getToken();
    console.log(myToken)
  }

}
