import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-guest',
  templateUrl: './add-guest.component.html',
  styleUrls: ['./add-guest.component.scss'],
})
export class AddGuestComponent implements OnInit {

  
  public addGuest : FormGroup;

  constructor( private formBuilder: FormBuilder,
    private modalController: ModalController, ) {
  }

  ngOnInit() {
    this.initAddGuestForm();
  }

  initAddGuestForm(){
    this.addGuest = this.formBuilder.group({
      name: ['', Validators.required],
      phoneNumber: [''],
      membersNo: [''],
      confirmation: [''],
      notes: [''],
      sentInvitation:[''],
      tableNo:[''],
      menu:['']
    });
  }

  geolocate(){
    
  }

  logForm(){
    console.log(this.addGuest.value)
  }

  async dismissModal(){
    await this.modalController.dismiss();
  }
}
