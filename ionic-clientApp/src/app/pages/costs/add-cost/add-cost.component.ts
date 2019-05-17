import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { __await } from 'tslib';

@Component({
  selector: 'app-add-cost',
  templateUrl: './add-cost.component.html',
  styleUrls: ['./add-cost.component.scss'],
})
export class AddCostComponent implements OnInit {

  constructor( private modalController: ModalController) { }

  ngOnInit() {}

  async dismissModalCancel(){
    await this.modalController.dismiss();
  }

}
