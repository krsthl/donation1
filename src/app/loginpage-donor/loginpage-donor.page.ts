import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-loginpage-donor',
  templateUrl: './loginpage-donor.page.html',
  styleUrls: ['./loginpage-donor.page.scss'],
})
export class LoginpageDonorPage implements OnInit {

  constructor(private navCtrl: NavController) {}

  navigateToDonorLanding() {

    this.navCtrl.navigateForward('/donate');
  }


  ngOnInit() {
  }
}