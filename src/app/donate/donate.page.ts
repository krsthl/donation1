import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { DonorLandingPage } from '../donor-landing/donor-landing.page';
@Component({
  selector: 'app-donate',
  templateUrl: 'donate.page.html',
  styleUrls: ['donate.page.scss'],
})
export class DonatePage {

  constructor(private navCtrl: NavController) {}

  navigateToLanding() {
    this.navCtrl.navigateBack('/landing');
    this.navCtrl.navigateForward('/donor-landing');
  }

  navigateToWelcome() {
    // Code to navigate to the Welcome page
  }

  donate() {
    // Add logic to handle the donation here
  }

  navigateToDonorLanding() {
    this.navCtrl.navigateForward('/donor-landing');
  }
  
}
