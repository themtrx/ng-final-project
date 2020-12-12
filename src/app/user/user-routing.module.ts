import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../guards/auth-guard.guard';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path: 'user',
    canActivateChild: [AuthGuard],
    children: [
        {
            path: 'login',
            component: LoginComponent,
        },
        {
            path: 'register',
            component: RegisterComponent,
        },
        {
            path: 'profile',
            component: ProfileComponent,
            data: {
              isLogged: true
            }
        }
    ]
  }
]

export const UserRoutingModule = RouterModule.forChild(routes)
