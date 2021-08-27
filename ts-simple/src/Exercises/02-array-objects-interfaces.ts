/*
    ===== Code =====
*/

let skills: string [] = ["Quick learning", "Hard work"];

interface Person {
    personName: string;
    age: number;
    skills: string[];
    location?: string;
}
//? is used to indicate the variable is optional

const person: Person = {
    personName: "Richard",
    age: 39,
    skills: ["Tired", "Lazy"]
}

person.location = "Torremolinos";

console.table( person );
console.log( person );