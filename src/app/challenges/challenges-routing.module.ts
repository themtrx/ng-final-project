import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../guards/auth-guard.guard';
import { GetChallengeComponent } from './get/get-challenge.component';
import { ChallengesListComponent } from './list/list.component';
import { ViewChallengeComponent } from './view/view.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home'
  },
  {
      path: 'list',
      component: ChallengesListComponent,
      data: {
        isLogged: true
      }
    },
    {
      path: 'view/:id',
      component: ViewChallengeComponent,
      data: {
        isLogged: true
      }
    },
    {
      path: 'get',
      component: GetChallengeComponent,
      data: {
        isLogged: true
      }
    },
    {
      path: 'my',
      component: ChallengesListComponent,
      data: {
        isLogged: true
      }
    }
]

export const ChallengesRoutingModule = RouterModule.forChild(routes)
