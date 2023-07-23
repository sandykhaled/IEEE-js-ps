//Number Challenge

let a = 1_00; //100
let b = 2_00.5; //200.5
let c = 1e2; //100
let d = 2.4; 
///////////////////////
console.log(parseInt(Math.min(a,b,c,d)));//2
/////////////
console.log(Math.pow(a,Math.trunc(d)));//10000
////////////
console.log(parseInt(d));//2
console.log(Math.trunc(d));//2
console.log(Math.floor(d));//2
console.log(Math.round(d));//2
////////////////////
console.log((Math.trunc(b)/Math.ceil(d)).toFixed(2)); //66.67
console.log(Math.round(Math.trunc(b)/Math.ceil(d))); //67

