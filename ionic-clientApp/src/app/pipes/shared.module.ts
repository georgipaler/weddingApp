import { NgModule }            from '@angular/core';
import { CommonModule }        from '@angular/common';

import { SearchPipePipe } from './searchPipe/search-pipe.pipe';
import { ContactSearchPipe } from './contactSearch/contact-search.pipe';
import { MonthSearchCostsPipe } from './monthSearchCosts/month-search-costs.pipe';

@NgModule({
  imports:      [ CommonModule ],
  declarations: [ SearchPipePipe , ContactSearchPipe, MonthSearchCostsPipe],
  exports:      [ SearchPipePipe, ContactSearchPipe, MonthSearchCostsPipe ]
})
export class SharedModule { }
