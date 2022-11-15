// const names = ["Ali", "Mohammad", "Amir", "Nahal", "Fateme", "Sara"];

// for (let i = 2; i < names.length; i++) {
//   console.log(names[i]);
// }

// forEach(func(item, index) {})
// forEach((item, index) => {})

// const names2 = [];
// names.forEach((name) => names2.push(name + " !"));

// console.log(names2);

// map((item, index) => {});

// let counter = 0;
// for (let name of names) {
//   console.log(name, counter++);
// }

// names.map((name, index) => console.log(name, index));

// const names3 = names.map((name) => {
//   console.log(name);
// }); // I can return :)
// console.log(names3);

// -------------------------------------------------------------
// quiz 18

// const arrayToTrim = (array) => {
//   return array.map((item) => item.trim());
// };

// const array = [
//   "            Ali              ",
//   "   Mohammad   ",
//   "Am     ir",
//   "Nahal",
//   "Fateme",
//   "Sara",
// ];
// const newArray = arrayToTrim(array);

// console.log(newArray);

// -------------------------------------------------------------
// arow func

// function declaration
// function myFunc() {
//   // code
// }

// function expersion
// const myFunc = function () {
//   // code
// };

// arrow function
// const myFunc = () => {
//   // code
// };

// -------------------------------------------------------------
// quiz 20

// const greet = (name) => `Hey ${name}!`;

// console.log(greet("Harry"));

// const greetAyda = greet("Ayda");
// console.log(greetAyda);

// -------------------------------------------------------------
// setTimeOut && setInterval

// setTimeout(callback, timeout => ms);

// setTimeout(() => {
//   console.log("In the name of god!");
// }, 5000);

// setInterval(callback, interval => ms);

// setInterval(() => {
//   console.log("In the name of god!");
// }, 2000);

// let counter = 10;
// let timer = setInterval(() => {
//   counter--;
//   console.log(counter);
//   if (counter === 0) {
//     clearInterval(timer);
//     console.log("Happy birthday!");
//   }
// }, 1000);

// -------------------------------------------------------------

// const names = ["Ali", "Mohammad", "Amir", "Nahal", "Fateme", "Sara"];

// const filterNames = names.filter((item) => item.length > 3);
// const filterNames = names.map((item) => item.length > 3);

// console.log(filterNames);

// -------------------------------------------------------------
// quiz 25
// const words = [
//   "spray",
//   "limit",
//   "elite",
//   "exuberant",
//   "destruction",
//   "present",
// ];

// console.log(words.filter((item) => item.length > 6));

// -------------------------------------------------------------

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const isNumbersEven = numbers.every((item) => item % 2 === 0);

// console.log(isNumbersEven);

// ----------------------------------------------------------------
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const isNumbersEven = numbers.some((item) => item % 2 === 0);

// console.log(isNumbersEven);

// ----------------------------------------------------------------
// quiz 28

// const isEvenNumbers = (array) => array.every((item) => item % 2 === 0);

// console.log(isEvenNumbers([2, 4, 6, 8]));
// console.log(isEvenNumbers([1, 4, 6, 8]));
// console.log(isEvenNumbers([1, 2, 3]));

// ----------------------------------------------------------------
const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 5;
const sumWithInitial = array1.reduce(
  (total, currentValue) => total + currentValue,
  initialValue
);

console.log(sumWithInitial);
