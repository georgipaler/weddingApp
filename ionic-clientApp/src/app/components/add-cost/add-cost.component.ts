import { Component, OnInit } from '@angular/core';
import { ModalController, NavController, NavParams } from '@ionic/angular';
import { __await } from 'tslib';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { CostsService } from 'src/app/services/costs/costs.service';
import { Cost } from 'src/app/pages/costs/cost.model';

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

  finishTextButton = 'Add cost';
  pageTitle = 'Add new Cost';
  cost: Cost;
  costForm: FormGroup;
  options: String[] = ['Food & drink', 'Music', 'Flowers'];

  minDate = new Date().toISOString();
  constructor(public navController: NavController,
    public navParams: NavParams,
    private modalController: ModalController,
    private formBuilder: FormBuilder,
    private costService: CostsService
  ) { }

  ngOnInit() {
    this.initVendorForm();
    this. initFormValues();
    this.cost = this.navParams.get('cost');
    if ( this.cost ) {
      this.pageTitle = 'Edit cost';
      this.finishTextButton = 'Edit';
    }
  }

  initVendorForm() {
    this.costForm = this.formBuilder.group({
      title: new FormControl('', {
        validators: Validators.compose([Validators.required]),
        updateOn: 'change'
      }),
      totalCost: new FormControl('', {
        validators: Validators.compose([Validators.required]),
        updateOn: 'change'
      }),
      dueDate: new FormControl('', {
        validators: Validators.compose([Validators.required]),
        updateOn: 'change'
      }),
      paid: new FormControl(false, {
        updateOn: 'change'
      }),
      category: new FormControl('', {
        validators: Validators.compose([Validators.required]),
        updateOn: 'change'
      }),
      notes: new FormControl('', {
        updateOn: 'change'
      }),

    });
  }


  initFormValues() {
    if (!this.cost) {
      return;
    }
    this.costForm.patchValue({
      title: this.cost.title,
      totalCost: this.cost.totalSum,
      dueDate: this.cost.dueDate,
      paid: this.cost.paid,
      category: this.cost.category,
      notes: this.cost.notes
    });
  }

  async save() {
    if ( this.cost ) {
      this.costService.deleteCost(this.cost);
    }
    console.log('form', this.costForm.value);
    const costValue: Cost = {
      id: '1',
      title: this.costForm.value.title,
      dueDate: this.costForm.value.dueDate,
      category: this.costForm.value.category,
      totalSum: this.costForm.value.totalCost,
      paid: this.costForm.value.paid,
      notes: this.costForm.value.notes,
    };
    await this.modalController.dismiss(costValue);
  }
  async dismissModalCancel() {
    await this.modalController.dismiss();
  }

}
