import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { IonicModule } from "@ionic/angular";

import { SchedulePage } from "./schedule.page";
import { CalendarModule } from "ion2-calendar";
import { WeekAppointmentsComponent } from "./week-appointments/week-appointments.component";
import { MonthAppointmentsComponent } from "./month-appointments/month-appointments.component";

const routes: Routes = [
  {
    path: "",
    component: SchedulePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    CalendarModule
  ],
  declarations: [
    SchedulePage,
    WeekAppointmentsComponent,
    MonthAppointmentsComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SchedulePageModule {}
