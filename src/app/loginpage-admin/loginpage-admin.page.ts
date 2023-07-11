import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-loginpage-admin',
  templateUrl: './loginpage-admin.page.html',
  styleUrls: ['./loginpage-admin.page.scss'],
})
export class LoginpageAdminPage implements OnInit {

  constructor(private navCtrl: NavController) {}

  navigateToLanding() {
    // Perform any necessary login authentication here
  
    // Navigate to the landing page
    this.navCtrl.navigateForward('/landing');
  }
  
  ngOnInit() {
    // Initialization tasks or logic can be added here
  }
}