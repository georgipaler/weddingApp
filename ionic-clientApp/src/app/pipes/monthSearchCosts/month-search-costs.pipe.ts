import { Pipe, PipeTransform } from '@angular/core';
import { IExpense } from 'src/model/interfaces';

@Pipe({
  name: 'monthSearchCosts'
})
export class MonthSearchCostsPipe implements PipeTransform {

  transform(costs: Array<IExpense>, searchedMonth: number) {
    if (!costs || costs.length <= 0 || !searchedMonth) {
      return costs;
    }

    return costs.filter(cost => {
      return cost.date.getMonth() == searchedMonth;
    });
  }

}
