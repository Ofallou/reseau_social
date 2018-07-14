import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {FormsModule} from '@angular/forms';
import {UserdataComponent} from './userdata/userdata.component';
import {LostPasswordComponent} from './lost-password/lost-password.component';
import {AuthGuard} from './auth.guard';
import { UserSettingsComponent } from './user-settings/user-settings.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminGuard } from './admin.guard';
import { NewPasswordComponent } from './new-password/new-password.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'lostpwd', component: LostPasswordComponent},
  {path: 'passCode/:id', component: NewPasswordComponent},
  {path: 'userdata', component: UserdataComponent,
  canActivate : [AuthGuard]},
  {path: 'user-settings', component: UserSettingsComponent,
  canActivate : [AuthGuard]},
  {path: 'admin', component: AdminDashboardComponent,
   canActivate: [AdminGuard]}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule, FormsModule]
})
export class AppRoutingModule { }
