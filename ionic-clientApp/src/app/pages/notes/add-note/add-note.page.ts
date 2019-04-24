import { Component, OnInit } from '@angular/core';
import { INote } from 'src/model/interfaces';
import { NoteService } from 'src/app/services/notes/note.service';
import { Router } from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.page.html',
  styleUrls: ['./add-note.page.scss'],
})
export class AddNotePage implements OnInit {

  newNote: INote ;

  constructor(private noteService: NoteService,
    private router: Router,
    private _location: Location) { }

  ngOnInit() {

    this.newNote = this.noteService.newNote;
  }

  saveNote(){
    this.noteService.saveNote(this.newNote);
    console.log(this.newNote.content);
    this._location.back();
  }

}
