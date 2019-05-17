import { Component, OnInit, ViewChild } from "@angular/core";
import { Router } from '@angular/router';
import { Cost } from '../costs/cost.model';


@Component({
  selector: "app-budget",
  templateUrl: "./budget.page.html",
  styleUrls: ["./budget.page.scss"]
})
export class BudgetPage implements OnInit {
  public searchedMonth : number ;

  constructor( private router: Router) {}

  ngOnInit() {
  }

  changeMonth(event: number){
    this.searchedMonth = event;
  }
  backToChart(event: boolean){
    console.log("down", event);
  }

  displayTotalCosts(){
    this.searchedMonth = null;
  }

  ionViewWillLeave(){
  }

}
