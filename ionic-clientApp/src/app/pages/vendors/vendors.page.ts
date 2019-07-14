import { Component, OnInit } from '@angular/core';
import { Vendor } from 'src/model/interfaces';
import { ExpandableComponent } from 'src/app/components/expandable/expandable.component';
import { ModalController, AlertController } from '@ionic/angular';
import { AddVendorComponent } from './components/add-vendor/add-vendor.component';

@Component({
  selector: 'app-vendors',
  templateUrl: './vendors.page.html',
  styleUrls: ['./vendors.page.scss'],
})
export class VendorsPage implements OnInit {

  vendorsList: Vendor[] = [
    {
      name: 'Alina Drumea',
      role: 'Florist',
      phoneNumber: '+40749049983'
    },
    {
      name: 'Lia Miruna',
      role: 'Photograph',
      phoneNumber: '+40749049983'
    },
  ];
  constructor(
    private modalController: ModalController,
    public alertController: AlertController
  ) { }

  ngOnInit() {
  }


  async addNewVendor() {
    const modal: HTMLIonModalElement = await this.modalController.create({
      component: AddVendorComponent,
    });

    modal.onDidDismiss().then(data => {
      if (data['data']) {
        this.vendorsList.push(data['data']);
      }
    });

    modal.present();
  }

  deleteVendor(note: Vendor) {
    this.presentAlertConfirm(note);
  }

  async presentAlertConfirm(vendor: Vendor) {
    const alert = await this.alertController.create({
      header: 'Confirm!',
      message: `Are you sure you want to remove this vendor?`,
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
            this.deleteVendorByIndex(vendor);
          }
        }
      ]
    });
    await alert.present();
  }

  deleteVendorByIndex(vendor: Vendor) {
    const removeIndex = this.vendorsList.map(function (item) { return item.id; }).indexOf(vendor.id);
    // remove object
    this.vendorsList.splice(removeIndex, 1);
  }

}
