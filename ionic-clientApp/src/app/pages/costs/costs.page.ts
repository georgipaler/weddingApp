import { Component, OnInit } from "@angular/core";
import { CostsService } from "src/app/services/costs/costs.service";
import { ModalController } from "@ionic/angular";
import { AddCostComponent } from "./add-cost/add-cost.component";
import { Cost } from './cost.model';
import { Subscription } from 'rxjs';

@Component({
  selector: "app-costs",
  templateUrl: "./costs.page.html",
  styleUrls: ["./costs.page.scss"]
})
export class CostsPage implements OnInit {
  public expenses: Array<Cost>;
  private expensesSub: Subscription;

  constructor(private modalController: ModalController,
    private costService: CostsService) {}

  ngOnInit() {
    this.expensesSub = this.costService.expenses.subscribe( costs => this.expenses = costs);
  }

  addNewCost() {
    this.modalController
      .create({
        component: AddCostComponent
      })
      .then(modalEl => {
        modalEl.present();
      });
  }

  ngOnDestroy(){
    this.expensesSub.unsubscribe();
  }


  ionViewWillLeave() {}
}
