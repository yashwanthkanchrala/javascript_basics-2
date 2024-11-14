"use-script";
const friend = ["yashwanth", "lohith", "vijay", "sai"];
//add elements
friend.push("thanmai");
console.log(friend);
console.log(friend.length);

//const newLength = friend.push("thanmai");
//console.log(newLength);
friend.unshift("vinesh");
console.log(friend);

//remove elements
const pop = friend.pop(); //removes lastv element
console.log(friend);
console.log(pop);

const shift = friend.shift();
console.log(shift);
console.log(friend);

console.log(friend.indexOf("sai"));
console.log(friend.indexOf("jjnk"));
console.log(friend.includes("sai"));
console.log(friend.includes("jjnk"));

//finished
