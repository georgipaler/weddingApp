import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { INote, NOTES_LIST } from 'src/model/interfaces';
import { Router } from '@angular/router';
import { LoaderService } from 'src/app/services/loader/loader.service';
import { NoteService } from 'src/app/services/notes/note.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.page.html',
  styleUrls: ['./notes.page.scss'],
})
export class NotesPage implements OnInit {

  notes: INote[] = [];

  constructor(public alertController: AlertController,
    private router: Router,
    private loaderServ: LoaderService,
    private noteService: NoteService) { }

  ngOnInit() {
    this.noteService.getAllNotes().then(res => this.notes = res);
  }

  ionViewWillEnter() {
    this.noteService.getAllNotes().then(res => this.notes = res);
  }

  addNote(note: INote, types: string) {
    if (note) {
      this.noteService.setNewNote(note);
    } else {
      this.noteService.resetNote();
    }
    this.router.navigateByUrl('welcome/tabs/home/addNote');
  }

  dateFormat(date: Date) {
    return date.toString();
  }

  deleteNote(note: INote) {
    this.presentAlertConfirm(note);
  }

  async presentAlertConfirm(note: INote) {
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
            this.noteService.deleteNote(note);
            this.noteService.getAllNotes().then(res => this.notes = res);
          }
        }
      ]
    });
    await alert.present();
  }

}
