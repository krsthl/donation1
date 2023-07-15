import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-donor-landing',
  templateUrl: 'donor-landing.page.html',
  styleUrls: ['donor-landing.page.scss']
})
export class DonorLandingPage {

  constructor(private router: Router) {}

  navigateToDashboard() {
    this.router.navigate(['/welcome']);
  }

}
