import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DonorLandingPage } from './donor-landing.page';

const routes: Routes = [
  {
    path: '',
    component: DonorLandingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DonorLandingPageRoutingModule {}
