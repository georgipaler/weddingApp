import { Component, OnInit, Input } from '@angular/core';
import { GuestPage } from 'src/app/pages/guest/guest.page';

@Component({
  selector: 'app-expandable',
  templateUrl: './expandable.component.html',
  styleUrls: ['./expandable.component.scss'],
})
export class ExpandableComponent implements OnInit {

  // tslint:disable-next-line:no-input-rename
  @Input('guest') guest;
  // tslint:disable-next-line:no-input-rename
  @Input('type') type;

  constructor() { }

  ngOnInit() {
    console.log('obj', this.guest);
  }

}
