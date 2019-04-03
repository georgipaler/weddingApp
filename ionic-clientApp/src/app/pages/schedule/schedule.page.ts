import { Component, OnInit } from '@angular/core';
import { CalendarComponentOptions } from 'ion2-calendar';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.page.html',
  styleUrls: ['./schedule.page.scss'],
})
export class SchedulePage implements OnInit {
  date: string;
  type: 'string'; 
  constructor() { }

  ngOnInit() {
  }

  onChange($event) {
    console.log($event);
  }
}
