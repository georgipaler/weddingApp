import { Component, OnInit } from '@angular/core';
import { IGROUP } from 'src/model/interfaces';
import { Router } from '@angular/router';

@Component({
  selector: 'app-guest',
  templateUrl: './guest.page.html',
  styleUrls: ['./guest.page.scss'],
})
export class GuestPage implements OnInit {


  groupsList: Array<IGROUP> =[
    {
      id: 1,
      name: "Wedding party"
    },
    {
      id: 2,
      name: "Bride's family"
    },
    {
      id: 3,
      name: "Groom's family"
    },
    {
      id: 4,
      name: "Mutual friends"
    },
  ];
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

  goToGroupDetails(){
    this.router.navigate(['tabs/guests/groupDetails']);
  }
}
