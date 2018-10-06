import {Component, OnInit} from "@angular/core";
import {ItemEventData, ListView} from "tns-core-modules/ui/list-view";
import {DatabaseService} from "~/app/services/database.service";
import {RouterExtensions} from "nativescript-angular";

var Sqlite = require("nativescript-sqlite");

@Component({
    selector: "User",
    moduleId: module.id,
    templateUrl: "./user.component.html"
})
export class UserComponent implements OnInit {

    // list of user array
    public users: Array<any>;

    constructor(private databaseService: DatabaseService,private router: RouterExtensions) {
        this.users = [];
    }

    ngOnInit(): void {
        this.fetch();
    }

    public fetch() {
        this.databaseService.fetchUsers().then(rows => {
            this.users = [];
            for (var row in rows) {
                console.log(rows[row][1]);
                this.users.push({
                    "firstname": rows[row][1],
                    "lastname": rows[row][2],
                    "organization": rows[row][3]
                });
            }
        }, error => {
            console.log("SELECT ERROR", error);
        });
    }


    onItemTap(args: ItemEventData): void {
        console.log('Item with index: ' + args.index + ' tapped');
    }

    onNavBtnTap() {
        // This code will be called only in Android.
        console.log("Navigation button tapped!");
        if (this.router.canGoBack()) {
            this.router.back();
        }
    }
}

