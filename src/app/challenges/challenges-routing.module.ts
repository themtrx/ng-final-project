import { Routes, RouterModule } from '@angular/router';

import { GetChallengeComponent } from './get/get-challenge.component';
import { ChallengesListComponent } from './list/list.component';
import { ViewChallengeComponent } from './view/view.component';

const routes: Routes = [
  {
    path: 'challenges/list',
    component: ChallengesListComponent
  },
  {
    path: 'challenges/view/:id',
    component: ViewChallengeComponent
  },
  {
    path: 'challenges/get',
    component: GetChallengeComponent
  },
  {
    path: 'challenges/my',
    component: ChallengesListComponent
  }
];

export const ChallengesRoutingModule = RouterModule.forChild(routes)
