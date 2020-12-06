import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { PublicComponent } from './core/public/public.component';
import { ChallengesListComponent } from './core/challenges-list/challenges-list.component';
import { GetChallengeComponent } from './core/get-challenge/get-challenge.component';
import { RegisterComponent } from './core/register/register.component';
import { LoginComponent } from './core/login/login.component';
import { ViewChallengeComponent } from './core/view-challenge/view-challenge.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PublicComponent,
    ChallengesListComponent,
    GetChallengeComponent,
    RegisterComponent,
    LoginComponent,
    ViewChallengeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
