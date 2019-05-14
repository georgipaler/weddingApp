import { NgModule } from "@angular/core";
import { CostsDetailsComponent } from '../pages/budget/costs-details/costs-details.component';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../pipes/shared.module';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

@NgModule({
    imports:      [ 
        CommonModule,
        CommonModule,
        FormsModule,
        IonicModule,],
    declarations: [ CostsDetailsComponent],
    exports: [ CostsDetailsComponent]
})

export class ComponentsModule{}