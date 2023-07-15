import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private router: Router) {}

    createAccount() {
      // Implement your logic for creating a new account here
      // For example, navigate to the account creation page
      this.router.navigate(['/account-creation']);
    }

    navigateToLoginPage(role: string) {
      // Implement your logic for navigating to the login page with the selected role
      this.router.navigate(['/login'], { queryParams: { role: role } });
    }

  }
