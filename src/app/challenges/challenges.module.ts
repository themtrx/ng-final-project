import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChallengesRoutingModule } from './challenges-routing.module';


import { ChallengesListComponent } from './list/list.component';
import { ViewChallengeComponent } from './view/view.component';
import { GetChallengeComponent } from './get/get-challenge.component';
import { SharedModule } from '../shared/shared.module';
import { ChallengeCardComponent } from './challenge-card/challenge-card.component';



@NgModule({
  declarations: [
    ChallengesListComponent,
    ViewChallengeComponent,
    GetChallengeComponent,
    ChallengeCardComponent,
  ],
  imports: [
    CommonModule,
    ChallengesRoutingModule,
    SharedModule
  ],
  exports: [
    ChallengesListComponent,
    ViewChallengeComponent,
    GetChallengeComponent
  ]
})
export class ChallengesModule { }
