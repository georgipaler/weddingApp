import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CostsPage } from './costs.page';
import { CostsDetailsComponent } from '../budget/costs-details/costs-details.component';

const routes: Routes = [
  {
    path: '',
    component: CostsPage
  }
];

@NgModule({
  declarations: [
    CostsPage
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]

})
export class CostsPageModule {}
