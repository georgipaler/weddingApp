import { Pipe, PipeTransform } from '@angular/core';
import { IGuest } from 'src/model/interfaces';

@Pipe({
  name: 'searchPipe'
})
export class SearchPipePipe implements PipeTransform {

  transform(guestList: Array<any>, searchedText: string) {
    if (!guestList || guestList.length <= 0 || !searchedText) {
      return guestList;
    }

    return guestList.filter(guest => {
      return this.compare(guest.name, searchedText);
    });
  }

  private compare(initialValue: string, searchValue: string): boolean {
    if (initialValue.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1) {
      return true;
    }
    return false;
  }
}
