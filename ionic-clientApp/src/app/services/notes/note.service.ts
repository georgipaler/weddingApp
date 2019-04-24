import { Injectable } from '@angular/core';
import { INote, NOTES_LIST } from 'src/model/interfaces';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  notes: INote[] = NOTES_LIST;

  newNote: INote = {
    date: new Date(),
    content: ''
  };
  constructor() { }


  saveNote(note: INote){
    this.notes.unshift(note);
  }
}
