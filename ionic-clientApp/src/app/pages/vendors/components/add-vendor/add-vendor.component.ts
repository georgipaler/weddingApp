import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Vendor } from 'src/model/interfaces';

@Component({
  selector: 'app-add-vendor',
  templateUrl: './add-vendor.component.html',
  styleUrls: ['./add-vendor.component.scss'],
})
export class AddVendorComponent implements OnInit {


  vendor: Vendor;

  vendorForm: FormGroup;

  constructor(
    private modalController: ModalController,
    private formBuilder: FormBuilder
    ) {}

  ngOnInit() {
    this.initVendorForm();
  }

  initVendorForm() {
    this.vendorForm = this.formBuilder.group({
      name: new FormControl('', {
        validators: Validators.compose([Validators.required]),
        updateOn: 'change'
    }),
      role: new FormControl('', {
        validators: Validators.compose([Validators.required]),
        updateOn: 'change'
    }),
      phoneNumber: new FormControl('', {
        validators: Validators.compose([Validators.required]),
        updateOn: 'change'
    })
    });
  }

  async save() {
    console.log('form', this.vendorForm.value);
    const vendorValue = {
      id: 1,
      name: this.vendorForm.value.name,
      role: this.vendorForm.value.role,
      phoneNumber: this.vendorForm.value.phoneNumber
    };
    await this.modalController.dismiss(vendorValue);
  }

  async dismissModalCancel() {
    await this.modalController.dismiss();
  }

}
