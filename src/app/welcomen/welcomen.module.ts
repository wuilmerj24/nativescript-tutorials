import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NativeScriptCommonModule, NativeScriptFormsModule } from '@nativescript/angular';
import { WelcomeRoutingModule } from './welcomen-routing.module';
import { WelcomeComponent } from './welcomen.component';
import { CollectionViewModule } from '@nativescript-community/ui-collectionview/angular';

@NgModule({
    imports: [
        NativeScriptCommonModule,
        NativeScriptFormsModule,
        CollectionViewModule,
        WelcomeRoutingModule,
    ],
    providers: [

    ],
    declarations: [WelcomeComponent],
    schemas: [NO_ERRORS_SCHEMA],
})
export class WelcomeModule { }