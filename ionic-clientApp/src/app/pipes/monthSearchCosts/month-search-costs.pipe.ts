import { Pipe, PipeTransform } from '@angular/core';
import { Cost } from 'src/app/pages/costs/cost.model';

@Pipe({
  name: 'monthSearchCosts'
})
export class MonthSearchCostsPipe implements PipeTransform {

  transform(costs: Array<Cost>, searchedMonth: number) {
    if (!costs || costs.length <= 0 || (!searchedMonth && searchedMonth !== 0)) {
      return costs;
    }

    return costs.filter(cost => {
      const dateCost = new Date(cost.dueDate);
      return dateCost.getMonth() === searchedMonth;
    });
  }

}
