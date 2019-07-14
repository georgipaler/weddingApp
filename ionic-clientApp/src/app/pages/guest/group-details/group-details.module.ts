import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { GroupDetailsPage } from './group-details.page';
import { AddGuestComponent } from 'src/app/components/add-guest/add-guest.component';
import { ExpandableComponent } from 'src/app/components/expandable/expandable.component';
import { SearchPipePipe } from 'src/app/pipes/searchPipe/search-pipe.pipe';
import { SharedModule } from 'src/app/pipes/shared.module';
import { ImportContacsComponent } from 'src/app/components/import-contacs/import-contacs.component';
import { IndependentGuestDetailsComponent } from 'src/app/components/independent-guest-details/independent-guest-details.component';
import { ComponentsModule } from 'src/app/components/components.module';

const routes: Routes = [
  {
    path: '',
    component: GroupDetailsPage
  }
];

@NgModule({
  entryComponents: [
    AddGuestComponent,
    ImportContacsComponent,
    IndependentGuestDetailsComponent,
    ExpandableComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    SharedModule,
    ReactiveFormsModule,
    ComponentsModule
  ],
  declarations: [
    GroupDetailsPage,
    AddGuestComponent,
    ImportContacsComponent,
    IndependentGuestDetailsComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class GroupDetailsPageModule {}
