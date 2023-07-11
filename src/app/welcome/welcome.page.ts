import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: 'welcome.page.html',
  styleUrls: ['welcome.page.scss'],
})
export class WelcomePage {
  constructor(private router: Router) {}

  navigateToLoginPage(role: string) {
    if (role === 'admin') {
      this.router.navigate(['/loginpage-admin']);
    } else if (role === 'donor') {
      this.router.navigate(['/loginpage-donor']);
    }
  }
  createAccount() {
    this.router.navigateByUrl('/create-account');
  }
}
