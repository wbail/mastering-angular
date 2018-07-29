import { Component } from "@angular/core";
import { FormControl, Validators, FormGroup } from "@angular/forms";

interface ContatoData {
    nome: string;
    sobrenome: string;
    email: string;
    telefone: string;
    descricao: string;
    sexo: string;
    notificacao: boolean;
}

@Component({
    selector: "main",
    styles: [
        "input.ng-invalid.ng-touched { border: 2px solid red; margin: 5px; }",
        "input + span { display:none; }",
        "input.ng-invalid.ng-touched + span { display:inline; }",
    ],
    template: require("./app.component.html"),
})
export class AppComponent {

    public formGroup = new FormGroup({
        contatoControl: new FormControl("", Validators.required),
    });

    public contato: ContatoData = {
        nome: "",
        sobrenome: "",
        telefone: "",
        email: "",
        sexo: "",
        descricao: "",
        notificacao: false,
    };

    public sexo = [
        ["M", "Masculino"],
        ["F", "Feminino"],
    ];
    
    public salvar(contato: ContatoData) {
        console.log(this.contato);
    }

}
