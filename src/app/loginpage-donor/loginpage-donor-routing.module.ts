import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginpageDonorPage } from './loginpage-donor.page';

const routes: Routes = [
  {
    path: '',
    component: LoginpageDonorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginpageDonorPageRoutingModule {}
