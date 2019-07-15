import { Component, OnInit } from '@angular/core';
import { IGROUP, IGuest, GUEST_LIST } from 'src/model/interfaces';
import { ActivatedRoute, Router } from '@angular/router';
import { AddGuestComponent } from 'src/app/components/add-guest/add-guest.component';
import { ModalController, Platform } from '@ionic/angular';
import { IndependentGuestDetailsComponent } from 'src/app/components/independent-guest-details/independent-guest-details.component';
import { GuestsService } from 'src/app/services/guests/guests.service';

@Component({
  selector: 'app-group-details',
  templateUrl: './group-details.page.html',
  styleUrls: ['./group-details.page.scss']
})
export class GroupDetailsPage implements OnInit {
  group: IGROUP;
  guestsList: Array<IGuest> = [];
  searchedText;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private modalController: ModalController,
    private guestService: GuestsService,
    private platform: Platform
  ) { }

  ngOnInit() {
    this.platform.ready().then(() => {
      this.route.queryParams.subscribe(params => {
        if (params && params.data) {
          this.group = JSON.parse(params.data);
        }
      });
      this.guestService.getGuestByGroup(this.group).then(res => this.guestsList = res);
    });

  }

  async addNewGuest() {
    const modal: HTMLIonModalElement = await this.modalController.create({
      component: AddGuestComponent,
      componentProps: { groupName: this.group }
    });

    modal.onDidDismiss().then(data => {
      if (data['data']) {
       this.guestService.addGuest(data['data']);
      }
      this.guestService.getGuestByGroup(this.group).then(res => this.guestsList = res);
    });

    modal.present();
  }

  async goToIndependentDetails(guest: IGuest) {
    const modal: HTMLIonModalElement = await this.modalController.create({
      component: IndependentGuestDetailsComponent,
      componentProps: { guest: guest }
    });

    modal.onDidDismiss().then(data => {
      // get null object if i click back button
      // get object i want be deleted if i click delete button
      this.guestService.getGuestByGroup(this.group).then(res => this.guestsList = res);
    });

    modal.present();
  }

  goBack() {
    this.router.navigate(['tabs/guests']);
  }
}
