import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http'

import { CoreModule } from './core/core.module';
import { ChallengesModule } from './challenges/challenges.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { ChallengesService } from './challenges/challenges.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    ChallengesModule,
    HttpClientModule
  ],
  providers: [
    ChallengesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
