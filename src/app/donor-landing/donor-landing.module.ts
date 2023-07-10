import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DonorLandingPageRoutingModule } from './donor-landing-routing.module';

import { DonorLandingPage } from './donor-landing.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DonorLandingPageRoutingModule
  ],
  declarations: [DonorLandingPage]
})
export class DonorLandingPageModule {}
