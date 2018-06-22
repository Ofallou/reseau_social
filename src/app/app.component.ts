import { Component } from '@angular/core';
import {AuthService} from './auth.service';
import { WebsocketService } from './websocket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  isAuth = false;
  title = 'app';
  constructor( private authService: AuthService) {}
  getUserState() {
    this.isAuth = !!this.authService.getToken();
    return this.isAuth;
  }
  logoutUser() {
    this.authService.logoutUser();
  }
}
