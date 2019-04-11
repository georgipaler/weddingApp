import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, ModalController } from '@ionic/angular';
import * as moment from 'moment'
import { ViewController } from '@ionic/core';

@Component({
  selector: 'app-event-modal',
  templateUrl: './event-modal.component.html',
  styleUrls: ['./event-modal.component.scss'],
})
export class EventModalComponent implements OnInit {

  event = {
    title: '',
    startTime: new Date().toISOString(), 
    endTime: new Date().toISOString(), 
    allDay: false
  };

  minDate = new Date().toISOString();
  constructor(public navController: NavController,
    public navParams: NavParams,
    private modalController: ModalController
    ) { 

    const preselectedDate = moment(this.navParams.get('selectedDay')).format();
      this.event.startTime  = preselectedDate;
      this.event.endTime  = preselectedDate;
  }

  ngOnInit() {}

  save(){
   this.dismissModal();
  }

  async dismissModal(){
    await this.modalController.dismiss(this.event);
  }

}
