import {Component, OnInit} from "@angular/core";
import {RouterExtensions} from "nativescript-angular";
import {Observable, Page, PropertyChangeData} from "tns-core-modules/ui/page/page";
import {Slider} from "tns-core-modules/ui/slider";
const sliderModule = require("tns-core-modules/ui/slider");

@Component({
    selector: "Color",
    moduleId: module.id,
    templateUrl: "./color.component.html"
})
export class ColorComponent implements OnInit {

    constructor(private router: RouterExtensions) {

    }

    ngOnInit(): void {

    }

    onNavBtnTap() {
        // This code will be called only in Android.
        console.log("Navigation button tapped!");
        if (this.router.canGoBack()) {
            this.router.back();
        }
    }

}
