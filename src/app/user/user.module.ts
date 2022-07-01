import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { GoogleSigninDirective } from './google-signin.directive';

import { LoginPageComponent } from './login-page/login-page.component';
import { SharedModule } from '../shared/shared.module';
import { EmailLoginComponent } from './email-login/email-login.component';
//Fix for the "form group error"
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LoginPageComponent,
    GoogleSigninDirective,
    EmailLoginComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule,
    UserRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class UserModule { }
