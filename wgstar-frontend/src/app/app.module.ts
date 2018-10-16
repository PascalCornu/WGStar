import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {routing} from './app.routes';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { NavComponent } from './Components/nav-login/nav.component';
import { LoginScreenComponent } from './Components/login-screen/login-screen.component';
import {PersonService} from './share/service/person.service';
import {MessageService} from './share/service/message.service';
import {HttpErrorHandler} from './share/service/http-error-handler.service';
import { MemberZoneComponent } from './Components/member-zone/member-zone.component';
import { NavMemberComponent } from './Components/nav-member/nav-member.component';
import { RegistrierenScreenComponent } from './Components/registrieren-screen/registrieren-screen.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LoginScreenComponent,
    MemberZoneComponent,
    NavMemberComponent,
    RegistrierenScreenComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    routing,
  ],
  providers: [
    PersonService,
    HttpErrorHandler,
    MessageService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
