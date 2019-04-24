import { Injectable } from '@angular/core';
import { INote, NOTES_LIST } from 'src/model/interfaces';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  notes: INote[] = NOTES_LIST;

  newNote: INote = {
    id: 12+this.notes.length,
    date: new Date(),
    content: ''
  };
  constructor() {
    
   }


  saveNote(note: INote){
    this.notes.unshift(note);
  }

  deleteNote(note: INote){
    var removeIndex = this.notes.map(function(item) { return item.id; }).indexOf(note.id);
    // remove object
    this.notes.splice(removeIndex, 1);
  }


  resetNote(){
    this.newNote = {
      id: 12+this.notes.length,
      date: new Date(),
      content: ''
    };
   }
}
