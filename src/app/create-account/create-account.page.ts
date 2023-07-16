import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.page.html',
  styleUrls: ['./create-account.page.scss'],
})
export class CreateAccountPage {
  fullName!: string;
  email!: string;
  password!: string;
  successMessage: string | null = null;

  constructor(private router: Router) {}

  submitForm() {
    // Perform account creation logic here
    // ...

    // Show success message
    this.successMessage = 'Account created successfully';

    // Clear form fields
    this.fullName = '';
    this.email = '';
    this.password = '';
  }

}
