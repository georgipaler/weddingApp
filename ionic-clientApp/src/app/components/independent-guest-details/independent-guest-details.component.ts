import { Component, OnInit } from '@angular/core';
import { IGROUP, IGuest } from 'src/model/interfaces';
import { NavParams, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-independent-guest-details',
  templateUrl: './independent-guest-details.component.html',
  styleUrls: ['./independent-guest-details.component.scss'],
})
export class IndependentGuestDetailsComponent implements OnInit {

  guest: IGuest;

  constructor(public navParams: NavParams,
    private modalController: ModalController, 
    ) { }


  ngOnInit() {
    this.guest = this.navParams.get("guest");
    console.log("guest", this.guest);
  }

  async dismissModal(){
    await this.modalController.dismiss();
  }

}
