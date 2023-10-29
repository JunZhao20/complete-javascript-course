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
  nuwGuests: 20,
};

const rest2 = {
  name: 'La Pizzeria',
  owner: 'Giovanni Rossi',
};

// logical assignment operator
rest1.numGuests = rest1.numGuests || 10;

// same^^
rest1.numGuests ||= 10;

rest2.numGuests = rest2.numGuests || 10;
