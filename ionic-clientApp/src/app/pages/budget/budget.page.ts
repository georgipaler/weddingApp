import { Component, OnInit } from "@angular/core";
import { IExpense, expenses_list } from "src/model/interfaces";
import { THIS_EXPR } from "@angular/compiler/src/output/output_ast";

@Component({
  selector: "app-budget",
  templateUrl: "./budget.page.html",
  styleUrls: ["./budget.page.scss"]
})
export class BudgetPage implements OnInit {
  public expenses: Array<IExpense> = expenses_list;

  public lineChartData: Array<any> = [];
  public lineChartLabels: Array<any> = [];

  weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  thisMonth = ["1-5", "6-10", "11-15", "15-20", "21-25"];
  allTime = ["2017", "2018", "2019"];

  constructor() {}

  ngOnInit() {
    console.log("costs", this.getMonthExpenses());
    this.thisMonth.push("26-" + this.getNumberOfDays());
    this.lineChartLabels = this.thisMonth;

    this.lineChartData = [{ data: this.getMonthExpenses(), label: "Expenses" }];

    let curr = new Date();
    let week = [];

    for (let i = 1; i <= 7; i++) {
      let first = curr.getDate() - curr.getDay() + i;
      let day = new Date(curr.setDate(first)).toISOString().slice(0, 10);
      week.push(day);
    }

    console.log(week);
  }

  changeMode(modeBudget: string) {
    switch (modeBudget) {
      case "thisMonth":
        this.lineChartLabels = this.thisMonth;
        this.lineChartData = [
          { data: this.getMonthExpenses(), label: "Expenses" }
        ];
        break;
      case "thisWeek":
        this.lineChartLabels = this.weekDays;
        this.lineChartData = [
          { data: [65, 100, 80, 81, 56, 55, 40], label: "Expenses" }
        ];
        break;
      case "allTime":
        this.lineChartLabels = this.allTime;
        this.lineChartData = [{ data: [100, 150, 250], label: "Expenses" }];
        break;
      default:
      // code block
    }
  }

  //get number of days in curretn month
  getNumberOfDays(): number {
    var month = new Date().getMonth();
    var d = new Date(2008, month + 1, 0);

    return d.getDate();
  }

  //get expenses of this month
  getMonthExpenses() {
    var sum = 0;
    var dataArr = [];
    for (let i = 1; i <= this.getNumberOfDays(); i++) {
      for (let exp of this.expenses) {

        if(exp.date.getDate() == i){
          console.log("month day", exp.date.getDate(), i, exp.cost);
          sum += exp.cost;
        }
      
      }
      if (i % 5 == 0) {
        console.log("6 intra", sum);
        dataArr.push(sum);
        sum = 0;
      }
    }
    return dataArr;
  }
}
