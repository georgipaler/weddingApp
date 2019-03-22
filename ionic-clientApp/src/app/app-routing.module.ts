import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'home', loadChildren: '../pages/home/home.module#HomePageModule' },
  { path: 'guest', loadChildren: '../pages/guest/guest.module#GuestPageModule' },
  { path: 'schedule', loadChildren: '../pages/schedule/schedule.module#SchedulePageModule' },
  { path: 'budget', loadChildren: '../pages/budget/budget.module#BudgetPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
