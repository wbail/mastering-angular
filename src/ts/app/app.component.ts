import { Component } from "@angular/core";

@Component({
    selector: "main",
    template: require("./app.component.html"),
    styles: [
        require("./app.component.scss")
    ],
})
export class AppComponent {

    public header: string = "Color Tool";

    public message: string = "Color List";

    public colors: string[] = [
        "red",
        "white",
        "green",
        "blue",
        "orange",
    ];

    public newcolor: string = "";

    public addColor()
    {
        this.colors.push(this.newcolor);
        this.newcolor = "";
    }

    public someNumber: number = 3.14;

    public someDate: Date = new Date();

    public someCurrency: number = 6500;

    public currentPage: number = 0;
    public pageLength: number = 3;

    public get startPerson(): number {
        return this.currentPage * this.pageLength;
    }

    public get endPerson(): number {
        return (this.currentPage + 1) * this.pageLength;
    }

    public people: any[] = [
        { nome: "Guilherme", sobrenome: "Bail"},
        { nome: "Will", sobrenome: "Bail"},
        { nome: "John", sobrenome: "Doe"},
        { nome: "Jane", sobrenome: "Doe"},
        { nome: "Agent", sobrenome: "Smith"},
        { nome: "Duke", sobrenome: "Nuken"},
        { nome: "Perna", sobrenome: "Longa"},
        { nome: "Darth", sobrenome: "Vader"},
        { nome: "Peter", sobrenome: "Parker"},
        { nome: "Clark", sobrenome: "Kent"},
        { nome: "Bruce", sobrenome: "Wayne"},
    ];

    prevPage() {
        if (this.currentPage > 0) {
            this.currentPage--;
        }
    }

    nextPage() {
        let pages = this.people.length / this.pageLength;

        if (this.people.length % this.pageLength > 0) {
            pages++;
        }

        if (this.currentPage < pages) {
            this.currentPage++;
        }
    }

}
