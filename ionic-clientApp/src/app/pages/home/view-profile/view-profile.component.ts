import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
import { IUser } from 'src/model/interfaces';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.scss'],
})
export class ViewProfileComponent implements OnInit {

  public user: IUser;
  constructor(
    public navParams: NavParams,
    private modalController: ModalController
  ) { }

  ngOnInit() {
    this.user = this.navParams.get('user');
  }

  dismissModal() {
    this.modalController.dismiss();
  }

}
