import { Component, OnInit } from '@angular/core';
import { LoaderService } from 'src/app/services/loader/loader.service';
import { CostsService } from 'src/app/services/costs/costs.service';
import { IExpense } from 'src/model/interfaces';

@Component({
  selector: 'app-costs',
  templateUrl: './costs.page.html',
  styleUrls: ['./costs.page.scss'],
})
export class CostsPage implements OnInit {
  constructor(   
    ) { }

  ngOnInit() {

  }

}
