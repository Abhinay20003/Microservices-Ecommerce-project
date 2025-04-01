import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, Routes } from '@angular/router';


import { SellerLoginComponent } from './component/seller-login/seller-login.component';
import { SellerSignupComponent } from './component/seller-signup/seller-signup.component';
const routes: Routes = [
  { path: '', redirectTo: 'seller-login', pathMatch: 'full' },  // ✅ Redirects to login
  { path: 'seller-login', component: SellerLoginComponent },   // ✅ Login route
  { path: 'seller-signup', component: SellerSignupComponent }, // ✅ Signup route
];

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes)]
};
