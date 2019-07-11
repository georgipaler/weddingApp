import { Component, OnInit, Input, Output, EventEmitter, ViewChild, OnDestroy } from '@angular/core';
import { LoaderService } from 'src/app/services/loader/loader.service';
import { CostsService } from 'src/app/services/costs/costs.service';
import { MonthSearchCostsPipe } from '../../../pipes/monthSearchCosts/month-search-costs.pipe';
import { ModalService } from './modal/modal.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Cost } from '../../costs/cost.model';

@Component({
  selector: 'app-costs-details',
  templateUrl: './costs-details.component.html',
  styleUrls: ['./costs-details.component.scss']
})
export class CostsDetailsComponent implements OnInit, OnDestroy {
  modalOpen: boolean;
  costs: Cost[];
  expensesSub: Subscription;
  // tslint:disable-next-line:no-input-rename
  @Input('searchedMonth') searchedMonth: number;

  constructor(
    private loaderServ: LoaderService,
    private pipe: MonthSearchCostsPipe,
    private modalService: ModalService,
    public route: ActivatedRoute,
    private costService: CostsService
  ) { }

  ngOnInit() {
    console.log('ngOnIniti');
    this.modalOpen = this.modalService.isModalOpen;
    this.loaderServ.present();

    this.expensesSub = this.costService.expenses.subscribe(costs => {
      this.costs = costs;
      console.log(costs);
      this.loaderServ.dismiss();
    });


    this.route.paramMap.subscribe(paramMap => {
      if (!paramMap.has('searchedMonth')) {
        return;
      }
    });
  }

  calculateTotalCost(): void {
    let costTotal: number;
    this.costs.forEach(element => {
      costTotal += element.totalSum;
    });
    console.log('emit', costTotal);
  }
  getCostsArray(): Cost[] {
    return this.pipe.transform(this.costs, this.searchedMonth);
  }

  getMonth(): string {
    const monthNames = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December'
    ];
    if (
      !this.costs ||
      this.costs.length <= 0 ||
      (!this.searchedMonth && this.searchedMonth !== 0)
    ) {
      return 'All time';
    }
    return (
      monthNames[this.searchedMonth] + ' ' + this.costs[0].dueDate.getFullYear()
    );
  }

  ngOnDestroy() {
    this.expensesSub.unsubscribe();
  }


  // logScrolling(event) {
  //   if (this.modalOpen || !this.getCostsArray().length ) {
  //     return;
  //   }

  //   this.modalController
  //     .create({
  //       component: CostsDetailsComponent,
  //       componentProps: {
  //         searchedMonth: this.searchedMonth
  //       }
  //     })
  //     .then(modalEl => {
  //       this.modalService.openModal();
  //       modalEl.present();
  //     });
  // }
}
