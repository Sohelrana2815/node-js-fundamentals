// const var1 = require("./file2");
// const { a: a3, add: add3, b: b3 } = require("./file3");
import { a, b, add } from "./file-2.mjs";
import { a as A3, b as B3, add as add3 } from "./file-3.mjs";
// console.log(a3);

// console.log(add3(2, 3, 5));
// console.log(b3);

console.log(a);
console.log(b);
console.log(add(2, 3));
//
console.log(A3);
console.log(B3);
console.log(add3(2, 3, 10));
