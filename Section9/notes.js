'use strict';

const restaurant = {
    restaurantName: "Classico Italiano",
    location: "Via Angelo Tavanti 23, Firenze, Italy",
    categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
    starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
    mainMenu: ["Pizza", "Pasta", "Risotto"],
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

    // Destructuring the object in the function parameters - must have the same property names as the obj but does not need to be in the same order
    orderDelivery: function ({ starterIndex, mainIndex, time, address }) {
        console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
    },

    orderPasta: function (ingr1, ingr2, ingr3) {
        console.log(`Here is your pasta with ${ingr1}, ${ingr2} and ${ingr3}`);
    },

    orderPizza: function (mainIngredient, ...otherIngredients) {
        console.log(mainIngredient);
        console.log(otherIngredients);
    },
};

/*
# THE SPREAD OPERATOR (...)

-> used on the right side of the =
-> expand the array into individual elements. Take all the VALUES from the array and write them individually
-> works on iterables (arrays, strings, maps or sets) and objects (even though is not an iterable)
-> multiple variables separated by a comma are usually only expected when we build an array or pass values into a function

*/
const array = [7, 8, 9];
const badNewArray = [1, 2, array[0], array[1], array[2]];

const goodNewArray = [1, 2, ...array];

console.log(...goodNewArray);

const newMenu = [...restaurant.mainMenu, "Gnocci"];
console.log(newMenu);

// Shallow array copies
const mainMenuCopy = [...restaurant.mainMenu];

// Join two or more arrays
const fullMenu = [...restaurant.mainMenu, ...restaurant.starterMenu];

// Iterables
const str = "Jonas";
const letters = [...str, " ", "S."];
console.log(...str);

const ingredients = [
    // prompt("Let's make pasta! Please enter your indredients. \n Ingredient 1: "),
    // prompt("Ingredient 2: "),
    //prompt("Ingredient 3: ")
];

restaurant.orderPasta(...ingredients); // with function

// Objects
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: "Giuseppe" };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant }; //real clone - not shallow
restaurantCopy.restaurantName = "Ristorante Roma";
console.log(restaurant.restaurantName);
console.log(restaurantCopy.restaurantName);


/*
# REST PATTERN (...) AND PARAMETERS

-> used on the left side of the =
-> collects the elements that are unused in the destructuring
-> the spread operator is used where we otherwise write VALUES separated by commas while the rest pattern is used where we otherwise write VARIABLE NAMES separated by commas
*/

// Arrays
const [v, w, ...others] = [1, 2, 3, 4, 5];
console.log(v, w, others); // it will have the variables v, w and others witch is an array with the remaining elements 3, 4 and 5

const [pizza, , risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(pizza, risotto, otherFood);

// Objects
const { sat, ...weekdays } = restaurant.openingHours;

// Functions
const add = function (...numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) sum += numbers[i];
    console.log(sum);
};

add(2, 3);
add(5, 3, 7, 2);
// or
const arrSum = [23, 5, 7];
add(...arrSum); //spread operator - to unpack the array and then the numbers will be packed again in the function as the variable numbers

restaurant.orderPizza("mushrooms", "onion", "olives");
restaurant.orderPizza("mushrooms")


/* 
# OBJECT DESTRUCTURING

-> need to specify the object property name and use curly braces instead of square braces. For objects the position doesn't matter as it does for arrays so no need to leave a space between commas in order to get the right property.
*/
const { restaurantName, openingHours, categories } = restaurant;
console.log(restaurantName, openingHours, categories);

// Using a variable name that is different from the object property
const { restaurantName: name, openingHours: hours, categories: tags } = restaurant;

// Giving both default values - in this case, empty arrays - and new variable names
const { menu = [], starterMenu: starters = [] } = restaurant;

// Switching variables without the need of a temporarily variable (mutating)
let e = 99;
let f = 100;

const obj = { e: 23, f: 7, g: 59 };

({ e, f } = obj);
console.log(e, f);

// Nested objects and new variable names
const { fri: { open: o, close: c } } = openingHours;
console.log(o, c);

// Destructuring in function
restaurant.orderDelivery({
    time: "22:30",
    address: "Via del Sole, 21",
    mainIndex: 2,
    starterIndex: 2,
});


/*
# ARRAY DESTRUCTURING

-> a way of unpacking values from an array or object, into separate variables; break a complex data structure down into a smaller data structure. The original array is not affected
*/

const arr = [2, 3, 4];

const a = arr[0];
const b = arr[1];
const d = arr[2];

//or

const [x, y, z] = arr; // destructuring 
console.log(x, y, z);

let [first, second] = restaurant.categories; // will get the first 2 elements
console.log(first, second);

const [main, , third] = restaurant.categories; // will get the first and third element 

// Switching variables without the need of a temporarily variable (mutating)
[first, second] = [second, first];
console.log(first, second);

// Receive 2 return values from a function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

// Destructuring with nested array and getting the inner array
const nested = [2, 4, [5, 6]];
const [i, , j] = nested;
console.log(i, j);

//Destructuring both the nested array and inner array
const [k, , [l, m]] = nested;
console.log(k, l, m);

// Default values
const [p, q, r] = [8, 9]; // it will return undefined for "r" 
const [s = 1, t = 1, u = 1] = [8, 9] // when you don't know the array size you can set a default value to not get undefined. In this case, only "u" will be 1 

/*
DIFFERENCE BETWEEN THE SPREAD OPERATOR AND DESTRUCTURING
- the spread operator takes all the elements from the array and it doesn't create new variables. As a consequence, we can only use it in places where we otherwise write values separated by commas.
*/

/*
# SHORT CIRCUITING (&& AND || OPERATORS)

-> logical operators && and || can use and return ANY data type (not only boolean)and do the shot circuiting evaluation
-> OR operator (||) - it will return the first truthy value or the last one if all are falsy. Can be used to set default values.
-> AND operator (&&) - it will return the first falsy value or the last one if all are truthy. Can be used to execute code in the second operand if the first one is true.
-> falsy values: undefined, null, NaN, 0, "", false

*/

// Example OR (||)
const guests = restaurant.numGuests ? restaurant.numGuests : 10 // if the property numGuests exists, the variable will have its value (unless its 0 - falsy value - need to use the nullish coalescing operator (??) to fix that), otherwise it will have the default value of 10 

const guests1 = restaurant.numGuests || 10; // does the same as the if for the const guests

// Example AND (&&)
if (restaurant.orderPizza) restaurant.orderPizza("mushrooms", "spinach");

restaurant.orderPizza && restaurant.orderPizza("mushrooms", "spinach") // same as the if


/*
# NULLISH COALESCING OPERATOR (??)

-> it works just like the OR operator but with nullish values (null and undefined) instead of falsy values, so does not consider 0 or "" as falsy values.
*/
const guestCorrect = restaurant.numGuests ?? 10; // if numGuest is different from null or undefined, it will set the variable as 10

/*
# LOGICAL ASSIGNMENT OPERATORS

-> ||=
-> ??=
-> &&=
*/

// Example
const rest1 = {
    name: "Capri",
    numGuests: 0,
}

const rest2 = {
    name: "La Piazza",
    owner: "Giovanni Rossi",
}

// rest1.numGuests = rest1.numGuests ?? 10;
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;
console.log(rest1, rest2);