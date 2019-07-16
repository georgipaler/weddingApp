import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { LoaderService } from 'src/app/services/loader/loader.service';
import { CostsService } from 'src/app/services/costs/costs.service';
import { MonthSearchCostsPipe } from '../../../pipes/monthSearchCosts/month-search-costs.pipe';
import { ModalService } from './modal/modal.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Cost } from '../../costs/cost.model';
import { AlertController, ModalController } from '@ionic/angular';
import { AddCostComponent } from 'src/app/components/add-cost/add-cost.component';

@Component({
  selector: 'app-costs-details',
  templateUrl: './costs-details.component.html',
  styleUrls: ['./costs-details.component.scss']
})
export class CostsDetailsComponent implements OnInit, OnDestroy {
  modalOpen: boolean;
  costs: Cost[];
  expensesSub: Subscription;
  // tslint:disable-next-line:no-input-rename
  @Input('searchedMonth') searchedMonth: number;

  constructor(
    private loaderServ: LoaderService,
    private pipe: MonthSearchCostsPipe,
    private modalService: ModalService,
    public route: ActivatedRoute,
    private costService: CostsService,
    public alertController: AlertController,
    private modalController: ModalController
  ) { }

  ngOnInit() {
    console.log('ngOnIniti');
    this.modalOpen = this.modalService.isModalOpen;
    this.loaderServ.present();

    this.expensesSub = this.costService.expenses.subscribe(costs => {
      this.costs = costs;
      this.loaderServ.dismiss();
    });


    this.route.paramMap.subscribe(paramMap => {
      if (!paramMap.has('searchedMonth')) {
        return;
      }
    });
  }

  calculateTotalCost(): void {
    let costTotal: number;
    this.costs.forEach(element => {
      costTotal += element.totalSum;
    });
    console.log('emit', costTotal);
  }
  getCostsArray(): Cost[] {
    return this.pipe.transform(this.costs, this.searchedMonth);
  }

  deleteCost(cost: Cost) {
    this.presentAlertConfirm(cost);
  }


  async presentAlertConfirm(cost: Cost) {
    const alert = await this.alertController.create({
      header: 'Confirm!',
      message: 'Are you sure you want to remove this cost?',
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
            this.costService.deleteCost(cost);
          }
        }
      ]
    });
    await alert.present();
  }

  async editCost(cost: Cost) {
    const modal: HTMLIonModalElement = await this.modalController.create({
      component: AddCostComponent,
      componentProps: { cost: cost }
    });

    modal.onDidDismiss().then(data => {
      if (data['data']) {
        const newCost: Cost = data['data'];
        this.costService.deleteCost(newCost);
        this.costService.addCost(newCost.title, new Date(newCost.dueDate), newCost.category, newCost.totalSum, newCost.paid, newCost.notes);
        this.costs.push(newCost);
      }
    });
    modal.present();
  }

  getMonth(): string {
    const monthNames = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December'
    ];
    if (
      !this.costs ||
      this.costs.length <= 0 ||
      (!this.searchedMonth && this.searchedMonth !== 0)
    ) {
      return 'All time';
    }
    return (
      monthNames[this.searchedMonth] + ' ' + this.costs[0].dueDate.getFullYear()
    );
  }

  ngOnDestroy() {
    this.expensesSub.unsubscribe();
  }
}
