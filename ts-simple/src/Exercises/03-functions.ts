/*
    ===== Code =====
*/

function sum (a:number, b:number): number {
    return a + b;
}

//First the obligatory variables, then the optionals and the last ones are those with an predeterminated value
const sumFast = (a:number, b:number, c?: number, d = 2): number => {
    return a + b;
}



const result = sum(10,30);
const resultFast = sumFast(100,300);
