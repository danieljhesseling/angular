import { Component } from "@angular/core";



@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
})
export class HeroeComponent {

    heroeName: string = "Spider-man";
    heroeAge: number = 24;

    getName(): string {
        return `${this.heroeName} - ${this.heroeAge}`;
    }

    changeName(): void {
        this.heroeName = "Hulk";
    }

    changeAge(): void {
        this.heroeAge = 34;
    }

}