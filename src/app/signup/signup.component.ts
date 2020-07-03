import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import { ValidationService } from '../validation.service';
import { LoginCre, RegisterService } from '../register.service';
import { Router } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  userForm: FormGroup;
  loginForm: FormGroup;

  errors: any;
  constructor(private formBuilder: FormBuilder,
    private _registerService: RegisterService,
    private _router: Router,
    private _snackbox: MatSnackBar,
    private angularfirestore: AngularFirestore

    ){
    this.userForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, ValidationService.emailValidator]],
      password: ['', [Validators.required, ValidationService.passwordValidator]],
      passwordRepeated: [''],
      phoneNumber: ['', [Validators.required, ValidationService.phoneValidator]],
      homeAddress: ['']
    })
    this.errors = ValidationService.getValidatorErrorMessage()

    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    })

  }

  ngOnInit(): void {
  }

  
  saveUser(){

    let id: number;
    const loginCre : LoginCre ={
      email: this.userForm.get('email').value,
      password: this.userForm.get('password').value
    }

    const info = {
      username: this.userForm.get('name').value,
      phone_number: this.userForm.get('phoneNumber').value,
      home_address: this.userForm.get('homeAddress').value
    }



    this._registerService.signUp_EP(loginCre)
    .then(authData=>{
      this._snackbox.open('User Login In Successful', 'close', {
        duration: 5000})

        this._router.navigate(['Login',info])
     
    })
    .catch(authError =>{
      this._snackbox.open('User Login Failed', 'close', {
        duration: 5000})
      })

  }

  login(){
    this._registerService.login(this.loginForm.value).then(authData=>{
      this._router.navigate(['Login'])

    })
    .catch(authError =>{
      window.alert("Login Failed")
    })
  }
  

}
