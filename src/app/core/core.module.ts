import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { ChallengesModule } from '../challenges/challenges.module';

import { PublicComponent } from './public/public.component';


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
  exports: [
    PublicComponent,
  ]
})
export class CoreModule { }
