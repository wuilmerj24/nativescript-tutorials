import { NgModule } from '@angular/core'
import { Routes } from '@angular/router'
import { NativeScriptRouterModule } from '@nativescript/angular'
import { UrlPreviewComponent } from './url-preview.component'


const routes: Routes = [{ path: '', component: UrlPreviewComponent }]

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule],
})
export class UrlPreviewRoutingModule { }
