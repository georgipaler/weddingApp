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

  newNote: INote = {
    content: '',
    date: new Date()
  };
  editNote: boolean = false;

  constructor(private noteService: NoteService,
    private router: Router,
    private _location: Location) { }

  ngOnInit() {

    if(this.noteService.newNote.content){
      this.editNote = true;
      this.newNote = this.noteService.newNote;
    }
  
  }

  saveNote(){
    if(!this.editNote){
      this.noteService.saveNote(this.newNote);
      console.log(this.newNote.content);
    }

    if(this.editNote){
      this.noteService.newNote.content = this.newNote.content;
    }

    this._location.back();
  }

}
