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
};

restaurant.delivery({
  time: '22:30',
  addr: '4 lane end',
  mainIndex: 2,
  starterIndex: 2,
});

// object function default value
restaurant.delivery({
  addr: '4 lane end',
  starterIndex: 2,
});
const [x, y, z, q] = restaurant.categories;

console.log(x, y, z, q);

let [main, secondary] = restaurant.categories;

console.log(main, secondary);

// using destructuring to reassign var
[main, secondary] = [secondary, main];
console.log(main, secondary);

// destructuring function
const [starter, mainCourse] = restaurant.order(2, 0);

console.log(starter, mainCourse);

// destructuring in a destructured array (Nested destructure)
const nested = [2, 3, [4, 5]];

const [i, , [j, k]] = nested;
console.log(i, j, k);

// setting default values

const num = [2, 3];

const [a = 1, b = 1, c = 1] = num;

console.log(a, b, c);

// object destructuring

const { name, openingHours, categories } = restaurant;

console.log(name, '\n', openingHours, '\n', categories);

// renaming in object destructure
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;

console.log(restaurantName, hours, tags);

// default value for object destructuring
const { menu = [], starterMenu: starterM = [] } = restaurant;

console.log(menu, starterM);

// mutating variables
// let u = 111;
// let l = 999;
// const obj = { a: 23, b: 7, c: 14 };

// ({ a, b } = obj);

// console.log(a, b);

// nested objects
const {
  sat: { open: o, close: C },
} = openingHours;
console.log(open, close);
