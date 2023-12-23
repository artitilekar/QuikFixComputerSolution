import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'QuikSolution';
  // Declare variables to hold form field values
  fullName: string = '';
  email: string = '';
  password: string = '';
  repeatPassword: string = '';

  // Function to handle form submission
  onSubmit(): void {
    // Check if passwords match
    if (this.password !== this.repeatPassword) {
      alert('Passwords do not match. Please check.');
      return;
    }

    // Form is valid, you can proceed with form submission
    // For example, you can send the form data to a server or perform other actions.
    // Here, we'll just log the form data to the console.
    console.log('Form submitted with the following data:');
    console.log('Full Name:', this.fullName);
    console.log('Email:', this.email);
    console.log('Password:', this.password);
  }
}
