import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import {HomeComponent} from './home/home.component';
import {RegisterComponent} from './register/register.component';
import {LoginComponent} from './login/login.component';
import {UserdataComponent} from './userdata/userdata.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {FormsModule } from '@angular/forms';
// services
import {TokenService} from './token.service';
import {AuthService} from './auth.service';
import { LostPasswordComponent } from './lost-password/lost-password.component';
import {AuthGuard} from './auth.guard';
import { CommentsComponent } from './comments/comments.component';
import {CommentService} from './comment.service';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    UserdataComponent,
    LostPasswordComponent,
    CommentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AuthService, AuthGuard, CommentService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenService,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
