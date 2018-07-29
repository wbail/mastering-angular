import { Component } from "@angular/core";
import { FormControl, FormGroup, FormArray, FormBuilder } from "@angular/forms";

@Component({
    selector: "main",
    template: require("./app.component.html"),
})
export class AppComponent {

    public profileForm: FormGroup;

    constructor(private fb: FormBuilder) {
        this.profileForm = this.fb.group({
            nome: [""],
            sobrenome: [""],
            addressGroups: this.fb.array([
                    this.fb.group({
                    rua: [""],
                    cidade: [""],
                    uf: [""],
                    cep: [""],
                })
            ])
        })
    }

    public addAdressGroup() {
        const fa = this.profileForm.controls["addressGroups"] as FormArray;

        fa.push(this.newAddressGroup())
    }

    public save() {
        console.log(this.profileForm.value);
    }

    private newAddressGroup() {
        return new FormGroup({
            rua: new FormControl(""),
            cidade: new FormControl(""),
            uf: new FormControl(""),
            cep: new FormControl(""),
        });
    }
}
