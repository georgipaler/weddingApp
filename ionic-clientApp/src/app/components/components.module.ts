import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CostsDetailsComponent } from '../pages/budget/costs-details/costs-details.component';
import { CommonModule } from '@angular/common';
import { FormsModule, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HelpModalComponent } from './modals/help-modal/help-modal/help-modal.component';
import { ExpandableComponent } from './expandable/expandable.component';
import { AddCostComponent } from './add-cost/add-cost.component';

@NgModule({
    imports: [
        CommonModule,
        CommonModule,
        FormsModule,
        IonicModule,
        ReactiveFormsModule,
    ],
    declarations: [
        CostsDetailsComponent,
        HelpModalComponent,
        ExpandableComponent,
        AddCostComponent
    ],
    exports: [
        CostsDetailsComponent,
        ExpandableComponent,
        HelpModalComponent,
        AddCostComponent
    ],
    providers: [
        FormBuilder,
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ]
})

export class ComponentsModule {}
