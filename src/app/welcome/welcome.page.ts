import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: 'welcome.page.html',
  styleUrls: ['welcome.page.scss'],
})
export class WelcomePage {
  constructor(private router: Router) {}

  selectRole(role: string) {
    if (role === 'admin') {
      this.router.navigateByUrl('/landing');
    } else if (role === 'donor') {
      this.router.navigateByUrl('/donate');
    }
  }

  createAccount() {
    this.router.navigateByUrl('/create-account');
  }
}
