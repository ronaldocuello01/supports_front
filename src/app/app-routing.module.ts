import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


// components
import { DashComponent } from "./components/dash/dash.component";
import { LoginComponent } from "./components/login/login.component";
import { ServicesComponent } from "./components/services/services.component";


// guards
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/dash',
    pathMatch: 'full'
  },
  {
    path: 'dash',
    component: DashComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'services',
    component: ServicesComponent,
    canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
