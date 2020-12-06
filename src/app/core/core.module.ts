import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { ChallengesModule } from '../challenges/challenges.module';

import { PublicComponent } from './public/public.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';



@NgModule({
  declarations: [
    PublicComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    ChallengesModule
  ],
  exports: [
    PublicComponent,
    LoginComponent,
    RegisterComponent,
  ]
})
export class CoreModule { }
