import { Component, OnInit } from '@angular/core';
import { CalendarComponentOptions } from 'ion2-calendar';
import { IAppointment, Appointment_List } from 'src/model/interfaces';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.page.html',
  styleUrls: ['./schedule.page.scss'],
})
export class SchedulePage implements OnInit {

  dateMulti: string[];
  type: 'string'; // 'string' | 'js-date' | 'moment' | 'time' | 'object'
  optionsMulti: CalendarComponentOptions = {
    pickMode: 'multi'
  };
  weekView: boolean = false;

  appointments : IAppointment[] =Appointment_List;

  constructor() { }

  ngOnInit() {
    console.log("date", this.dateMulti, this.type);
    this.appointments = this.appointments.filter(app => app.date.getMonth() == 4);
  }

  toggleWeekView(){
    this.weekView = true;
  }
  toggleMonthView(){
    this.weekView = false;
  }

  onChange($event) {
    console.log($event);
    console.log("multiDate", this.dateMulti);
  }
}
