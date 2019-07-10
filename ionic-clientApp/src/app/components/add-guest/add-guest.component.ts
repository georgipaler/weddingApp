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
    this.newGuest = this.navParams.get("guest");
    console.log("group name", this.groupName);
    console.log("guest", this.newGuest);
    this.initFormValues();
  }

  initAddGuestForm() {
    this.addGuest = this.formBuilder.group({
      name: ['', Validators.required],
      phoneNumber: [''],
      membersNo: [''],
      confirmation: [''],
      address: [''],
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

      modal.onDidDismiss().then(data => {
        if(data["data"]){
          this.addGuest.patchValue({
            name: data["data"].name.formatted,
            phoneNumber: data["data"].phoneNumbers[0].value});
        }
      });

    modal.present();
  }

  logForm(){
    console.log(this.addGuest.value);

    this.newGuest = {
      id: 10,
      group: this.groupName ? this.groupName.name : this.newGuest.group ,
      name: this.addGuest.value.name,
      phoneNumber: this.addGuest.value.phoneNumber,
      membersNo:  this.addGuest.value.membersNo,
      isVegetarian: this.addGuest.value.menu,
      address:this.addGuest.value.address,
      response: this.addGuest.value.confirmation,
      sentInvitation : this.addGuest.value.sentInvitation,
      notes: this.addGuest.value.notes,
      tableNo: this.addGuest.value.tableNo,
    };

    console.log("new guest addModal", this.newGuest);
    this.dismissModal();
  }

  initFormValues(){
    if(!this.newGuest){
      return;
    }
    this.addGuest.patchValue({
      name: this.newGuest.name,
      phoneNumber: this.newGuest.phoneNumber,
      membersNo: this.newGuest.membersNo,
      confirmation: this.newGuest.response,
      address: this.newGuest.address,
      notes: this.newGuest.notes,
      sentInvitation: this.newGuest.sentInvitation,
      tableNo: this.newGuest.tableNo,
      menu: this.newGuest.isVegetarian
    });
  }

  async dismissModal(){
    await this.modalController.dismiss(this.newGuest);
  }
}
