import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { BudgetPage } from './budget.page';
import { ChartsModule } from 'ng2-charts';
import { ChartComponent } from './chart/chart.component';
import { MonthSearchCostsPipe } from '../../pipes/monthSearchCosts/month-search-costs.pipe';
import { SharedModule } from 'src/app/pipes/shared.module';
import { ComponentsModule } from 'src/app/components/components.module';
import { CostsDetailsComponent } from './costs-details/costs-details.component';
import { AddCostComponent } from 'src/app/components/add-cost/add-cost.component';

const routes: Routes = [
  {
    path: '',
    component: BudgetPage
  }
];

@NgModule({
  imports: [
    ComponentsModule,
    SharedModule,
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ChartsModule,
  ],
  declarations: [
    BudgetPage,
    ChartComponent
  ],
  providers: [
    MonthSearchCostsPipe
  ],
  entryComponents: [
    ChartComponent,
    CostsDetailsComponent,
    AddCostComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class BudgetPageModule {}
