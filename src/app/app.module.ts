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
import { DragulaModule } from 'ng2-dragula';
import { MatTableModule, MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatRadioModule, MatListModule, MatGridListModule, MatCardModule, MatMenuModule,MatFormFieldModule,MatInputModule, MatCheckboxModule } from '@angular/material';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSelectModule} from '@angular/material/select';
import { LayoutModule } from '@angular/cdk/layout';
// services
import {TokenService} from './token.service';
import {AuthService} from './auth.service';
import { LostPasswordComponent } from './lost-password/lost-password.component';
import {AuthGuard} from './auth.guard';
import { CommentsComponent } from './comments/comments.component';
import {CommentService} from './comment.service';
import { UploaderComponent } from './uploader/uploader.component';
import { UserSettingsComponent } from './user-settings/user-settings.component';
import { WebsocketService } from './websocket.service';
import { StatsComponent } from './stats/stats.component';
import { HeaderComponent } from './header/header.component';
import { MemberSearchComponent } from './member-search/member-search.component';
import { MemberActionService } from './member-action.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MainComponent } from './main/main.component';
import { NavigationComponent } from './navigation/navigation.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    UserdataComponent,
    LostPasswordComponent,
    CommentsComponent,
    UploaderComponent,
    UserSettingsComponent,
    StatsComponent,
    HeaderComponent,
    MemberSearchComponent,
    MainComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    DragulaModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatInputModule,
    MatFormFieldModule,
    MatTabsModule,
    MatSelectModule,
    MatRadioModule,
    MatTableModule,
    MatCheckboxModule,
    BrowserAnimationsModule,
    

  ],
  providers: [AuthService, AuthGuard,WebsocketService, CommentService,MemberActionService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenService,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
