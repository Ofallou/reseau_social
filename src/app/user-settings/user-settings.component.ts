import { Component, OnInit } from '@angular/core';
import {AuthService} from "../auth.service";
import {User} from "../models/user";

@Component({
  selector: 'app-user-settings',
  templateUrl: './user-settings.component.html',
  styleUrls: ['./user-settings.component.css']
})
export class UserSettingsComponent implements OnInit {
user:{};
  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.userSettings();
  }


  userSettings() {
    this.user = this.authService.getData().subscribe(
      res => {
        this.user= res.user;
        console.log(this.user);
      }

    ).closed;
  }
}
