import { NgModule } from '@angular/core'
import { Routes } from '@angular/router'
import { NativeScriptRouterModule } from '@nativescript/angular'
import { WelcomeComponent } from './welcomen.component'


const routes: Routes = [{ path: '', component: WelcomeComponent }]

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule],
})
export class WelcomeRoutingModule { }
