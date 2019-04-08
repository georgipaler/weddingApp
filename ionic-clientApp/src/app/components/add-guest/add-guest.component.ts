import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ImportContacsComponent } from '../import-contacs/import-contacs.component';

@Component({
  selector: 'app-add-guest',
  templateUrl: './add-guest.component.html',
  styleUrls: ['./add-guest.component.scss'],
})
export class AddGuestComponent implements OnInit {


  private addGuest: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private modalController: ModalController, ) {
  }

  ngOnInit() {
    this.initAddGuestForm();
  }

  initAddGuestForm() {
    this.addGuest = this.formBuilder.group({
      name: ['', Validators.required],
      phoneNumber: [''],
      membersNo: [''],
      confirmation: [''],
      notes: [''],
      sentInvitation: [''],
      tableNo: [''],
      menu: ['']
    });
  }

  geolocate() {

  }

  logForm() {
    console.log(this.addGuest.value)
  }

  async goToContacts() {
    const modal: HTMLIonModalElement =
      await this.modalController.create({
        component: ImportContacsComponent,
      });

    modal.present();

  }


  async dismissModal() {
    await this.modalController.dismiss();
  }
}
