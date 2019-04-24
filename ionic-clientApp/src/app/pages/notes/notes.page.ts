import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { INote, NOTES_LIST } from 'src/model/interfaces';
import * as moment from 'moment'
import { Router } from '@angular/router';
import { LoaderService } from 'src/app/services/loader/loader.service';
import { TouchSequence } from 'selenium-webdriver';
import { NoteService } from 'src/app/services/notes/note.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.page.html',
  styleUrls: ['./notes.page.scss'],
})
export class NotesPage implements OnInit {

  notes: INote[] = [];

  constructor( public alertController: AlertController,
    private router: Router,
    private loaderServ: LoaderService,
    private noteService: NoteService) { }

  ngOnInit() {
    this.loaderServ.present();
    this.notes = this.noteService.notes;
    this.loaderServ.dismiss();
  }

  addNote(note: INote){
    if(note){
      this.noteService.newNote = note;
    }
    this.router.navigateByUrl('welcome/tabs/home/addNote');
  }

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
