'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  delivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '18:00',
    addr,
  }) {
    console.log(
      `completed ${this.starterMenu[starterIndex]}, ${this.mainMenu[mainIndex]}, to ${addr} for ${time}`
    );
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Your pasta is here, made using ${ing1}, ${ing2}, ${ing3}`);
  },
};

// restaurant.delivery({
//   time: '22:30',
//   addr: '4 lane end',
//   mainIndex: 2,
//   starterIndex: 2,
// });

// object function default value
//
// using destructuring to reassign var
// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// destructuring function
// const [starter, mainCourse] = restaurant.order(2, 0);

// console.log(starter, mainCourse);

// destructuring in a destructured array (Nested destructure)
// const nested = [2, 3, [4, 5]];

// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// setting default values

// const num = [2, 3];

// const [a = 1, b = 1, c = 1] = num;

// console.log(a, b, c);

// object destructuring

// const { name, openingHours, categories } = restaurant;

// console.log(name, '\n', openingHours, '\n', categories);

// renaming in object destructure
// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;

// console.log(restaurantName, hours, tags);

// default value for object destructuring
// const { menu = [], starterMenu: starterM = [] } = restaurant;

// console.log(menu, starterM);

// mutating variables
// let u = 111;
// let l = 999;
// const obj = { a: 23, b: 7, c: 14 };

// ({ a, b } = obj);

// console.log(a, b);

// nested objects
// const {
//   sat: { open: o, close: C },
// } = openingHours;
// console.log(open, close);

// const arr = [7, 8, 9];
// const [a, b, c] = arr;
// const badNewArr = [1, 2, a, b, c];
// console.log(badNewArr);

// spread operator

// takes all value out of arr and writes it to newArray
// const newArray = [1, 2, ...arr];
// console.log(newArray);

// // logs each elem in arr
// console.log(...newArray);

// const newMenu = [...restaurant.mainMenu, 'pasta', 'sauce'];
// console.log(newMenu);

// // copy array
// const mainMenuCopy = [...restaurant.mainMenu];

// // join starter and main menu
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu);

// // iterables: arrays, strings, maps, sets, NOT objects

// // const ingredients = [
// //   prompt('lets make pasta! Enter ingredient 1: '),
// //   prompt('Enter ingredient 2: '),
// //   prompt('Enter ingredient 3: '),
// // ];

// // restaurant.orderPasta(...ingredients);

// // const newRestaurant = { foundedIn: 1989, ...restaurant, founder: 'bing' };

// // const restaurantCopy = { ...newRestaurant };

// // REST of elements

// const [pizza, , risotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];

// console.log(pizza, risotto, otherFood);

// // objects with REST

// const { sat, ...weekdays } = restaurant.openingHours;

// console.log(weekdays);

// // REST and SPREAD for function parm

// const add = function (...num) {
//   return num.reduce((accumulator, currentValue) => {
//     return accumulator + currentValue;
//   });
// };
// console.log(add(2, 3, 4));

// // Short circuiting

// // OR ||

// // truthy value will output first truthy value
// console.log('asdf' || 2);
// // falsy value will output last falsy value if all are falsy
// console.log(null || undefined);

// restaurant.newGuests = 23;

// const guests1 = restaurant.newGuests ? restaurant.newGuests : 10;

// console.log(guests1);

// // same as ^^
// const guests2 = restaurant.newGuests || 10;

// console.log(guests2);

// // AND &&
// // only take in the first value into consideration
// // will return the first falsy value if both values aren't truthy
// console.log(0 && 'jonas');
// console.log(3 && 0);

// // wll output the last truthy if all is is truthy value
// console.log(4 && 3);

// console.log(0 && null);

// // nullish operator (values: Null and Undefined)
// restaurant.newGuests = 0;

// const guests = restaurant.newGuests ?? 10;

// console.log(guests);

const rest1 = {
  name: 'Capri',
  numGuests: 20,
};

const rest2 = {
  name: 'La Pizzeria',
  owner: 'Giovanni Rossi',
};

// logical assignment operator
rest1.numGuests = rest1.numGuests || 10;

// same^^
rest1.numGuests ||= 10;

// rest2.numGuests = rest2.numGuests || 10;

rest2.numGuests ??= 10;

console.log(rest2);

///////////////////////////////////////
// Coding Challenge #1

/* 
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). 
In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')

2. The first player in any player array is the goalkeeper and the others are field players.
For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, 
and one array ('fieldPlayers') with all the remaining 10 field players

3. Create an array 'allPlayers' containing all players of both teams (22 players)

4. During the game, Bayern Munich (team 1) used 3 substitute players.
So create a new array ('players1Final') containing all the original team1 players plus 
'Thiago', 'Coutinho' and 'Perisic'

5. Based on the game.odds object, create one variable for each odd 
(called 'team1', 'draw' and 'team2')

6. Write a function ('printGoals') that receives an arbitrary
 number of player names 
(NOT an array) and prints each of them to the console, 
along with the number of goals that 
were scored in total (number of player names passed in)

7. The team with the lower odd is more likely to win. Print to the console which team is more 
likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. 
Then, call the function again with players from game.scored

GOOD LUCK 😀
*/

// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// const [players1, players2] = game.players;

// const [gk, ...fieldPlayers] = players1;

// const [...allPlayers] = [...players1, ...players2];

// const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];

// const { team1, x: draw, team2 } = game.odds;

// const printGoals = function (...players) {
//   console.log(`${players.join(', ')}, have scored! Score: ${players.length}:0`);
// };

// printGoals('Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels');

// const winningTeam = function () {
//   // && is basically THEN
//   (team1 < team2 && console.log(`${game.team1} are more likely to win`)) ||
//     console.log(`${game.team2} are more likely to win`);
// };
// winningTeam(team1, draw, team2);

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for (let item of menu) {
//   console.log(item);
// }

// for (let item of menu.entries()) {
//   const [index, items] = item;
//   console.log(`${index + 1}, ${items}`);
// }
