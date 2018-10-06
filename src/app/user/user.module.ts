import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import {NativeScriptFormsModule} from "nativescript-angular";
import {ReactiveFormsModule} from "@angular/forms";
import {UserComponent} from "~/app/user/user.component";
import {UserRoutingModule} from "~/app/user/user-routing.module";
import {DatabaseService} from "~/app/services/database.service";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        NativeScriptFormsModule,
        ReactiveFormsModule,
        UserRoutingModule
    ],
    declarations: [
        UserComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ],
    providers: [
        DatabaseService
    ]
})
export class UserModule { }