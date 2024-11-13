"use-strict";

function fruitCutter(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, mango) {
  const applepieces = fruitCutter(apples);
  const mangopieces = fruitCutter(mango);

  console.log(apples, mango);
  const juice = `this juice contains ${applepieces} applespieces and ${mangopieces} mangoe pieces`;
  return juice;
}
console.log(fruitProcessor(2, 4));
