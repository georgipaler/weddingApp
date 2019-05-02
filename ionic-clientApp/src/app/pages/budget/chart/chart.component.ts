import { Component, OnInit, Input, ViewChild } from "@angular/core";
import * as Chart from "chart.js";

@Component({
  selector: "app-chart",
  templateUrl: "./chart.component.html",
  styleUrls: ["./chart.component.scss"]
})
export class ChartComponent implements OnInit {
  @Input("lineChartData") lineChartData: Array<any>;
  @Input("lineChartLabels") lineChartLabels: Array<any>;
  @ViewChild("barCanvas") barCanvas;

  constructor() {}

  barChart: any;
  ngOnInit() {
    this.barChart = new Chart("barChart", {
      type: "bar",
      data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [
          {
            data: [12, 19, 3, 5, 2, 3, 10, 20, 17, 19, 23, 25],
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

}
