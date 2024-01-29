import {Routes} from '@angular/router';

export const routes: Routes = [
  {
    path: 'dashboard-landing',
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: 'setting-landing',
    loadChildren: () => import('./setting/setting.module').then(m => m.SettingModule)
  }
];
