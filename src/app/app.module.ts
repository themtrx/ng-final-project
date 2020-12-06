import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { ChallengesModule } from './challenges/challenges.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    ChallengesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
