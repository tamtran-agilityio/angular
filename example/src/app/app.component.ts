import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, NgForm } from '@angular/forms';
import { ValidationService } from 'app/validation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    userForm: FormGroup;

    constructor(private formBuilder: FormBuilder) {
        this.userForm = this.formBuilder.group({
            'name': ['', Validators.required],
            'email': ['', [Validators.required, ValidationService.emailValidator]],
            'profile': ['', [Validators.required, Validators.minLength(10)]]
        });
    }

    ngOnInit() {
          // Set value form with serValue and patchValue
          // this.userForm.patchValue({name: 'Mahesh', email: 'test@gmail.com'});
          this.userForm.setValue({name: 'Mahesh', email: 'test@gmail.com',  profile: ''});
    }

    saveUser() {
        if (this.userForm.dirty && this.userForm.valid) {
            alert(`Name: ${this.userForm.value.name} Email: ${this.userForm.value.email}`);
        }
    }
}
