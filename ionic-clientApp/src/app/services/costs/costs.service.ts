import { Injectable } from '@angular/core';
import {  expenses_list } from 'src/model/interfaces';
import { Cost } from 'src/app/pages/costs/cost.model';
import { take, map, tap, delay } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CostsService {


  _expenses = new BehaviorSubject<Cost[]>( expenses_list);
  costs: Cost[] = [];
  totalSum: number;
  constructor() {
    this.expenses.subscribe(costs => {
      this.costs = costs;
      this.costs.map(cost => this.totalSum += cost.totalSum);
    });
   }

  public get expenses() {
    return this._expenses.asObservable();
  }

  addCost(
    title: string,
    dueDate: Date,
    category: string,
    totalSum: number,
    paid: boolean,
    notes?: string
  ) {
    console.log('add new place');
    const newCost = new Cost(
      Math.random().toString(),
      title,
      dueDate,
      totalSum,
      category,
      paid,
      notes
    );
    return this._expenses.pipe(
      take(1),
      delay(1000),
      tap(places =>
        setTimeout(() => {
          this._expenses.next(places.concat(newCost));
        }, 1000)
      )
    );
  }

  deleteCost(cost: Cost) {

    this.expenses.subscribe(costs => {
      this.costs = costs;
      const removeIndex = this.costs.map(function (item) { return item.id; }).indexOf(cost.id);
      // remove object
      this.costs.splice(removeIndex, 1);
    });
  }

  calcTotalCost() {
    this.totalSum = 0;
    this.costs.map(cost => this.totalSum += cost.totalSum);
  }

  getTotalSum() {
    return this.totalSum ? this.totalSum : 0;
  }

  getCostArray() {
    return this.costs;
  }

}
