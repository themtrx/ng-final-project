import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

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
    HttpClientModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatProgressSpinnerModule,
  ],
  providers: [
    ChallengesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
