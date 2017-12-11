import {FormControl} from '@angular/forms';

export class FormValidator {
  hasExclamationMark(input: FormControl) {
    const hasExclamation = input.value.indexOf('!') >= 0;
    return hasExclamation ? null : {needsExclamation: true};
  }
}
