/*
    ===== Code =====
*/

interface Hero {
    heroName: string;
    hp: number;
    showHp: () => void;
}

function heal (character: Hero, healX: number): void {
    character.hp += healX;
}

const newHero: Hero = {
    heroName: "Melchor",
    hp: 100,
    showHp() {
        console.log( this.heroName + "'s hp remaining is:", this.hp);
    }
}

heal( newHero, 10);
newHero.showHp();