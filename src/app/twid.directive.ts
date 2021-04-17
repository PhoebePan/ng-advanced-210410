import { Directive } from '@angular/core';
import { Validator, NG_VALIDATORS, FormControl } from '@angular/forms';
import { ValidateTwId } from './login2/ValidateTwId';

@Directive({
  selector: '[twid][ngModel]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: TwidDirective, multi: true }
  ]
})

export class TwidDirective implements Validator {
  validate(c: FormControl): { [key: string]: any } {
    return ValidateTwId(c);
  }
}
