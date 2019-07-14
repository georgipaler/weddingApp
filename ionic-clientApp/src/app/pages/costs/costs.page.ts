import { Component, OnInit, OnDestroy } from '@angular/core';
import { CostsService } from 'src/app/services/costs/costs.service';
import { ModalController } from '@ionic/angular';
import { Cost } from './cost.model';
import { Subscription } from 'rxjs';
import { AddCostComponent } from 'src/app/components/add-cost/add-cost.component';

@Component({
  selector: 'app-costs',
  templateUrl: './costs.page.html',
  styleUrls: ['./costs.page.scss']
})
export class CostsPage implements OnInit, OnDestroy {
  public expenses: Array<Cost>;
  private expensesSub: Subscription;

  constructor(private modalController: ModalController,
    private costService: CostsService) { }

  ngOnInit() {
    this.expensesSub = this.costService.expenses.subscribe(costs => this.expenses = costs);
  }

  async addNewCost() {
    const modal: HTMLIonModalElement = await this.modalController.create({
      component: AddCostComponent,
    });

    modal.onDidDismiss().then(data => {
      if (data['data']) {
        const newCost: Cost = data['data'];
        this.costService.addCost(newCost.title, new Date(newCost.dueDate), newCost.category, newCost.totalSum, newCost.paid, newCost.notes);
        this.expenses.push(newCost);
      }
    });
    modal.present();
  }

  ngOnDestroy() {
    this.expensesSub.unsubscribe();
  }


  ionViewWillLeave() { }
}
