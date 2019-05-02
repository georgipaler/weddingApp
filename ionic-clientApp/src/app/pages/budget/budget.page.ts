import { Component, OnInit, ViewChild } from "@angular/core";
import { IExpense, expenses_list } from "src/model/interfaces";
import { THIS_EXPR } from "@angular/compiler/src/output/output_ast";
import { IonSlides } from "@ionic/angular";
import * as Chart from 'chart.js';

@Component({
  selector: "app-budget",
  templateUrl: "./budget.page.html",
  styleUrls: ["./budget.page.scss"]
})
export class BudgetPage implements OnInit {
  public expenses: Array<IExpense> = expenses_list;

  page: string ="0";
  public lineChartData: Array<any> = [];
  barChartFirst: any;
  barChartLast: any;
  @ViewChild("slider") slider: IonSlides;
  @ViewChild("barCanvas") barCanvas;
  @ViewChild("barCanvasLast") barCanvasLast;

  constructor() {}

  ngOnInit() {
    this.barChartFirst = new Chart("barChart", {
      type: "bar",
      data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [
          {
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: 
              "rgba(168, 126, 103, 0.2)"
            ,
            hoverBackgroundColor: "rgba(168, 126, 103, 0.5)",
            borderColor: 
              "rgba(168, 126, 103, 0.5)"
            ,
            hoverBorderColor:   "rgba(168, 126, 103, 0.7)",
            borderWidth: 1
          }
        ]
      },
      options: {
        title: {
          text: "Bar Chart",
          display: false
        },
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true
              }
            }
          ]
        }
      }
    });

    this.barChartLast = new Chart("barChartLast", {
      type: "bar",
      data: {
        labels: [ "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [
          {
            data: [10, 20, 17, 19, 23, 25],
            backgroundColor: 
              "rgba(168, 126, 103, 0.2)"
            ,
            hoverBackgroundColor: "rgba(168, 126, 103, 0.5)",
            borderColor: 
              "rgba(168, 126, 103, 0.5)"
            ,
            hoverBorderColor:   "rgba(168, 126, 103, 0.7)",
            borderWidth: 1
          }
        ]
      },
      options: {
        title: {
          text: "Bar Chart",
          display: false
        },
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true
              }
            }
          ]
        }
      }
    });
  }

    // events
    public chartClicked(e: any): void {
      console.log(e);
    }
  
    public chartHovered(e: any): void {
      console.log(e);
    }

  //change selected button Sing In/ Sign Up
  changeButton(event) {
    this.slider.getActiveIndex().then(index => (this.page = index.toString()));
  }

  //change slide on click SignIn/SignUp button
  segmentChanged(event) {
    this.slider.slideTo(event.detail.value);
  }

  // changeMode(modeBudget: string) {
  //   switch (modeBudget) {
  //     case "thisMonth":
  //       this.lineChartData = [
  //         { data: this.getMonthExpenses(), label: "Expenses" }
  //       ];
  //       break;
  //     case "thisWeek":
  //       this.lineChartData = [
  //         { data: [65, 100, 80, 81, 56, 55, 40], label: "Expenses" }
  //       ];
  //       break;
  //     case "allTime":
  //       this.lineChartData = [{ data: [100, 150, 250], label: "Expenses" }];
  //       break;
  //     default:
  //     // code block
  //   }
  // }

  // //get number of days in curretn month
  // getNumberOfDays(): number {
  //   var month = new Date().getMonth();
  //   var d = new Date(2008, month + 1, 0);

  //   return d.getDate();
  // }

  // //get expenses of this month
  // getMonthExpenses() {
  //   var sum = 0;
  //   var dataArr = [];
  //   for (let i = 1; i <= this.getNumberOfDays(); i++) {
  //     for (let exp of this.expenses) {

  //       if(exp.date.getDate() == i){
  //         console.log("month day", exp.date.getDate(), i, exp.cost);
  //         sum += exp.cost;
  //       }

  //     }
  //     if (i % 5 == 0) {
  //       console.log("6 intra", sum);
  //       dataArr.push(sum);
  //       sum = 0;
  //     }
  //   }
  //   return dataArr;
  // }
}
