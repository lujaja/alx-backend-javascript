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

import signUpUser from "./4-user-promise";

console.log(signUpUser("Bob", "Dylan"));