import { Component, OnInit, Input } from "@angular/core";
import { LoaderService } from "src/app/services/loader/loader.service";
import { CostsService } from "src/app/services/costs/costs.service";
import { IExpense } from "src/model/interfaces";
import { MonthSearchCostsPipe } from '../../../pipes/monthSearchCosts/month-search-costs.pipe'

@Component({
  selector: "app-costs-details",
  templateUrl: "./costs-details.component.html",
  styleUrls: ["./costs-details.component.scss"]
})
export class CostsDetailsComponent implements OnInit {

  costs: IExpense[];
  @Input('opacity') opacity: boolean;
  @Input('searchedMonth') searchedMonth : number;

  constructor(
    private loaderServ: LoaderService,
    private noteService: CostsService
  ) {}

  ngOnInit() {
    this.loaderServ.present();
    this.costs = this.noteService.expenses;
    this.loaderServ.dismiss();
  }
}
