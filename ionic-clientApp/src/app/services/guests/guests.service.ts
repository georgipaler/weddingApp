import { Injectable } from '@angular/core';
import { IGuest, IGROUP } from 'src/model/interfaces';

@Injectable({
  providedIn: 'root'
})
export class GuestsService {

  private guestsList: IGuest[] = [];

  constructor() { }

  deleteGuest(guest: IGuest) {
    const removeIndex = this.guestsList.map(function (item) { return item.id; }).indexOf(guest.id);
    // remove object
    this.guestsList.splice(removeIndex, 1);
  }

  addGuest(guest: IGuest) {
    this.guestsList.push(guest);
  }

  getAllGuest(): IGuest[] {
    return this.guestsList;
  }

  getGuestByGroup(group: IGROUP): IGuest[] {
    return this.guestsList.filter(
      guest => guest.group === group.name
    );
  }
}
