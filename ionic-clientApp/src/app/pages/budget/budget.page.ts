import { Component, OnInit, ViewChild } from "@angular/core";
import { IExpense, expenses_list } from "src/model/interfaces";
import { IonSlides } from "@ionic/angular";
import { Router } from '@angular/router';


@Component({
  selector: "app-budget",
  templateUrl: "./budget.page.html",
  styleUrls: ["./budget.page.scss"]
})
export class BudgetPage implements OnInit {
  public expenses: Array<IExpense> = expenses_list;
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
