import { Component, ViewChild, AfterViewInit, ViewChildren, QueryList } from "@angular/core";
import { NgForm, NgModelGroup, NgModel } from "@angular/forms";

@Component({
    selector: "main",
    template: require("./app.component.html"),
})
export class AppComponent implements AfterViewInit {

    public rua: string = "";
    public cidade: string = "";

    @ViewChildren(NgModel)
    public contatoControls: QueryList<NgModel>;

    @ViewChild(NgForm)
    public contatoForm: NgForm;

    public ngAfterViewInit() {
        console.log(this.contatoForm);
        console.log(this.contatoControls);
    }

}
