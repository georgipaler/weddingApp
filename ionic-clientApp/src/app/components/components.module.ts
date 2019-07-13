import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CostsDetailsComponent } from '../pages/budget/costs-details/costs-details.component';
import { CommonModule } from '@angular/common';
import { FormsModule, FormBuilder } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@NgModule({
    imports: [
        CommonModule,
        CommonModule,
        FormsModule,
        IonicModule,
    ],
    declarations: [CostsDetailsComponent],
    exports: [CostsDetailsComponent],
    providers: [
        FormBuilder,
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ]
})

export class ComponentsModule {}
