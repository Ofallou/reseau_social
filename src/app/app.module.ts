import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import {HomeComponent} from './home/home.component';
import {RegisterComponent} from './register/register.component';
import {LoginComponent} from './login/login.component';
import {UserdataComponent} from './userdata/userdata.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DragulaModule } from 'ng2-dragula';
import { MatTableModule, MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatRadioModule, MatListModule, MatGridListModule, MatCardModule, MatMenuModule,MatFormFieldModule,MatInputModule, MatCheckboxModule } from '@angular/material';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSelectModule} from '@angular/material/select';
import { LayoutModule } from '@angular/cdk/layout';
import {MatBadgeModule} from '@angular/material/badge';
import {MatExpansionModule} from '@angular/material/expansion';
import { FlexLayoutModule } from "@angular/flex-layout";
import { ImageUploadModule } from "angular2-image-upload";
import {MatDividerModule} from '@angular/material/divider';
import { LivechatWidgetModule } from '@livechat/angular-widget';
import {MatButtonToggleModule} from '@angular/material/button-toggle';



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
import {MatTooltipModule} from '@angular/material/tooltip';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminGuard } from './admin.guard';
import { AngularFireModule } from 'angularfire2';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { NewPasswordComponent } from './new-password/new-password.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { FriendslistComponent } from './friendslist/friendslist.component';
import { MembersListComponent } from './members-list/members-list.component';
import { MemberSpaceComponent, InvitationRequest } from './member-space/member-space.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ChatWindowComponent } from './chat-window/chat-window.component';
import { InvitationRequestComponent } from './invitation-request/invitation-request.component';




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
    NavigationComponent,
    AdminDashboardComponent,
    NewPasswordComponent,
    FriendslistComponent,
    MembersListComponent,
    MemberSpaceComponent,
    PageNotFoundComponent,
    ChatWindowComponent,
    InvitationRequestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FlexLayoutModule,
    ReactiveFormsModule,
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
    MatDialogModule,
    MatSnackBarModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatBadgeModule,
    MatTooltipModule,
    MatDividerModule,
    MatButtonToggleModule,
    LivechatWidgetModule,
    ImageUploadModule.forRoot(),
    

    AngularFireModule.initializeApp({
      apiKey: "AIzaSyAlSqMwKKhmxwcaV2yV0JakW1Z3FC-8d3Q",
    authDomain: "reseau-social-c1b9a.firebaseapp.com",
    databaseURL: "https://reseau-social-c1b9a.firebaseio.com",
    projectId: "reseau-social-c1b9a",
    storageBucket: "reseau-social-c1b9a.appspot.com",
    messagingSenderId: "217716745845"
    }),
    AngularFireStorageModule
    
  ],
  providers: [AuthService,AdminGuard, AuthGuard,WebsocketService, CommentService,MemberActionService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenService,
      multi: true
    }],
  bootstrap: [AppComponent],
  entryComponents: [
    InvitationRequestComponent,
],
})
export class AppModule { }
