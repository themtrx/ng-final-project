import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { ChallengesModule } from '../challenges/challenges.module';

import { PublicComponent } from './public/public.component';
import { AuthGuard } from '../guards/auth-guard.guard';
import { appInterceptorProvider } from './app.interceptor';


@NgModule({
  declarations: [
    PublicComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    ChallengesModule
  ],
  providers: [
    AuthGuard,
    appInterceptorProvider
  ],
  exports: [
    PublicComponent,
  ]
})
export class CoreModule { }
