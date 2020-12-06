import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ChallengesRoutingModule } from './challenges-routing.module';


import { ChallengesListComponent } from './list/list.component';
import { ViewChallengeComponent } from './view/view.component';
import { GetChallengeComponent } from './get/get-challenge.component';



@NgModule({
  declarations: [
    ChallengesListComponent,
    ViewChallengeComponent,
    GetChallengeComponent
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
