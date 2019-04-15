import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-budget",
  templateUrl: "./budget.page.html",
  styleUrls: ["./budget.page.scss"]
})
export class BudgetPage implements OnInit {
  public lineChartData: Array<any> = [
    { data: [65, 100, 80, 81, 56, 55, 40], label: "Expenses" }
  ];
  public lineChartLabels: Array<any> = [];
  weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  thisMonth = ["1-5", "6-10", "11-15", "15-20", "21-25", "26-30"];
  allTime = ["2017", "2018", "2019"];
  constructor() {}

  ngOnInit() {
    this.lineChartLabels = this.thisMonth;

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
          { data: [30, 100, 0, 45, 25, 55], label: "Expenses" }
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
        this.lineChartData = [
          { data: [100, 150, 250], label: "Expenses" }
        ];
        break;
      default:
      // code block
    }
  }
}
