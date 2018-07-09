import { Injectable } from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class AdminGuard implements CanActivate {
 admin: boolean = true;
  constructor(private _authService: AuthService, private _router: Router) {}
  getData() {
      this._authService.getData().subscribe(
          res => {
              console.log(res)
          }
      )
  }


  canActivate(): boolean {
    if (this._authService.loggedIn() && this.admin ) {
      return true;
    } else {
      this._router.navigate(['/home']);
      return false;
    }

  }

}