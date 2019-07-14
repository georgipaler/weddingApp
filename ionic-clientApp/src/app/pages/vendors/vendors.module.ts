import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { VendorsPage } from './vendors.page';
import { SharedModule } from 'src/app/pipes/shared.module';
import { ComponentsModule } from 'src/app/components/components.module';
import { ExpandableComponent } from 'src/app/components/expandable/expandable.component';
import { AddVendorComponent } from './components/add-vendor/add-vendor.component';

const routes: Routes = [
  {
    path: '',
    component: VendorsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    SharedModule,
    RouterModule.forChild(routes),
    ComponentsModule
  ],
  declarations: [
    VendorsPage,
    AddVendorComponent
  ],
  entryComponents: [
    ExpandableComponent,
    AddVendorComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class VendorsPageModule {}
