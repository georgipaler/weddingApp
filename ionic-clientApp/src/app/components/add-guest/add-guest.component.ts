import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ImportContacsComponent } from '../import-contacs/import-contacs.component';
import { IGuest, IGROUP } from 'src/model/interfaces';

@Component({
  selector: 'app-add-guest',
  templateUrl: './add-guest.component.html',
  styleUrls: ['./add-guest.component.scss'],
})
export class AddGuestComponent implements OnInit {

  
  public addGuest : FormGroup;
  public groupName: IGROUP ;
  public newGuest: IGuest;

  constructor( private formBuilder: FormBuilder,
    private modalController: ModalController, 
    public navParams: NavParams) {
  }

  ngOnInit() {
    this.initAddGuestForm();
    this.groupName = this.navParams.get("groupName");
    console.log("group name", this.groupName);
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

  async goToContacts() {
    const modal: HTMLIonModalElement =
      await this.modalController.create({
        component: ImportContacsComponent,
      });

    modal.present();

  }

  logForm(){
    console.log(this.addGuest.value);

    this.newGuest = {
      id: 10,
      group: this.groupName.name,
      name: this.addGuest.value.name,
      phoneNumber: this.addGuest.value.phoneNumber,
      membersNo:  this.addGuest.value.membersNo,
      isVegetarian: this.addGuest.value.menu,
      address:this.addGuest.value.address,
      response: this.addGuest.value.confirmation,
      sentInvitation : this.addGuest.value.sentInvitation,
      notes: this.addGuest.value.notes
    };

    console.log("new guest", this.newGuest);
    this.dismissModal();
  }

  async dismissModal(){
    await this.modalController.dismiss(this.newGuest);
  }
}
