import { Component } from "@angular/core";
import * as application from "tns-core-modules/application";
import {RouterExtensions} from "nativescript-angular";

@Component({
    moduleId: module.id,
    selector: "ns-app",
    templateUrl: "app.component.html"
})
export class AppComponent {

    public constructor(private router: RouterExtensions) { }

    public ngOnInit() {
        application.android.on(application.AndroidApplication.activityBackPressedEvent, (args: any) => {
            if (this.router.canGoBack()) {
                args.cancel = true;
                this.router.back();
            } else {
                args.cancel = false;
            }
        });
    }
}
