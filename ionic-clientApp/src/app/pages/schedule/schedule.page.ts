import { Component, OnInit } from '@angular/core';
import { CalendarComponentOptions } from 'ion2-calendar';
import { IAppointment, Appointment_List } from 'src/model/interfaces';
import * as moment from 'moment';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.page.html',
  styleUrls: ['./schedule.page.scss'],
})
export class SchedulePage implements OnInit {

  dateMulti: moment.Moment[] = [];
  type: 'string'; // 'string' | 'js-date' | 'moment' | 'time' | 'object'
  optionsMulti: CalendarComponentOptions = {
    pickMode: 'multi'
  };
  weekView: boolean = false;

  appointments : IAppointment[] =Appointment_List;

  constructor() { }

  ngOnInit() {
    console.log("date", this.dateMulti, this.type);
    this.appointments = this.appointments.filter(app => app.date.getMonth() == 3);
    this.appointments.map(el=> {

      const newMom = moment(el.date);
      console.log(el.date);
      this.dateMulti.push(newMom);
    });
    
  }

  toggleWeekView(){
    this.weekView = true;
  }
  toggleMonthView(){
    this.weekView = false;
  }

  onChange($event) {
    console.log($event);
    const newMoment = moment($event.time);
    console.log("moment", newMoment);
    console.log("multiDate", this.dateMulti);
  }
}
