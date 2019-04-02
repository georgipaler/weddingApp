import { NgModule }            from '@angular/core';
import { CommonModule }        from '@angular/common';

import { SearchPipePipe } from './searchPipe/search-pipe.pipe';

@NgModule({
  imports:      [ CommonModule ],
  declarations: [ SearchPipePipe ],
  exports:      [ SearchPipePipe ]
})
export class SharedModule { }
