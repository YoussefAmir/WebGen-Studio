import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  constructor() { }
  
  static getValidatorErrorMessage(validatorValue?: any) {
    let config = {
      required: 'Required',
      invalidPhone: 'Is invalid phone number',
      invalidEmailAddress: 'Invalid email address',
      invalidPassword:
        'Invalid password. Password must be at least 6 characters long, and contain a number.',
    };
    return config;
  }

  static emailValidator(control) {
    
    // RFC 2822 compliant regex
    if (
      control.value.match(
        /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
      )
    ) {
      return null;
    } else {
      return { invalidEmailAddress: true };
    }
  }

  static passwordValidator(control) {
    // {6,100}           - Assert password is between 6 and 100 characters
    // (?=.*[0-9])       - Assert a string has at least one number
    if (control.value.match(/^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{6,100}$/)) {
      return null;
    } else {
      return { invalidPassword: true };
    }
  }

  static phoneValidator(control) {
    
    if (control.value.length == 11) {
      return null;
    } else {
      return { invalidPhone: true };
    }
  }
}
