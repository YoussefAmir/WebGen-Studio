import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';


const routes: Routes = [
  { path: '', redirectTo: 'Path', pathMatch: 'full' },
  { path: 'Path',component:SignupComponent, pathMatch: 'full'},
  { path: 'Login', component: LoginComponent, pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
