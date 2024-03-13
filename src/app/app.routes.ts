import { Routes } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { SettlementsComponent } from './components/settlements/settlements.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';

export const routes: Routes = [
  {path: "", component: LandingPageComponent},
  {path: "settlements", component: SettlementsComponent},
  {path: "login", component: LoginComponent},
  {path: "register", component: RegisterComponent},

];