import { Component, OnInit, Input } from "@angular/core";
import { LoaderService } from "src/app/services/loader/loader.service";
import { CostsService } from "src/app/services/costs/costs.service";
import { IExpense } from "src/model/interfaces";
import { MonthSearchCostsPipe } from "../../../pipes/monthSearchCosts/month-search-costs.pipe";

@Component({
  selector: "app-costs-details",
  templateUrl: "./costs-details.component.html",
  styleUrls: ["./costs-details.component.scss"]
})
export class CostsDetailsComponent implements OnInit {
  costs: IExpense[];
  @Input("opacity") opacity: boolean;
  @Input("searchedMonth") searchedMonth: number;

  constructor(
    private loaderServ: LoaderService,
    private noteService: CostsService,
    private pipe: MonthSearchCostsPipe
  ) {}

  ngOnInit() {
    this.loaderServ.present();
    this.costs = this.noteService.expenses;
    this.loaderServ.dismiss();
  }

  getCostsArray(): IExpense[]{
    return this.pipe.transform(this.costs, this.searchedMonth);
  }

  getMonth(): string {
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];
    if(!this.costs || this.costs.length <= 0 || !this.searchedMonth ) {
      return 'All time';
    }
    return monthNames[this.searchedMonth] + ' ' + this.costs[0].date.getFullYear();
  }
}
