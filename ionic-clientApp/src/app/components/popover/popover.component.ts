import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { LanguageService } from 'src/app/services/language/language.service';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss'],
})
export class PopoverComponent implements OnInit {

  constructor(private popoverController: PopoverController,
    private languageService: LanguageService) { }

  ngOnInit() {}

  switch(lang: string){
    this.languageService.switchLanguage(lang);
  }


closePopover(){
  this.popoverController.dismiss();
}

}
