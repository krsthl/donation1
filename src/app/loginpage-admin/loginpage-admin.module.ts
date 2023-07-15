import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';

import { LoginpageAdminPageRoutingModule } from './loginpage-admin-routing.module';

import { LoginpageAdminPage } from './loginpage-admin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HttpClientModule,
    LoginpageAdminPageRoutingModule
  ],
  declarations: [LoginpageAdminPage]
})
export class LoginpageAdminPageModule {}
