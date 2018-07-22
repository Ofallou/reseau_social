import { Injectable } from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { FindValueSubscriber } from 'rxjs/internal/operators/find';

@Injectable()
export class AdminGuard implements CanActivate {
 
  constructor(private _authService: AuthService, private _router: Router) {}
  getData() {
      this._authService.getData().subscribe(
          res => {
              console.log( "console de chez adminguard ",res)
          }
      )
  }


  canActivate(): boolean {
    if (this._authService.loggedIn() && this._authService.isAdmin) {
      console.log(this._authService.isAdmin)
      return true;
    } else {
      this._router.navigate(['/home']);
      return false;
    }

  }

}