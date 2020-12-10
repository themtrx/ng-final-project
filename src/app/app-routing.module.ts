import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './user/login/login.component';
import { PublicComponent } from './core/public/public.component';
import { RegisterComponent } from './user/register/register.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: PublicComponent
  },
  {
    path: 'user/login',
    component: LoginComponent
  },
  {
    path: 'user/register',
    component: RegisterComponent
  }
];

export const AppRoutingModule = RouterModule.forRoot(routes)
