import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { INote, NOTES_LIST } from 'src/model/interfaces';
import * as moment from 'moment'

@Component({
  selector: 'app-notes',
  templateUrl: './notes.page.html',
  styleUrls: ['./notes.page.scss'],
})
export class NotesPage implements OnInit {

  notes: INote[] = NOTES_LIST;

  constructor( public alertController: AlertController,) { }

  ngOnInit() {
  }

  addNote(){}

  dateFormat(date: Date){
    return date.toLocaleDateString("en-US");
  }

  deleteNote(){
    this.presentAlertConfirm();
  }

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      header: 'Confirm!',
      message: `Are you sure you want to remove this note?`,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Okay',
          handler: () => {
            console.log('Confirm Okay');
            
          }
        }
      ]
    });
    await alert.present();
  }

}
