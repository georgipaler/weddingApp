import { Injectable } from '@angular/core';
import {  expenses_list } from 'src/model/interfaces';
import { Cost } from 'src/app/pages/costs/cost.model';
import { take, map, tap, delay } from "rxjs/operators";
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CostsService {


  _expenses = new BehaviorSubject<Cost[]>( expenses_list);

  constructor() { }

  public get expenses() {
    return this._expenses.asObservable();
  }

  addCost(
    title: string,
    dueDate: Date,
    category : string,
    totalSum: number,
    paid: boolean
  ) {
    console.log("add new place");
    const newCost = new Cost(
      Math.random().toString(),
      title,
      dueDate,
     totalSum,
     category,
     paid
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
  
}
