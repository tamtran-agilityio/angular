import { Directive } from '@angular/core';
import { NG_VALIDATORS } from '@angular/forms';
import { ValidationService } from './validation.service';

@Directive({
    selector: '[validateAddress][ngModel]',
    providers: [
        { provide: NG_VALIDATORS, useValue: ValidationService.validateAddress, multi: true }
    ]
})
export class ValidatorAddressDirective {}
