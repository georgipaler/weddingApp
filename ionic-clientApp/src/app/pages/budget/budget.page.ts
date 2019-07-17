import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Cost } from '../costs/cost.model';
import { CostsService } from 'src/app/services/costs/costs.service';


@Component({
  selector: 'app-budget',
  templateUrl: './budget.page.html',
  styleUrls: ['./budget.page.scss']
})
export class BudgetPage implements OnInit {
  public searchedMonth: number ;
  public totalSumTiDisplay: number;

  constructor(
    private router: Router,
    private costService: CostsService) {}

  ngOnInit() {
    this.costService.calcTotalCost();
    this.totalSumTiDisplay = this.costService.getTotalSum();
  }

  getTotalCost() {
    this.costService.calcTotalCost();
    return this.costService.getTotalSum();
  }

  changeMonth(event: number) {
    this.searchedMonth = event;
  }

  displayTotalCosts() {
    this.searchedMonth = null;
  }
}
