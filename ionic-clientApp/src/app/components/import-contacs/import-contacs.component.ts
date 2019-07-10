import { Component, OnInit } from "@angular/core";
import { ModalController, NavController, NavParams, AlertController } from "@ionic/angular";

import {
  Contacts,
  ContactFieldType,
  IContactFindOptions,
  Contact
} from "@ionic-native/contacts";
import { DomSanitizer } from "@angular/platform-browser";
import { async } from 'q';

@Component({
  selector: "app-import-contacs",
  templateUrl: "./import-contacs.component.html",
  styleUrls: ["./import-contacs.component.scss"]
})
export class ImportContacsComponent implements OnInit {
  contactsfound = [];
  search = false;
  public contactList = [];
  searchedText :string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private contacts: Contacts,
    private contact: Contact,
    private sanitizer: DomSanitizer,
    private modalController: ModalController,
    private alertController: AlertController
  ) {}

  ngOnInit() {
    this.getContacts();
  }

  getContacts(): any {
    this.contacts.find(["displayName", "phoneNumbers"], {multiple: true}).then((contacts) => {
      this.contactList = contacts;
    });
      return this.contacts;
  }

  addContact(contactAdded){
    this.presentAlertConfirm(contactAdded);
  }


  async presentAlertConfirm(cont) {
    const alert = await this.alertController.create({
      header: 'Confirm!',
      message: `Are you sure you want to import ${cont.name.formatted}?`,
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
            this.dismissModal("add", cont);
          }
        }
      ]
    });
    await alert.present();
  }

  async dismissModal(mes: string, contactAdded) {
    if(mes === "add"){
      await this.modalController.dismiss(contactAdded);
      return;
    }
    await this.modalController.dismiss(null);
  }
}
