import { Component } from '@angular/core'
import { registerElement } from '@nativescript/angular';
import { MenuButton } from './menu-button/index.android';
registerElement('MenuButton', () => MenuButton);

@Component({
  selector: 'ns-app',
  templateUrl: './app.component.html',
})
export class AppComponent {}
