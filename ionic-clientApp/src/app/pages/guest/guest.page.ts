import { Component, OnInit } from '@angular/core';
import { IGROUP, GROUP_LIST, IGuest } from 'src/model/interfaces';
import { Router, NavigationExtras } from '@angular/router';
import { GuestsService } from 'src/app/services/guests/guests.service';
import { LoaderService } from 'src/app/services/loader/loader.service';
import { NativeStorage } from '@ionic-native/native-storage/ngx';

@Component({
  selector: 'app-guest',
  templateUrl: './guest.page.html',
  styleUrls: ['./guest.page.scss'],
})
export class GuestPage implements OnInit {


  groupsList: Array<IGROUP> = GROUP_LIST;
  newGroupName = '';
  showInput = false;
  guestsList: IGuest[];

  totalAccepted: number;
  totalInvited: number;
  totalGuest: number;

  constructor(
    private router: Router,
    private guestService: GuestsService,
    private loader: LoaderService,
    private nativeStorage: NativeStorage
    ) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.totalAccepted = 0;
    this.totalInvited = 0;
    this.totalGuest = 0;

    this.guestService.getAllGuest().then(res => {
      this.guestsList = res;
      this.guestsList.map( guest => guest.response === 'accepted' ? this.totalAccepted++ : this.totalAccepted);
      this.guestsList.map( guest => guest.sentInvitation ? this.totalInvited++ : this.totalInvited);
      this.totalGuest = this.guestsList.length;
    });
    this.nativeStorage.getItem('groups').then(res => this.groupsList = res);
  }

  showNewInput() {
    this.showInput = true;
  }

  addNewGroup() {
    const newGroup = {
      id: this.groupsList.length + 1,
      name: this.newGroupName === '' ? 'New group' : this.newGroupName
    };

    this.hideInput();
    this.groupsList.unshift(newGroup);
    this.nativeStorage.setItem('groups', this.groupsList)
    .then(
      () => console.log('Stored group!'),
      error => console.error('Error storing item', error)
    );
  }

  hideInput() {
    this.showInput = false;
    this.newGroupName = '';
  }

  goToGroupDetails(group: IGROUP) {

    const navigationExtras: NavigationExtras = {
      queryParams: {
        data: JSON.stringify(group)
      }
    };
    this.router.navigate(['welcome/tabs/guests/groupDetails'], navigationExtras);
  }
}
