import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginpageDonorPageRoutingModule } from './loginpage-donor-routing.module';

import { LoginpageDonorPage } from './loginpage-donor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginpageDonorPageRoutingModule
  ],
  declarations: [LoginpageDonorPage]
})
export class LoginpageDonorPageModule {}
