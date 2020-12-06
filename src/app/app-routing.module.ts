import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PublicComponent } from './core/public/public.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: PublicComponent
  }
];

export const AppRoutingModule = RouterModule.forRoot(routes)
