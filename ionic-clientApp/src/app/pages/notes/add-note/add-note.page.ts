import { Component, OnInit } from '@angular/core';
import { INote } from 'src/model/interfaces';
import { NoteService } from 'src/app/services/notes/note.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.page.html',
  styleUrls: ['./add-note.page.scss'],
})
export class AddNotePage implements OnInit {

  newNote: INote = {
    content: '',
    date: new Date()
  };
  editNote = false;

  constructor(private noteService: NoteService,
    private router: Router,
    private _location: Location) { }

  ngOnInit() {
    this.newNote = {
      id: Math.random(),
      date: new Date(),
      content: ''
    };
      this.editNote = this.noteService.isEditMode();
      if ( this.editNote ) {
        this.newNote = this.noteService.prefillNote();
      }
    }


  saveNote() {
    if (!this.editNote) {
      this.noteService.saveNote(this.newNote);
    }

    if (this.editNote) {
      this.noteService.setNewNote(this.newNote);
      this.noteService.deleteNote(this.newNote);
      this.noteService.saveNote(this.newNote);
    }
    this._location.back();
  }

}
