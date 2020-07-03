import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private _angularFireAuth: AngularFireAuth, private fireauth: AngularFireAuth) { }

  login(cred: LoginCre): Promise<any>{
    return this._angularFireAuth.
    signInWithEmailAndPassword(cred.email,cred.password);
  }

  signUp_EP(cred: LoginCre): Promise<any>{
    return this._angularFireAuth.
    createUserWithEmailAndPassword(cred.email,cred.password);
  } 

 
  
}

export interface LoginCre{
  email: string;
  password: string;
}

