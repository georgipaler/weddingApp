import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { BudgetPage } from './budget.page';
import { ChartsModule } from 'ng2-charts';
import { ChartComponent } from './chart/chart.component';
import { CostsDetailsComponent } from './costs-details/costs-details.component';
import { MonthSearchCostsPipe } from '../../pipes/monthSearchCosts/month-search-costs.pipe';
import { SharedModule } from 'src/app/pipes/shared.module';

const routes: Routes = [
  {
    path: '',
    component: BudgetPage
  }
];

@NgModule({
  entryComponents:[ 
    ChartComponent,
  ],
  imports: [
    SharedModule,
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ChartsModule,
  ],
  declarations: [
    BudgetPage,
    ChartComponent,
    CostsDetailsComponent
    
  ],
  providers: [
    MonthSearchCostsPipe
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class BudgetPageModule {}
