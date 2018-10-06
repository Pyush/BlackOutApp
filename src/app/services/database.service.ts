import {Injectable, Output} from "@angular/core";
import {confirm, ConfirmOptions} from "tns-core-modules/ui/dialogs";
var Sqlite = require("nativescript-sqlite");

@Injectable()
export class DatabaseService {

    @Output() public database: any;

    constructor() {
        (new Sqlite("my.db")).then(db => {
            db.execSQL("CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, firstname TEXT, lastname TEXT, organization TEXT)").then(id => {
                this.database = db;
            }, error => {
                console.log("CREATE TABLE ERROR", error);
            });
        }, error => {
            console.log("OPEN DB ERROR", error);
        });
    }

    public insertUser(user) {
        this.database.execSQL("INSERT INTO users (firstname, lastname, organization) VALUES (?, ?, ?)", [user.firstName, user.lastName, user.organization]).then(id => {
            console.log("INSERT RESULT", id);
            this.showAlert();
        }, error => {
            console.log("INSERT ERROR", error);
        });
    }

    showAlert() {
        const confirmOptions: ConfirmOptions = {
            title: "Success",
            message: "Record saved successfully",
            okButtonText: "OK",
            cancelable: false // [Android only] Gets or sets if the dialog can be canceled by taping outside of the dialog.
        };

        confirm(confirmOptions)
            .then((result) => {
                // result can be true/false/undefined
                console.log(result);
            });
    }

    public fetchUsers() {
       return this.database.all("SELECT * FROM users ORDER BY id DESC");
    }

}