import { Component } from "@angular/core";

interface ContatoData {
    nome: string;
    sobrenome: string;
    email: string;
    telefone: string;
    descricao: string;
    sexo: string;
}

@Component({
    selector: "main",
    template: require("./app.component.html"),
})
export class AppComponent {

    public contato: ContatoData = {
        nome: "",
        sobrenome: "",
        telefone: "",
        email: "",
        sexo: "",
        descricao: "",
    };

    public sexo = [
        ["M", "Masculino"],
        ["F", "Feminino"],
    ];
    
    public salvar(contato: ContatoData) {
        console.log(this.contato);
    }

}
