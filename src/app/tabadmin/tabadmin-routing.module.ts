import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabadminPage } from './tabadmin.page';

const routes: Routes = [
  {
    path: '',
    component: TabadminPage,
    children: [
      { path: 'landing', loadChildren: () => import('../landing/landing.module').then(m => m.LandingPageModule) },

      { path: 'dashboard', loadChildren: () => import('../dashboard/dashboard.module').then(m => m.DashboardPageModule) },
      { path: 'donate', loadChildren: () => import('../donate/donate.module').then(m => m.DonatePageModule) },
    ]
  },
  {
    path: '',
    redirectTo: '/tabadmin/landing',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabadminPageRoutingModule {}
