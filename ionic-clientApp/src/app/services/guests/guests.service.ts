import { Injectable } from '@angular/core';
import { IGuest, IGROUP } from 'src/model/interfaces';
import { NativeStorage } from '@ionic-native/native-storage/ngx';

@Injectable({
  providedIn: 'root'
})
export class GuestsService {

  private guestsList: IGuest[];

  constructor(
    private nativeStorage: NativeStorage
  ) { }

  deleteGuest(guest: IGuest) {
    const removeIndex = this.guestsList.map(function (item) { return item.name; }).indexOf(guest.name);
    // remove object
    this.guestsList.splice(removeIndex, 1);
    this.nativeStorage.setItem('guests', this.guestsList)
    .then(
      () => console.log('Stored guests!'),
      error => console.error('Error storing item', error)
    );
  }

  addGuest(guest: IGuest) {
    this.guestsList.push(guest);
    this.nativeStorage.setItem('guests', this.guestsList)
    .then(
      () => {
        console.log('Stored guests!');
      }
    )
    .catch(error => {
      console.error('Error storing item', error);
    });
  }

  getAllGuest() {
    return this.nativeStorage.getItem('guests').then(res => {
      this.guestsList = res;
      return Promise.all(this.guestsList);
    });
  }

  getGuestByGroup(group: IGROUP) {
    return this.nativeStorage.getItem('guests').then(res => {
      this.guestsList = res;
      const guests = this.guestsList.filter(
         guest => guest.group === group.name
      );

      return Promise.all(guests);
    });
  }
}
