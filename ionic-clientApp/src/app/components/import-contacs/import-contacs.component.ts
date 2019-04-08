import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

import {Contacts, ContactFieldType, IContactFindOptions} from '@ionic-native/contacts'

@Component({
  selector: 'app-import-contacs',
  templateUrl: './import-contacs.component.html',
  styleUrls: ['./import-contacs.component.scss'],
})
export class ImportContacsComponent implements OnInit {
  ourType: ContactFieldType[] = ["displayName"];
  contactsFound =[];

  constructor(  private modalController: ModalController,
    private contacts: Contacts) { }

  ngOnInit() {
    this.search('');
  }

  search(q){
    const options: IContactFindOptions = {
      filter: q
    };
    this.contacts.find(this.ourType, options).then(contas => {
      this.contactsFound = contas;
    });
  }

  onKeyUp(ev){
    this.search(ev.target.value);
  }

  async dismissModal() {
    await this.modalController.dismiss();
  }
}
