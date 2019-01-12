import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginScreenComponent} from './Components/login-screen/login-screen.component';
import {MemberZoneComponent} from './Components/member-zone/member-zone.component';
import {RegistrierenScreenComponent} from './Components/registrieren-screen/registrieren-screen.component';
import {WgCreateComponent} from './Components/member-zone/wg-create/wg-create.component';
import {MemberZoneRedirectComponent} from './Components/member-zone/member-zone-redirect.component';

/**
 * Autor: Yves Stalder
 * Version: 1.0
 * Datum: 16.10.2018
 * Routes für die Applikation
 */
export const appRoutes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginScreenComponent},
  {path: 'registrieren', component: RegistrierenScreenComponent},
  {path: 'member', component: MemberZoneComponent },
  {path: 'member-redirect', component: MemberZoneRedirectComponent },
  {path: 'createwg', component: WgCreateComponent },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes, {useHash: true});


