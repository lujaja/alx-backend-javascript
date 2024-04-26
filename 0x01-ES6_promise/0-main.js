/*
let p = new Promise((resolved, rejected) => {
    let a = 1 + 2;
    if (a === 2) {
        resolved("Success")
    } else {
        rejected("Failed")
    }
})

p.then((message) => {
    console.log("This is in resolved " + message);
}).catch((message) => {
    console.log("This is in rejected " + message);
})
*/

import divideFunction from './8-try';

console.log(divideFunction(10, 2));
console.log(divideFunction(10, 0));