import { Routes, RouterModule } from '@angular/router';
import { ErrorComponent } from './core/error/error.component';
import { PublicComponent } from './core/public/public.component';
import { AuthGuard } from './guards/auth-guard.guard';

const routes: Routes = [
  {
    path: '',
    canActivateChild: [AuthGuard],
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: '/home'
      },
      {
        path: 'home',
        component: PublicComponent,
      },
      {
        path: 'user',
        canActivateChild: [AuthGuard],
        loadChildren: () => import('./user/user.module').then(m => m.UserModule)
      },
      {
        path: 'challenges',
        canActivateChild: [AuthGuard],
        loadChildren: () => import('./challenges/challenges.module').then(m => m.ChallengesModule)
      },
      {
        path: '**',
        component: ErrorComponent
      }
    ]
  }
];

export const AppRoutingModule = RouterModule.forRoot(routes)
