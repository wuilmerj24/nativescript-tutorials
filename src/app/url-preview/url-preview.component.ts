import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { Application, Button, getCurrentPage, Page, TapGestureEventData, Utils } from "@nativescript/core";
import { RouterExtensions } from "@nativescript/angular";
import { CollectionView, CollectionViewItemEventData } from "@nativescript-community/ui-collectionview";
import { getCurrentActivity } from "@nativescript/core/utils/android";
import { MenuButtonAction, MenuEvent } from "../menu-button/common";

export interface Examples {
    name: string;
    description: string;
    path: string;
    url: string;
}
@Component({
    moduleId: module.id,
    selector: 'ns-url-preview',
    templateUrl: './url-preview.component.html',
})

export class UrlPreviewComponent implements OnInit {

    constructor(
        private page: Page,
        private router: RouterExtensions,
    ) {
        // page.actionBarHidden = true;
    }

    ngOnInit(): void {
    }

    goBack(){
        this.router.backToPreviousPage();
    }
}