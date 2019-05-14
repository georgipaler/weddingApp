import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {Contacts, Contact} from '@ionic-native/contacts'
import { ChartsModule } from 'ng2-charts';
import { NgCalendarModule } from 'ionic2-calendar';
import { ContactSearchPipe } from './pipes/contactSearch/contact-search.pipe'
import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CostsPage } from './pages/costs/costs.page';
import { SharedModule } from './pipes/shared.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  entryComponents: [
  ],
  imports: [
    NgCalendarModule,
    SharedModule,
    BrowserModule, 
    IonicModule.forRoot({
      mode: 'ios',
      scrollAssist: true}), 
    AppRoutingModule, 
    ChartsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    Contacts,
    Navigator,
    Contact
  ],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule {}
