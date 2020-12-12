import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AuthGuard } from '../guards/auth-guard.guard';
import { ProfileComponent } from './profile/profile.component';

import { CloudinaryModule, CloudinaryConfiguration } from '@cloudinary/angular-5.x'
import * as  Cloudinary from 'cloudinary-core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { UserRoutingModule } from './user-routing.module';



@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent,
    ProfileComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    RouterModule,
    MatProgressSpinnerModule,
    UserRoutingModule,
    CloudinaryModule.forRoot(Cloudinary, { 
      cloud_name: 'dvyudx4pv', 
      upload_preset: 'firstGallery'}),
  ],
  providers: [
    AuthGuard
  ],
  exports: [
    RegisterComponent,
    LoginComponent,
    ProfileComponent
  ]
})
export class UserModule { }
