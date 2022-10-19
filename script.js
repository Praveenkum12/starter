'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const x = flights.split('+');
// console.log(x);

// for (const el of x) {
//   const [type, from, to, time] = el.split(';');
//   const output = `${type.startsWith('_Delayed') ? '🙉' : ''} ${type
//     .replaceAll('_', ' ')
//     .trim()} from ${from.slice(0, 3).toUpperCase()} to ${to
//     .slice(0, 3)
//     .toUpperCase()} (${time.replace(':', 'h')})`;
//   console.log(output.padStart(50, ' '));
// }

// Data needed for first part of the section
// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//   order: function ({ starterIndex = 0, mainIndex = 0 }) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },
//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   },
// };

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// const capitalization = function (name) {
//   const arr = name.split(' ');
//   // console.log(arr);
//   let newArr = [];
//   for (const i of arr) {
//     newArr.push(i[0].toUpperCase().concat(i.slice(1)));
//   }
//   return newArr.join(' ');
// };

// console.log(capitalization('praveen kumar'));
// console.log(capitalization('rasheed ali bashir rahman'));

// const email = 'hello.praveen.io';
// const loginEmail = ' Hello@Jonas.I0 \n';

// console.log(loginEmail.toLowerCase().trim() === email);

// const arr = ['11B', '23C', '3E', '23a', '78b'];

// for (const val of arr) {
//   let s = val.slice(-1);
//   if (s.toUpperCase() === 'B' || s.toUpperCase() === 'E')
//     console.log('🎉 You got lucky seat');
//   else console.log('😒 You got middle seat.');
// }
// MAP

// const src = [
//   ['question', 'What is the best programming language in the world?'],
//   [1, 'c'],
//   [2, 'Java'],
//   [3, 'Javascript'],
//   ['correct', 3],
//   [true, '🎉 congarts thats right'],
//   [false, ' Try again'],
// ];

// // console.log(Object.entries(src));
// const question = new Map(src);
// // console.log(question);
// console.log(question);
// // console.log(question.size);

// console.log(question.get('question'));
// for (const [key, value] of question) {
//   if (typeof key === 'number') {
//     console.log(`${key} : ${value}`);
//   }
// }

// const answer = Number(prompt('Your answer'));

// console.log(question.get(answer === question.get('correct')));

// SET

// const x = [10, 20, 20, 40, 10];
// const y = new Set(x);
// console.log(y);
// y.delete(40);
// console.log(y);
// console.log(y.has(20));
// console.log(y.size);
// console.log(y.add(60));
// console.log(y);

// Coding Challenge #2

/* 
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

GOOD LUCK 😀
*/

//1.
// for (const [i, el] of game.scored.entries()) {
//   console.log(`Goal ${i + 1}: ${el}`);
// }

//2.
// console.log(Object.values(game.odds));
// let sum = 0;
// let x = Object.values(game.odds).length;
// for (const val of Object.values(game.odds)) {
//   sum += val;
// }
// console.log(sum / x);

//3.
// for (const [key, value] of Object.entries(game.odds)) {
//   let str = key === 'x' ? 'Draw' : `Victory ${game[key]}`;
//   console.log(`Odd of ${str}: ${value}`);
// }

// const gameEvents = new Map([
//   [17, '⚽️ GOAL'],
//   [36, '🔁 Substitution'],
//   [47, '⚽️ GOAL'],
//   [61, '🔁 Substitution'],
//   [64, '🔶 Yellow card'],
//   [69, '🔴 Red card'],
//   [70, '🔁 Substitution'],
//   [72, '🔁 Substitution'],
//   [76, '⚽️ GOAL'],
//   [80, '⚽️ GOAL'],
//   [92, '🔶 Yellow card'],
// ]);

// console.log(Object.entries(restaurant.openingHours));
// for (const [i, { open, close }] of Object.entries(restaurant.openingHours)) {
//   console.log(i, open, close);
// }

// for (const [i, value] of restaurant.mainMenu.entries()) {
//   console.log(i, value);
// }

// const praveen = {
//   name: 'Praveen kumar',
//   year: 1995,
//   calcAge: function () {
//     console.log(this);
//     const isMellanial = () => {
//       console.log(this);
//       console.log(this.year >= 1981 && this.year <= 1996);
//     };
//     isMellanial();
//   },
// };

// praveen.calcAge();

// const x = function () {
//   const y = function () {
//     var hi = 30;
//   };
//   y();
//   console.log(hi);
// };
// x();

// if (true) {
//   console.log(this);
// }

// const praveen = {
//   name: 'Praveen',
//   year: 2000,
//   calcAge: function () {
//     console.log(this);
//     console.log(2022 - this.year);
//   },
// };

// const priya = {
//   name: 'Priya',
//   year: 2001,
// };

// praveen.calcAge();
// priya.calcAge = praveen.calcAge;
// priya.calcAge();

// priya = praveen;
// console.log(praveen, priya);
// priya.name = 'Priyanga';
// console.log(praveen, priya);

// const obj1 = {
//   name: 'Praveen',
//   job: 'Entrepreneur',
//   salary: 10000,
// };

// const obj2 = { ...obj1 };
// obj2.name = 'Priya';
// obj2.dream = 'Nothing';
// console.log(obj1, obj2);

// const arr = [1, 2, 3];
// const arrCopy = [...arr];
// arrCopy[0] = 5;
// arrCopy[3] = 90;
// console.log(arr, arrCopy);

// const obj = {
//   starterIndex: 0,
//   mainIndex: 2,
// };

// console.log(restaurant.order(obj));

// const { openingHours } = restaurant;
// const {
//   fri: { open: op, close: cl },
// } = openingHours;
// console.log(openingHours);
// console.log(op, cl);

// console.log(restaurant.order());

// let [a, b] = [999, 110];
// const obj = {
//   a: 20,
//   b: 30,
// };
// console.log(a, b);
// ({ a, b } = obj);
// console.log(a, b);

// const { name, location: locate, categories, termi = [] } = restaurant;
// console.log(name, locate, categories, termi);

// const arr = [
//   { a: 20, b: 40 },
//   { c: 50, d: 60 },
// ];
// console.log(arr[0].b + arr[1].d);

// const [starter, menu] = restaurant.order(2, 0);
// console.log(starter, menu);

// const nested = [2, 4, [5, 6]];
// const nest = [2, 4, [5, 6]];
// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// const [x, , , y] = [2, 3, 4, 5, 6];
// console.log(x, y);

// let [firstFav, secondFav] = restaurant.categories;
// console.log(firstFav, secondFav);
// [firstFav, secondFav] = [secondFav, firstFav];
// console.log(firstFav, secondFav);

// const x = [1, 2, 3, 4];
// const y = [5, 6, 7];
// const z = x.concat(y);
// console.log(z);

// let arr1 = 'Hi i am you';
// let arr2 = ' ,you are me';
// let arr3 = arr1.concat(arr2);
// console.log(arr3);
