import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { GroupDetailsPage } from './group-details.page';
import { AddGuestComponent } from 'src/app/components/add-guest/add-guest.component';
import { ExpandableComponent } from 'src/app/components/expandable/expandable.component';

const routes: Routes = [
  {
    path: '',
    component: GroupDetailsPage
  }
];

@NgModule({
  entryComponents: [
    AddGuestComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    GroupDetailsPage,
    AddGuestComponent,
    ExpandableComponent,
  ]
})
export class GroupDetailsPageModule {}
