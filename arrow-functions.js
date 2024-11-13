const calcage3 = (birthyear) => 2045 - birthyear;
const age3 = calcage3(1996);
console.log(age3);
/*
const yearsUntillRetirement = (birthyear) => {
  const age = 2047 - birthyear;
  const retirement = 65 - age;
  return retirement;
};

console.log(yearsUntillRetirement(1996));
*/
const yearsUntillRetirement = (birthyear, firstname) => {
  const age = 2047 - birthyear;
  const retirement = 65 - age;
  return `${firstname} will retire in ${retirement} years.he is born in ${birthyear}`; //string value``
};

console.log(yearsUntillRetirement(1996, "yashwanth"));
