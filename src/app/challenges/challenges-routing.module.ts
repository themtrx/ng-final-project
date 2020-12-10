import { Routes, RouterModule } from '@angular/router';
import { GetChallengeComponent } from './get/get-challenge.component';
import { ChallengesListComponent } from './list/list.component';
import { ViewChallengeComponent } from './view/view.component';

const routes: Routes = [
  {
    path: 'challenges',
    children: [
        {
            path: 'list',
            component: ChallengesListComponent
          },
          {
            path: 'view/:id',
            component: ViewChallengeComponent
          },
          {
            path: 'get',
            component: GetChallengeComponent
          },
          {
            path: 'my',
            component: ChallengesListComponent
          }
    ]
  }
]

export const ChallengesRoutingModule = RouterModule.forChild(routes)
