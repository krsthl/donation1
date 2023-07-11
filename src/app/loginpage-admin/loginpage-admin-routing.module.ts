import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginpageAdminPage } from './loginpage-admin.page';

const routes: Routes = [
  {
    path: '',
    component: LoginpageAdminPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginpageAdminPageRoutingModule {}
