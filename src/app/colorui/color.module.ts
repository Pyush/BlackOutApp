import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import {NativeScriptFormsModule} from "nativescript-angular";
import {ReactiveFormsModule} from "@angular/forms";
import {DatabaseService} from "~/app/services/database.service";
import {ColorRoutingModule} from "~/app/colorui/color-routing.module";
import {ColorComponent} from "~/app/colorui/color.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        NativeScriptFormsModule,
        ReactiveFormsModule,
        ColorRoutingModule
    ],
    declarations: [
        ColorComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ],
    providers: [
        DatabaseService
    ]
})
export class ColorModule { }