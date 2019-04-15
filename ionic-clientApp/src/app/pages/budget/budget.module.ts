import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { BudgetPage } from './budget.page';
import { ChartsModule } from 'ng2-charts';
import { ChartComponent } from 'src/app/components/chart/chart.component';

const routes: Routes = [
  {
    path: '',
    component: BudgetPage
  }
];

@NgModule({
  entryComponents:[ 
    ChartComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ChartsModule
  ],
  declarations: [BudgetPage,
  ChartComponent]
})
export class BudgetPageModule {}
