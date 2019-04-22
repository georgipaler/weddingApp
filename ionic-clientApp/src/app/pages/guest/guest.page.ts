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
  newGroupName: string = "";
  showInput:boolean = false;
  
  constructor(private router: Router) { }

  ngOnInit() {
  }

  showNewInput(){
    this.showInput = true;
  }

  addNewGroup(){
    const newGroup = {
      id: this.groupsList.length+1,
      name: this.newGroupName == '' ? "New group" : this.newGroupName
    };

    this.hideInput();
    this.groupsList.unshift(newGroup);
  }

  hideInput(){
    this.showInput = false;
    this.newGroupName = "";
  }

  goToGroupDetails(group: IGROUP){

    let navigationExtras: NavigationExtras = {
      queryParams: {
        data: JSON.stringify(group)
      }
    };
    this.router.navigate(['welcome/tabs/guests/groupDetails'], navigationExtras);
  }
}
