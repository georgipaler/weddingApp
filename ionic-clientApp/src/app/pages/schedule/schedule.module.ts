import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SchedulePage } from './schedule.page';
import { CalendarModule } from 'ion2-calendar';
import { NgCalendarModule } from 'ionic2-calendar';
import { EventModalComponent } from './event-modal/event-modal.component';


const routes: Routes = [
  {
    path: '',
    component: SchedulePage
  }
];

@NgModule({
  entryComponents: [
    EventModalComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    CalendarModule,
    NgCalendarModule
  ],
  declarations: [SchedulePage,
    EventModalComponent
],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class SchedulePageModule {}
