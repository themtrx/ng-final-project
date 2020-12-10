import { Routes, RouterModule } from '@angular/router';
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
      }
    ]
  }
];

export const AppRoutingModule = RouterModule.forRoot(routes)
