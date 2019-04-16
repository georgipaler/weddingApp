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
      console.log("contacts", this.contactList);
    });
    // this.contacts
    //   .find(["displayName", "phoneNumbers"], {
    //     multiple: true,
    //     hasPhoneNumber: true
    //   })
    //   .then(contacts => {
    //     for (var i = 0; i < contacts.length; i++) {
    //       if (contacts[i].displayName !== null) {
    //         var contact = {};
    //         contact["name"] = contacts[i].displayName;
    //         contact["number"] = contacts[i].phoneNumbers[0].value;
    //         this.contactList.push(contact);
    //       }
    //     }
    //   });

      return this.contacts;
  }



  addContact(cont){
    this.presentAlertConfirm(cont);
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

  async dismissModal(mes: string, cont) {
    if(mes === "add"){
      await this.modalController.dismiss(cont);
      return;
    }
    await this.modalController.dismiss(null);
  }
}
