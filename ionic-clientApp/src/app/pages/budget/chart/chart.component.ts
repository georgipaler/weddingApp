import { Component, OnInit, Input, ViewChild, Output, EventEmitter } from "@angular/core";
import * as Chart from "chart.js";
import { LoaderService } from 'src/app/services/loader/loader.service';
import { CostsService } from 'src/app/services/costs/costs.service';
import { Cost } from '../../costs/cost.model';
import { Subscription } from 'rxjs';

@Component({
  selector: "app-chart",
  templateUrl: "./chart.component.html",
  styleUrls: ["./chart.component.scss"]
})
export class ChartComponent implements OnInit {
  @Input("lineChartData") lineChartData: Array<any>;
  @Input("lineChartLabels") lineChartLabels: Array<any>;
  @Output() monthValueChange = new EventEmitter();
  @ViewChild("barCanvas") barCanvas;

  expensesSub: Subscription;
  costs: Cost[];
  
  constructor(private loaderServ: LoaderService,
    private costService: CostsService) {}

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  public barChartType = 'bar';
  public barChartLegend = false;
  public barChartData = [
    {
      data: [0, 0, 0, 0, 0, 0, 3, 10, 2, 0, 0, 0],
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
  ];


  barChart: any;
  ngOnInit() {
    this.loaderServ.present();
    this.expensesSub = this.costService.expenses.subscribe( costs => {
      this.costs = costs;
      this.loaderServ.dismiss();

      console.log(this.costs);
      this.costs.map(cost => console.log(cost.dueDate.getMonth()));
  
    });
  }

    // events
    public changeMonth(e: any): void {
    if(   e.active[0] != undefined ) {
      console.log(e.active[0]._index);
      this.monthValueChange.emit(e.active[0]._index);
    }
    
    }


}
