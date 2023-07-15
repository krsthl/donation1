import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private router: Router) {}


  navigateToLoginPage(role: string) {
    if (role === 'admin') {
      this.router.navigate(['/loginpage-admin']);
    } else if (role === 'donor') {
      this.router.navigate(['/loginpage-donor']);
    }
  }

    createAccount() {
      // Implement your logic for creating a new account here
      // For example, navigate to the account creation page
      this.router.navigate(['/account-creation']);
    }

   

  }
