import { Component, OnInit } from '@angular/core';
import { Vendor } from 'src/model/interfaces';
import { ExpandableComponent } from 'src/app/components/expandable/expandable.component';
import { ModalController, AlertController } from '@ionic/angular';
import { AddVendorComponent } from './components/add-vendor/add-vendor.component';
import { NativeStorage } from '@ionic-native/native-storage/ngx';

@Component({
  selector: 'app-vendors',
  templateUrl: './vendors.page.html',
  styleUrls: ['./vendors.page.scss'],
})
export class VendorsPage implements OnInit {

  vendorsList: Vendor[] = [];
  constructor(
    private modalController: ModalController,
    public alertController: AlertController,
    private nativeStorage: NativeStorage
  ) { }

  ngOnInit() {

    this.nativeStorage.getItem('vendors').then(res => {
      console.log('events from native', res);
      this.vendorsList = res;
    },
      error => console.error(error)
    );
  }


  async addNewVendor() {
    const modal: HTMLIonModalElement = await this.modalController.create({
      component: AddVendorComponent,
    });

    modal.onDidDismiss().then(data => {
      if (data['data']) {
        this.vendorsList.push(data['data']);

        this.nativeStorage.setItem('vendors', this.vendorsList)
            .then(
              () => console.log('Stored vendor!', this.vendorsList),
              error => console.error('Error storing item', error)
            );
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
