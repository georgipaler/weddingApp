import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { NavController, ModalController, AlertController } from '@ionic/angular';
import { EventModalComponent } from '../event-modal/event-modal.component';
import { IEvent } from 'src/model/interfaces';
import * as moment from 'moment';
import { NativeStorage } from '@ionic-native/native-storage/ngx';

@Component({
  selector: 'app-day-mode',
  templateUrl: './day-mode.component.html',
  styleUrls: ['./day-mode.component.scss'],
})
export class DayModeComponent implements OnInit {

  // tslint:disable-next-line:no-input-rename
  @Input('calendarMode') calendarMode: string;
  eventSource = [];
  viewTitle: string;
  selectedDay = new Date();

  calendar = {
    mode: 'day',
    currentDate: this.selectedDay
  };

  constructor(
    public navCtrl: NavController,
    private modalController: ModalController,
    private alertController: AlertController,
    private nativeStorage: NativeStorage
  ) { }

  ngOnInit() {
    this.nativeStorage.getItem('events').then(res => {
      console.log('events from native', res);
      const events = res;
      events.forEach(ev => {
        ev.startTime = new Date(ev.startTime );
        ev.endTime = new Date(ev.endTime);
      });
      this.eventSource = events;
    },
      error => console.error(error)
    );
  }


  async addEvent() {
    const modal: HTMLIonModalElement =
      await this.modalController.create({
        component: EventModalComponent,
        componentProps: {
          selectedDay: this.selectedDay
        }
      });

    modal.onDidDismiss().then((data) => {
      if (data !== null) {
        const eventData: IEvent = data['data'];
        eventData.startTime = new Date(data['data'].startTime);
        eventData.endTime = new Date(data['data'].endTime);

        const events = this.eventSource;
        events.push(eventData);
        this.eventSource = [];
        setTimeout(() => {
          this.eventSource = events;
          console.log('The result:', this.eventSource);
          this.nativeStorage.setItem('events', events)
            .then(
              () => console.log('Stored events!', events),
              error => console.error('Error storing item', error)
            );
        });
      }
    });

    await modal.present();
  }
  onViewTitleChanged(title) {
    this.viewTitle = title;
  }
  onTimeSelected(ev) {
    this.selectedDay = ev.selectedTime;
  }

  onEventSelected(event) {
    const start = moment(event.startTime).format('LLLL');
    const end = moment(event.endTime).format('LLLL');

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
