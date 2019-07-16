import { Injectable } from '@angular/core';
import { INote, NOTES_LIST } from 'src/model/interfaces';
import { NativeStorage } from '@ionic-native/native-storage/ngx';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  notes: INote[] = [];

  newNote: INote = {
    id: Math.random(),
    date: new Date(),
    content: ''
  };
  constructor(
    private nativeStorage: NativeStorage
  ) {

  }

  setNewNote(note: INote) {
    this.newNote.id = note.id;
    this.newNote.date = note.date;
    this.newNote.content = note.content;
  }
  getAllNotes() {
    return this.nativeStorage.getItem('notes').then(res => {
      this.notes = res;
      return Promise.all(this.notes);
    });
  }

  saveNote(note: INote) {
    this.notes.unshift(note);
    this.nativeStorage.setItem('notes', this.notes)
    .then(
      () => console.log('Stored notes!'),
      error => console.error('Error storing item', error)
    );
  }

  deleteNote(note: INote) {
    const removeIndex = this.notes.map(function (item) { return item.id; }).indexOf(note.id);
    // remove object
    this.notes.splice(removeIndex, 1);
    this.nativeStorage.setItem('notes', this.notes)
    .then(
      () => console.log('Stored notes!'),
      error => console.error('Error storing item', error)
    );
  }

  resetNote() {
    this.newNote = {
      id: Math.random(),
      date: new Date(),
      content: ''
    };

    this.syncNotes();
  }

  syncNotes() {
    this.nativeStorage.setItem('notes', this.notes)
    .then(
      () => console.log('Stored notes!'),
      error => console.error('Error storing item', error)
    );
  }

  isEditMode() {
    return this.newNote.content.length > 0;
  }

  prefillNote(): INote {
    return this.newNote;
  }
}
