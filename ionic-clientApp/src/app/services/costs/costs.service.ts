import { Injectable } from '@angular/core';
import { IExpense, expenses_list } from 'src/model/interfaces';

@Injectable({
  providedIn: 'root'
})
export class CostsService {


  expenses: IExpense[] = expenses_list;

  constructor() { }
}
