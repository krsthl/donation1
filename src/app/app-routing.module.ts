import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LandingPage } from './landing/landing.page';
import { DashboardPage } from './dashboard/dashboard.page';
import { DonorLandingPage } from './donor-landing/donor-landing.page';
import { DonorDashboardPage } from './donor-dashboard/donor-dashboard.page';

const routes: Routes = [
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: 'welcome', loadChildren: () => import('./welcome/welcome.module').then(m => m.WelcomePageModule) },
  { path: 'landing', loadChildren: () => import('./landing/landing.module').then(m => m.LandingPageModule) },
  { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardPageModule) },
  { path: 'create-account', loadChildren: () => import('./create-account/create-account.module').then(m => m.CreateAccountPageModule) },
  { path: 'donate', loadChildren: () => import('./donate/donate.module').then(m => m.DonatePageModule) },

  { path: '', redirectTo: '/landing', pathMatch: 'full' },
  { path: 'landing', component: LandingPage },
  { path: 'dashboard', component: DashboardPage },
  {
    path: 'donor-landing',
    loadChildren: () => import('./donor-landing/donor-landing.module').then( m => m.DonorLandingPageModule)
  },
  {
    path: 'donor-dashboard',
    loadChildren: () => import('./donor-dashboard/donor-dashboard.module').then( m => m.DonorDashboardPageModule)
  },

  {
    path: 'donor/landing',
    component: DonorLandingPage
  },
  {
    path: 'donor/dashboard',
    component: DonorDashboardPage
  },
  {
    path: 'loginpage-admin',
    loadChildren: () => import('./loginpage-admin/loginpage-admin.module').then( m => m.LoginpageAdminPageModule)
  },
  {
    path: 'loginpage-donor',
    loadChildren: () => import('./loginpage-donor/loginpage-donor.module').then( m => m.LoginpageDonorPageModule)
  },  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'tabadmin',
    loadChildren: () => import('./tabadmin/tabadmin.module').then( m => m.TabadminPageModule)
  }


];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
