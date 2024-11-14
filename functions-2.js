"use strict";
//function declaration
function calcage1(birthyear) {
  return 2047 - birthyear;
}

const age1 = calcage1(1996);
console.log(age1);

//function expression

const calcage2 = function (birthyear) {
  return 2046 - birthyear;
};
const age2 = calcage2(1996);
console.log(age2);

//finished
