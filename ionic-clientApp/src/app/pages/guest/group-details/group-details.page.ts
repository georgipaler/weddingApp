import { Component, OnInit, Input } from '@angular/core';
import { groupBy } from 'rxjs/internal/operators/groupBy';
import { IGROUP, IGuest, GUEST_LIST } from 'src/model/interfaces';
import { ActivatedRoute, Router } from '@angular/router';
import { AddGuestComponent } from 'src/app/components/add-guest/add-guest.component';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-group-details',
  templateUrl: './group-details.page.html',
  styleUrls: ['./group-details.page.scss'],
})
export class GroupDetailsPage implements OnInit {

   group: IGROUP;
   guestsList: Array<IGuest> = GUEST_LIST;

  constructor(private route: ActivatedRoute, 
    private router: Router,
    private modalController: ModalController) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params && params.data) {
        this.group = JSON.parse(params.data);
      }
    });
    console.log(this.group.name, this.guestsList);

    this.guestsList = this.guestsList.filter(guest => guest.group === this.group.name);
  }

  async addNewGuest(){
    const modal: HTMLIonModalElement= 
      await this.modalController.create({
      component: AddGuestComponent,
  });

  modal.present();
}

}
