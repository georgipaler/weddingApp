import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "./pages/auth/auth-guard/auth.guard";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full'
  },
  {
    path: "welcome",
    loadChildren: "./tabs/tabs.module#TabsPageModule",
    canLoad: [AuthGuard]
  },
  { 
    path: "auth", 
    loadChildren: "./pages/auth/auth.module#AuthPageModule" 
  },
  // { path: 'costs', loadChildren: './costs/costs.module#CostsPageModule' },
  // { path: 'add-note', loadChildren: './pages/notes/add-note/add-note.module#AddNotePageModule' },
  // { path: 'notes', loadChildren: './pages/notes/notes.module#NotesPageModule' }
  // { path: 'add-guest', loadChildren: './pages/guest/add-guest/add-guest.module#AddGuestPageModule' },
  // { path: 'group-details', loadChildren: './group-details/group-details.module#GroupDetailsPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
