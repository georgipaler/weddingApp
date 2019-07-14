import { Component, OnInit } from '@angular/core';
import { Vendor } from 'src/model/interfaces';
import { ExpandableComponent } from 'src/app/components/expandable/expandable.component';
import { ModalController } from '@ionic/angular';
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
    private modalController: ModalController
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

}
