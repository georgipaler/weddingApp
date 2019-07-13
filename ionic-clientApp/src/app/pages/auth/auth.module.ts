import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AuthPage } from './auth.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { HelpModalComponent } from 'src/app/components/modals/help-modal/help-modal/help-modal.component';

const routes: Routes = [
  {
    path: '',
    component: AuthPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    ComponentsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AuthPage],
  providers: [],
  entryComponents: [
    HelpModalComponent
  ]
})
export class AuthPageModule {}
