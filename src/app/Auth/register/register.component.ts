import { Component, OnInit, Renderer2 } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registrationForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private renderer: Renderer2,

    public router: Router
  ) {
    this.createForm();
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  createForm() {
    this.registrationForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5)]],
      repeatpassword: ['', [Validators.required, Validators.minLength(5)]],
      acceptTerms: [false, Validators.requiredTrue], // Add this line for the checkbox
    });
  }

  onSubmit() {
    if (this.registrationForm.valid) {
      const password = this.registrationForm.get('password').value;
      const repeatPassword = this.registrationForm.get('repeatpassword').value;

      if (password !== repeatPassword) {
        // console.log();
        // ('Passwords do not match. Please re-enter.');

        alert('Passwords do not match. Please re-enter.');
      } else {
        console.log('Form submitted:', this.registrationForm.value);
      }
    } else {
      alert('Please fill out all required fields correctly.');
    }
  }
}
