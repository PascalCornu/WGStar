/**
 * Copyright (C) Schweizerische Bundesbahnen SBB, 2016.
 *
 * Routendefinition
 *
 * @author u220374 (Reto Lehmann)
 * @version: 2.0.0
 * @since 14.07.2016, 2016.
 */
import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginScreenComponent} from './Components/login-screen/login-screen.component';
import {MemberZoneComponent} from './Components/member-zone/member-zone.component';
import {RegistrierenScreenComponent} from './Components/registrieren-screen/registrieren-screen.component';


export const appRoutes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginScreenComponent},
  {path: 'member', component: MemberZoneComponent },
  {path: 'registrieren', component: RegistrierenScreenComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes, {useHash: true});


