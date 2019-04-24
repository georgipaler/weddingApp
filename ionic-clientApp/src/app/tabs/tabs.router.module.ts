import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        children: [
          {
            path: '',
            loadChildren: '../pages/home/home.module#HomePageModule'
          },
          {
            path: 'notes',
            loadChildren: '../pages/notes/notes.module#NotesPageModule' 
          },
          {
            path: 'addNote',
            loadChildren: '../pages/notes/add-note/add-note.module#AddNotePageModule' 
          }
        ]
      },
      {
        path: 'guests',
        children: [
          {
            path: '',
            loadChildren: '../pages/guest/guest.module#GuestPageModule'
          },
          {
            path: 'groupDetails',
            loadChildren: '../pages/guest/group-details/group-details.module#GroupDetailsPageModule'
          }
        ]
      },
      {
        path: 'schedule',
        children: [
          {
            path: '',
            loadChildren: '../pages/schedule/schedule.module#SchedulePageModule'
          }
        ]
      },
      {
        path: 'budget',
        children: [
          {
            path: '',
            loadChildren: '../pages/budget/budget.module#BudgetPageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
