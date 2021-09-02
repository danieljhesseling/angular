/*
    ===== Code =====
*/

// With <T> we tell the function that it is a generic variable
function whatKindAmI<T> (argument: T) {
    return argument; 
}

let IAmString = whatKindAmI("Hello world!");
let IAmNumber = whatKindAmI(10);