import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ValidationService } from './validation.service';

import { AngularFireModule } from "@angular/fire";
import { environment } from "../environments/environment";

import { RegisterService } from "./register.service";

import {MatSnackBarModule} from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    BrowserAnimationsModule,
    MatSnackBarModule
  ],
  providers: [ValidationService, RegisterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
