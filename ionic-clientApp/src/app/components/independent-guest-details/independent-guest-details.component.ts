import { Component, OnInit } from '@angular/core';
import { IGROUP, IGuest } from 'src/model/interfaces';
import { NavParams, ModalController, AlertController } from '@ionic/angular';
import { AddGuestComponent } from '../add-guest/add-guest.component';
import { GuestsService } from 'src/app/services/guests/guests.service';

@Component({
  selector: 'app-independent-guest-details',
  templateUrl: './independent-guest-details.component.html',
  styleUrls: ['./independent-guest-details.component.scss'],
})
export class IndependentGuestDetailsComponent implements OnInit {

  guest: IGuest;

  constructor(public navParams: NavParams,
    private modalController: ModalController,
    public alertController: AlertController,
    private guestService: GuestsService
  ) { }


  ngOnInit() {
    this.guest = this.navParams.get('guest');
    console.log('guest', this.guest);
  }
  async editGuest() {
    const modal: HTMLIonModalElement = await this.modalController.create({
      component: AddGuestComponent,
      componentProps: { guest: this.guest }
    });

    modal.onDidDismiss().then(data => {
      this.guest = data['data'];
    });

    modal.present();

  }

  deleteGuest() {
    this.presentAlertConfirm();
  }


  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      header: 'Confirm!',
      message: `Are you sure you want to remove ${this.guest.name}`,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Okay',
          handler: () => {
            console.log('Confirm Okay');
            this.guestService.deleteGuest(this.guest);
            this.dismissModal('delete');
          }
        }
      ]
    });
    await alert.present();
  }

  async dismissModal(info: string) {

    if (info === 'delete') {
      await this.modalController.dismiss();
    } else {
      this.guestService.deleteGuest(this.guest);
      this.guestService.addGuest(this.guest);
      await this.modalController.dismiss(this.guest);
    }

  }


}
