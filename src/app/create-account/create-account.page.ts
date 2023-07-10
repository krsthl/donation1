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

  constructor(private router: Router) {}

  submitForm() {
    // Perform account creation logic here
    // ...

    // Navigate to the appropriate landing page or dashboard based on user type
    const userType = 'donor' as 'admin' | 'donor'; // Type assertion to 'admin' | 'donor'
    if (userType === 'admin') {
      this.router.navigate(['/admin-landing']); // Navigate to Admin Landing page
    } else {
      this.router.navigate(['/donor-dashboard']); // Navigate to Donor Dashboard page
    }
  }
}
