import { Component, OnInit } from '@angular/core';
import { LoaderService } from 'src/app/services/loader/loader.service';
import { CostsService } from 'src/app/services/costs/costs.service';
import { IExpense, expenses_list } from 'src/model/interfaces';

@Component({
  selector: 'app-costs',
  templateUrl: './costs.page.html',
  styleUrls: ['./costs.page.scss'],
})
export class CostsPage implements OnInit {

  public expenses: Array<IExpense> = expenses_list;
  public viewAdditionalInfo = false;
  public searchedMonth : number ;
  constructor(   
    ) { }

    ngOnInit(){}

    changeMonth(event: number){
      this.searchedMonth = event;
    }
    backToChart(event: boolean){
      console.log("down", event);
      this.viewAdditionalInfo = false;
      console.log("change idiot", this.viewAdditionalInfo)
    }
  
    goToCosts(){
      this.viewAdditionalInfo = true;
      
      console.log("go to cost")
    }
  
    displayTotalCosts(){
      this.searchedMonth = null;
    }
  
    ionViewWillLeave(){
      this.viewAdditionalInfo = false;
    }

}
