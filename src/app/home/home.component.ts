import {Component, OnInit} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {DatabaseService} from "~/app/services/database.service";

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {

    oForm: FormGroup;
    submitted = false;

    constructor(private formBuilder: FormBuilder,
                private databaseService: DatabaseService) {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        this.oForm = this.formBuilder.group({
            firstName: ['', [Validators.required]],
            lastName: ['', [Validators.required]],
            organization: ['', [Validators.required]]
        });
    }

    // convenience getter for easy access to form fields
    get formO() {
        return this.oForm.controls;
    }

    /**
     *  submit form save data to database
     */
    submit() {
        this.submitted = true;
        // stop here if form is invalid
        if (this.oForm.invalid) {
            return;
        }
        this.databaseService.insertUser(this.oForm.value);
        this.oForm.reset();
        this.submitted = false;
    }
}
