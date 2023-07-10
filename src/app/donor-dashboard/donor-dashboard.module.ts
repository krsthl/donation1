import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DonorDashboardPageRoutingModule } from './donor-dashboard-routing.module';

import { DonorDashboardPage } from './donor-dashboard.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DonorDashboardPageRoutingModule
  ],
  declarations: [DonorDashboardPage]
})
export class DonorDashboardPageModule {}
