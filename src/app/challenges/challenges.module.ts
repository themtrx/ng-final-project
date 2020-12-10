import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { ChallengesListComponent } from './list/list.component';
import { ViewChallengeComponent } from './view/view.component';
import { GetChallengeComponent } from './get/get-challenge.component';
import { SharedModule } from '../shared/shared.module';
import { ChallengeCardComponent } from './challenge-card/challenge-card.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ChallengesListComponent,
    ViewChallengeComponent,
    GetChallengeComponent,
    ChallengeCardComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ],
  exports: [
    ChallengesListComponent,
    ViewChallengeComponent,
    GetChallengeComponent
  ]
})
export class ChallengesModule { }
