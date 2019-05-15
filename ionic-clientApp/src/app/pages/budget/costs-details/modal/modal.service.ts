import { Injectable } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  
  isModalOpen:boolean = false;
  constructor(private modalController: ModalController) { }

  openModal(){
    this.isModalOpen =  true;
    console.log("modal open", this.isModalOpen);
  }

  cloaseModal(){
    this.isModalOpen =  false;
    console.log("modal close", this.isModalOpen);
  }

}
