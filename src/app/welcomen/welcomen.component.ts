import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { Application, Button, getCurrentPage, Page, TapGestureEventData, Utils } from "@nativescript/core";
import { RouterExtensions } from "@nativescript/angular";
import { CollectionView, CollectionViewItemEventData } from "@nativescript-community/ui-collectionview";
import { getCurrentActivity } from "@nativescript/core/utils/android";
import { MenuButtonAction, MenuEvent } from "../menu-button/common";

export interface Examples{
    name:string;
    description:string;
    path:string;
    url:string;
}
@Component({
    moduleId: module.id,
    selector: 'ns-welcome',
    templateUrl: './welcomen.component.html',
})

export class WelcomeComponent implements OnInit {   
    items: Array<Examples>=[
        {
            name: "UrlPreview",
            description: "Crea una vista previa de un enlace.",
            path: "/url-preview",
            url: "",
        },
    ]
    options: Array<MenuButtonAction>=[
        { name: 'Patreon' },
        { name: 'X' },
        { name: 'Github' },
    ];
    @ViewChild("lista", {}) collectionView:ElementRef;

    constructor(
        private page: Page,
        private router: RouterExtensions,
    ) {
        // page.actionBarHidden = true;
    }

    ngOnInit(): void {
    }

    selected(args: MenuEvent) {
        if(args.index==0){
            Utils.openUrl("https://patreon.com/wuilmerj24")
        } else if (args.index == 1) {
            Utils.openUrl("https://twitter.com/wilmerj24")
        } else if (args.index == 2) {
            Utils.openUrl("https://github.com/wuilmerj24")
        }
    }

    templateSelector(item: any, index: number, items: Array<any>): any {
        return index == 0 ? "perfil" : "example";
    }

    itemTap(args:CollectionViewItemEventData){
    }
}