import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { HomePage } from './home.page';
import { TranslateModule } from '@ngx-translate/core';
import { PopoverComponent } from 'src/app/components/popover/popover.component';
import { ViewProfileComponent } from './view-profile/view-profile.component';

const routes: Routes = [
  {
    path: '',
    component: HomePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    TranslateModule
  ],
  declarations: [HomePage, PopoverComponent, ViewProfileComponent]
  ,
  entryComponents: [
    PopoverComponent,
    ViewProfileComponent
  ]
})
export class HomePageModule {}
