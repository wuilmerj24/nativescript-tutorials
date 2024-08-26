import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NativeScriptCommonModule, NativeScriptFormsModule } from '@nativescript/angular';
import { UrlPreviewRoutingModule } from './url-preview-routing.module';
import { UrlPreviewComponent } from './url-preview.component';
import { NativeScriptUrlPreviewModule } from "@wuilmerj24/url-preview/angular"

@NgModule({
    imports: [
        NativeScriptCommonModule,
        NativeScriptFormsModule,
        NativeScriptUrlPreviewModule,
        UrlPreviewRoutingModule,
    ],
    providers: [

    ],
    declarations: [UrlPreviewComponent],
    schemas: [NO_ERRORS_SCHEMA],
})
export class UrlPreviewModule { }