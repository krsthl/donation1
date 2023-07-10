import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DonorDashboardPage } from './donor-dashboard.page';

const routes: Routes = [
  {
    path: '',
    component: DonorDashboardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DonorDashboardPageRoutingModule {}
