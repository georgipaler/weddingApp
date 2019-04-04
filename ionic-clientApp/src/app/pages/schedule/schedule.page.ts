import { Component, OnInit } from '@angular/core';
import { CalendarComponentOptions } from 'ion2-calendar';
import { IAppointment, Appointment_List } from 'src/model/interfaces';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.page.html',
  styleUrls: ['./schedule.page.scss'],
})
export class SchedulePage implements OnInit {
  date: string;
  type: 'string'; 

  appointments : IAppointment[] =Appointment_List;
  constructor() { }

  ngOnInit() {
    console.log("date", this.date, this.type);
    this.appointments = Appointment_List.filter(app => app.date.getMonth() == 4);
  }

  onChange($event) {
    console.log($event);
  }
}
