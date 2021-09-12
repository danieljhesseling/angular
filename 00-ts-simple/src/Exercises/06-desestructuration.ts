/*
    ===== Code =====
*/

//Desestructuration of objects Arrays and arguments

/*
    ===== Objects =====
*/

interface Player {
    volume: number;
    second: number;
    song: string;
    detail: Detail; 
}

interface Detail{
    author: string;
    age: number;
}

const player: Player = {
    volume: 40,
    second: 3,
    song: "Uprising",
    detail: {
        author: "Muse",
        age: 2014
    }
}

//If we want to reach the information inside the object: for example: 
// console.log("The second of the song: ", player.song, "is: ", player.second) 
// And don't want to writte the object name every time, we can do the next: 

const { song, second } = player;

console.log("The second of the song: ", song, "is: ", second);

//In case we want to reach the information inside detail:
const { detail } = player;
const { author, age } = detail;

console.log("The author of the song: ", song, "is: ", author);

/*
    ===== Arrays =====
*/
const dbz: string[] = ["Goku", "Vegetta", "Trunks"];

const [c1, , c3] = dbz;

console.log("First dbz character: ", dbz[0]);
console.log("Second dbz character: ", dbz[1]);
console.log("Third dbz character: ", c3);

/*
    ===== Functions =====
*/

interface Product {
    desc: string;
    price: number;
}

const mobile: Product = {
    desc: "Nokia",
    price: 120
}

const tablet: Product = {
    desc: "Ipad",
    price: 420
}

function calculateISV (products: Product[]) {

    let result = 0;
    /*
    products.forEach( (product) => {
        result += product.price;
    }) Same as:
    */
   products.forEach( ({price}) => {
       result += price;
   })
    

    return result * 0.15;

}