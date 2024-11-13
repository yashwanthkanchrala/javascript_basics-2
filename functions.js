"use strict";

function logger() {
  console.log("my name is yashwanth");
}
//calling,invoking,running
logger();
logger();
logger();

function fruitProcessor(apples, mango) {
  console.log(apples, mango);
  const juice = `this juice contains ${apples} apples and ${mango} mangoes`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
console.log(fruitProcessor(5, 0));

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);
