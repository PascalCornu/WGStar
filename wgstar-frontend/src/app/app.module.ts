import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {routing} from './app.routes';

import { AppComponent } from './app.component';
import { NavComponent } from './Components/nav/nav.component';
import { LoginScreenComponent } from './Components/login-screen/login-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LoginScreenComponent
  ],
  imports: [
    BrowserModule,
    routing,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
