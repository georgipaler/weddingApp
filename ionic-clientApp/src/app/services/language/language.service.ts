import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

const LNG_KEY = 'SELECTED_LANGUAGE';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  constructor(
    private translate: TranslateService
  ) { }

  setInitialLanguage(){
    let language = this.translate.getBrowserLang();
    this.translate.setDefaultLang(language);

    
  }


  getLanguages(){
    return [
      { text: 'English', value: 'en'},
      { text: 'Romana', value: 'ro'},
    ]
  }

  switchLanguage(language: string){
    this.translate.use(language)
  }



}
