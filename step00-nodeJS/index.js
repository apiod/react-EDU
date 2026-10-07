// ES JS방식
import { add, minus } from "./cal.js";

console.log("node.js 환경");

// //commonJS방식 require사용
// const cal = require("./cal.js");
// console.log(cal.add);
// console.log(cal.minus(4, 3));

// //구조분해할당
// const { add, minus } = require("./cal.js");
// console.log(add);
// console.log(minus);
// console.log(add(3, 4));

console.log(add(4, 5));
