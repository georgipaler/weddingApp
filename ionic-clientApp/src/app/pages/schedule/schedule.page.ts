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

  calendar = {
    mode: 'month',
    currentDate: this.selectedDay
  }

  constructor(
    public navCtrl: NavController,
    private modalController: ModalController,
    private alertController: AlertController
  ) { }

  ngOnInit() {
  }


  async addEvent(){
    const modal: HTMLIonModalElement =
    await this.modalController.create({
       component: EventModalComponent,
       componentProps: {
          selectedDay: this.selectedDay
       }
 });
  
 modal.onDidDismiss().then((data) => {
    if (data !== null) {
      let eventData: IEvent = data['data'];
      eventData.startTime = new Date(data['data'].startTime);
      eventData.endTime = new Date(data['data'].endTime);

      let events = this.eventSource;
      events.push(eventData);
      this.eventSource = [];
      setTimeout(()=> {
        this.eventSource = events;
      });
      console.log('The result:', data);
    }
 });
 
 await modal.present();
  }
  onViewTitleChanged(title){
    this.viewTitle = title;
  }
  onTimeSelected(ev){
    this.selectedDay = ev.selectedTime;
  }

  onEventSelected(event){
    let start = moment(event.startTime).format('LLLL');
    let end = moment(event.endTime).format('LLLL'); 

    this.presentAlert(event, start, end);
  }


  async presentAlert(event, start, end) {
  
    const alert = await this.alertController.create({
      header: '' + event.title,
      message: 'From: ' + start + '<br> To: ' + end,
      buttons: ['OK']
    });
    return await alert.present();
  }

}
