import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { CostsPage } from './costs.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { SharedModule } from 'src/app/pipes/shared.module';
import { MonthSearchCostsPipe } from 'src/app/pipes/monthSearchCosts/month-search-costs.pipe';
import { AddCostComponent } from './add-cost/add-cost.component';

const routes: Routes = [
  {
    path: '',
    component: CostsPage
  }
];

@NgModule({
  declarations: [
    CostsPage,
    AddCostComponent
  ],
  imports: [
    SharedModule,
    ComponentsModule,
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  entryComponents: [AddCostComponent],
  providers: [MonthSearchCostsPipe],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]

})
export class CostsPageModule {}
