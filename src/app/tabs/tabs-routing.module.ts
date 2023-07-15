import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'donor-landing',
        loadChildren: () => import('../donor-landing/donor-landing.module').then(m => m.DonorLandingPageModule)
      },
      {
        path: 'donor-dashboard',
        loadChildren: () => import('../donor-dashboard/donor-dashboard.module').then(m => m.DonorDashboardPageModule)
      },
      { path: 'donate', loadChildren: () => import('../donate/donate.module').then(m => m.DonatePageModule) },
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/donor-landing',
    pathMatch: 'full'
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
