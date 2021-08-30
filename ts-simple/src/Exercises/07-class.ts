/*
    ===== Code =====
*/

//Class or interface, an interface is a capped class, for example, in a class you can create complex functions:
class Heroe {
    alterEgo: string;
    power: string;
    realName: string;

    showRealName() {
        return this.alterEgo + " is: " + this.realName;
    }

    constructor( alterEgo: string, power: string, realName: string ) {
        this.alterEgo = alterEgo;
        this.power = power;
        this.realName = realName;
    }
}

const ironman = new Heroe('Ironman', 'Money', 'Tony Stark'); 
//In the moment we create a new instance, it will call the constructor

console.log(ironman);

//Shorter way to do the last code is:
class Coder {

    constructor (
        public coderName: string,
        public coderLanguage: string,
        public coderExperience: number
        ) {}
}

const me = new Coder("Daniel", "Python", 1);