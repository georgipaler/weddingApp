import { Component, OnInit } from '@angular/core';
import { ModalController, NavController, NavParams } from '@ionic/angular';
import { __await } from 'tslib';

@Component({
  selector: 'app-add-cost',
  templateUrl: './add-cost.component.html',
  styleUrls: ['./add-cost.component.scss'],
})
export class AddCostComponent implements OnInit {

  event = {
    title: '',
    totalCost: new Date().toISOString(),
    dueDate: new Date().toISOString(),
    paid: false,
    category: '',
    notes: ''
  };

  options: String[] = ['Food & drink', 'Music', 'Flowers'];

  minDate = new Date().toISOString();
  constructor(public navController: NavController,
    public navParams: NavParams,
    private modalController: ModalController
    ) {}

  ngOnInit() {}

  async save() {
    console.log('form', this.event);
    await this.modalController.dismiss();
  }
  async dismissModalCancel() {
    await this.modalController.dismiss();
  }

}
