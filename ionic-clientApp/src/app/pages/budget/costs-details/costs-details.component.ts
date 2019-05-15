import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from "@angular/core";
import { LoaderService } from "src/app/services/loader/loader.service";
import { CostsService } from "src/app/services/costs/costs.service";
import { IExpense } from "src/model/interfaces";
import { MonthSearchCostsPipe } from "../../../pipes/monthSearchCosts/month-search-costs.pipe";
import { TouchSequence } from "selenium-webdriver";
import { ModalController, IonContent } from "@ionic/angular";
import { ModalService } from "./modal/modal.service";
import { Content } from '@angular/compiler/src/render3/r3_ast';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: "app-costs-details",
  templateUrl: "./costs-details.component.html",
  styleUrls: ["./costs-details.component.scss"]
})
export class CostsDetailsComponent implements OnInit {
  modalOpen: boolean;
  costs: IExpense[];
  @Input('searchedMonth') searchedMonth: number;
  @Output() backToChart = new EventEmitter();

  constructor(
    private loaderServ: LoaderService,
    private noteService: CostsService,
    private pipe: MonthSearchCostsPipe,
    private modalController: ModalController,
    private modalService: ModalService,
    public route: ActivatedRoute,
  ) {}

  ngOnInit() {
    console.log("ngOnIniti")
    this.modalOpen = this.modalService.isModalOpen;
    this.loaderServ.present();
    this.costs = this.noteService.expenses;
    this.loaderServ.dismiss();

    this.route.paramMap.subscribe(paramMap => {
      if(!paramMap.has('searchedMonth')){
        return;
      }
      this.searchedMonth  = Number(paramMap.get('searchedMonth'));
    });
      
    //   get("searchedMonth")){
    //   console.log("searchmonth");
    //   this.searchedMonth = this.navParams.get("searchedMonth");
    // }
  }

  getCostsArray(): IExpense[] {
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
    if (
      !this.costs ||
      this.costs.length <= 0 ||
      (!this.searchedMonth && this.searchedMonth != 0)
    ) {
      return "All time";
    }
    return (
      monthNames[this.searchedMonth] + " " + this.costs[0].date.getFullYear()
    );
  }

  logScrolling(event) {
    if (this.modalOpen || !this.getCostsArray().length ) {
      return;
    }

    this.modalController
      .create({
        component: CostsDetailsComponent, 
        componentProps: {
          searchedMonth: this.searchedMonth
        }
      })
      .then(modalEl => {
        this.modalService.openModal();
        modalEl.present();
      });
  }

  dismissModal() {
    this.modalService.cloaseModal();
    this.modalController.dismiss();
  }
}
