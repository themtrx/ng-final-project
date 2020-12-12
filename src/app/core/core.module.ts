import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { ChallengesModule } from '../challenges/challenges.module';

import { PublicComponent } from './public/public.component';
import { AuthGuard } from '../guards/auth-guard.guard';
import { appInterceptorProvider } from './app.interceptor';
import { ErrorComponent } from './error/error.component';


@NgModule({
  declarations: [
    PublicComponent,
    ErrorComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
  ],
  providers: [
    AuthGuard,
    appInterceptorProvider
  ],
  exports: [
    PublicComponent,
    ErrorComponent
  ]
})
export class CoreModule { }
