import { Component, OnInit } from '@angular/core';
import { IGROUP, GROUP_LIST } from 'src/model/interfaces';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-guest',
  templateUrl: './guest.page.html',
  styleUrls: ['./guest.page.scss'],
})
export class GuestPage implements OnInit {


  groupsList: Array<IGROUP> = GROUP_LIST;
  
  constructor(private router: Router) { }

  ngOnInit() {
  }


  addNewGroup(){
    const newGroup = {
      id: this.groupsList.length+1,
      name: "New group"
    };

    this.groupsList.push(newGroup);
  }

  goToGroupDetails(group: IGROUP){

    let navigationExtras: NavigationExtras = {
      queryParams: {
        data: JSON.stringify(group)
      }
    };
    
    this.router.navigate(['tabs/guests/groupDetails'], navigationExtras);
  }
}
