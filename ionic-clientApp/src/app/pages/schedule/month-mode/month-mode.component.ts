import { Component, OnInit, Input } from '@angular/core';
import { NavController, ModalController, AlertController } from '@ionic/angular';
import { EventModalComponent } from '../event-modal/event-modal.component';
import { IEvent } from 'src/model/interfaces';
import * as moment from 'moment'

@Component({
  selector: 'app-month-mode',
  templateUrl: './month-mode.component.html',
  styleUrls: ['./month-mode.component.scss'],
})
export class MonthModeComponent implements OnInit {

  eventSource = [];
  viewTitle:string;
  selectedDay = new Date();
  // @Input('modeCalendar') mode : string ;

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
