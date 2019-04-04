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
  uniqueDays : string[] = [];
  constructor() { }

  ngOnInit() {
    console.log("date", this.date, this.type);

    this.appointments = this.appointments.filter(app => app.date.getMonth() == 4);

    this.appointments.map(app => {
      this.uniqueDays.push(app.date.toDateString());
    });
    this.uniqueDays = Array.from(new Set(this.uniqueDays));
    console.log(this.uniqueDays, "uniq");
  }

  onChange($event) {
    console.log($event);
  }
}
