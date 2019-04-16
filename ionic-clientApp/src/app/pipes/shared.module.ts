import { NgModule }            from '@angular/core';
import { CommonModule }        from '@angular/common';

import { SearchPipePipe } from './searchPipe/search-pipe.pipe';
import { ContactSearchPipe } from './contactSearch/contact-search.pipe';

@NgModule({
  imports:      [ CommonModule ],
  declarations: [ SearchPipePipe , ContactSearchPipe],
  exports:      [ SearchPipePipe, ContactSearchPipe ]
})
export class SharedModule { }
