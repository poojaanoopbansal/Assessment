import { Directive } from '@angular/core';
import { NG_VALIDATORS, FormControl, Validator, ValidationErrors } from '@angular/forms';
@Directive({
    selector: '[birthYear][ngModel]',
    providers: [{provide: NG_VALIDATORS, useExisting: BirthYearValidatorDirective, multi: true}]
   })
   export class BirthYearValidatorDirective implements Validator {
   
    validate(c: FormControl): ValidationErrors {
      const numValue = new Date(c.value);
      const currentYear = new Date();
      const isValid = numValue <= currentYear ? true:false;
      const message = {
        'years': {
          'message': 'The year must be a valid number between '
        }
      };
      return isValid ? null : message;
    }
   }