//Array Challenge

let zero = 0;
let counter = 3;
let my=["Ahmed","Mazero","Elham","Osama","Gamal","Ameer"];
my.pop();
my.pop();
console.log(my.reverse());
/////////
console.log(my.slice(++zero,counter));
////////
zero--;
my.unshift("Elzero");
console.log(my[zero]);
////////
console.log(my[zero][++counter]+my[zero][++counter].toUpperCase());