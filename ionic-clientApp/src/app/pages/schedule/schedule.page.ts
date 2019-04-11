import { Component, OnInit } from '@angular/core';
import { CalendarComponentOptions } from 'ion2-calendar';
import { IAppointment, Appointment_List, IEvent } from 'src/model/interfaces';
import { NavController, ModalController, AlertController } from '@ionic/angular';
import * as moment from 'moment'
import { EventModalComponent } from './event-modal/event-modal.component';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.page.html',
  styleUrls: ['./schedule.page.scss'],
})
export class SchedulePage implements OnInit {

  eventSource = [];
  viewTitle:string;
  selectedDay = new Date();
  calendarMode: string ="month";



  constructor(
    public navCtrl: NavController,
    private modalController: ModalController,
    private alertController: AlertController
  ) { }

  ngOnInit() {
  }



  changeMode(modeCal: string){
    this.calendarMode = modeCal;
  }




}
