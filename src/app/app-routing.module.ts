import { NgModule } from '@angular/core'
import { Routes } from '@angular/router'
import { NativeScriptRouterModule } from '@nativescript/angular'


const routes: Routes = [
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  {
    path: 'welcome',
    loadChildren: () => import('~/app/welcomen/welcomen.module').then((m) => m.WelcomeModule),
  },
  {
    path: 'url-preview',
    loadChildren: () => import('~/app/url-preview/url-preview.module').then((m) => m.UrlPreviewModule),
  },
]

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule],
})
export class AppRoutingModule {}
