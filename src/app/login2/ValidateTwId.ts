import { FormControl, ValidationErrors } from '@angular/forms';
import { isNationalIdentificationNumberValid } from 'taiwan-id-validator2';

export function ValidateTwId(c: FormControl): ValidationErrors | null {
  if (!c.value) {
    return null;
  }
  let result = isNationalIdentificationNumberValid(c.value);
  if (result) {
    return null;
  } else {
    return {
      twid: true
    };
  }
}
