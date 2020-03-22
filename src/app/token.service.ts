import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { AuthService} from './auth.service';

@Injectable()
export class TokenService implements HttpInterceptor {
 authService = this.injector.get(AuthService);
  constructor(private injector: Injector) { }
  intercept(req, next) {

    const tokenizedReq = req.clone(
      {
        headers: req.headers.set('Authorization', 'bearer ' + this.authService.getToken())
      }
    );

    return next.handle(tokenizedReq);
  }


  decodeToken() {
   return this.authService.getToken();
  }

}
