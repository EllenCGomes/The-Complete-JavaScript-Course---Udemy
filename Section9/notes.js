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
    // prompt("Let's make pasta! Please enter your ingredients. \n Ingredient 1: "),
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

/*
# FOR-OF LOOP 
-> does not use a counter or condition
-> automatically loop through the entire array and in each iteration gives access to the current element
-> still possible to use Continue and Break keywords
-> to get the index you need to use the Entries method
*/

const numberedMenu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of numberedMenu) console.log(item);

for (const [i, element] of numberedMenu.entries()) console.log(`${i + 1}: ${element}`);

/*
# ENHANCED OBJECT LITERALS

-> changes in the way of writing objects literally by hand
-> you can use an object outside of the object you are creating and use it as a property in the new one (ie. opening hours) by just writing the same name
-> to write methods you no longer need to use : and the word function - it will be the name of the function and ()
-> can use calculation on the property names (ie. weekdays)

const weekdays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

const ***openingHours*** = {
        [weekdays[3]]: {
            open: 12,
            close: 22,
        },
        [weekdays[4]]: {
            open: 11,
            close: 23,
        },
        [`day-${2 + 4}`]: {
            open: 0, // Open 24 hours
            close: 24,
        },
    };

const restaurant = {
    restaurantName: "Classico Italiano",
    location: "Via Angelo Tavanti 23, Firenze, Italy",
    categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
    starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
    mainMenu: ["Pizza", "Pasta", "Risotto"],
    
   ***openingHours*** - ES6 enhanced object literals

    order: function (starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },


    - ES6 enhanced object literals for functions

    orderDelivery({ starterIndex, mainIndex, time, address }) {
        console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
    },

    orderPasta(ingr1, ingr2, ingr3) {
        console.log(`Here is your pasta with ${ingr1}, ${ingr2} and ${ingr3}`);
    },

    orderPizza(mainIngredient, ...otherIngredients) {
        console.log(mainIngredient);
        console.log(otherIngredients);
    },
};
*/

/*
# OPTIONAL CHAINING OPERATOR(?.)
-> if an object property does not exist, undefined is immediately returned to avoid errors
-> test if the value on the left exists (NOT null or undefined)
*/

console.log(restaurant.openingHours.mon?.open);
// if the property monday exists (NOT null or undefined), then read the next one "open", if not it will return undefined

console.log(restaurant.openingHours?.mon?.open);
// check both properties openingHours and mon

const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

for (const day of days) {
    console.log(day);
    const open = restaurant.openingHours[day]?.open ?? "closed";
    console.log(`on ${day}, we open at ${open}`);
}

// calling methods
console.log(restaurant.order?.(0, 1) ?? "Method does not exist");

// arrays
const users = [{ name: "Jonas", email: "hello@jonas.io" }];
console.log(users[0]?.name ?? "User array empty");

/*
# LOOPING OBJECTS KEYS, VALUES AND ENTRIES

*/


// keys
const properties = Object.keys(openingHours);
console.log(`We are open ${properties.length} per week on: ${properties}`);

// values
const values = Object.values(openingHours);
console.log(values);

// entries - keys and values
const entries = Object.entries(openingHours);
console.log(entries);

for (const [key, { open, close }] of entries) {
    console.log(`On ${key} we open at ${open} and close at ${close}`);
}

/*
# SETS
-> collection of unique values. Cannot have duplicates.
-> to create a set we use new Set(array/string);
-> it is iterable;
-> it has no indexes so there is no way of accessing the element through them;
-> if your goal is to store values in order and retrieve them, you should use an array;
-> the order of elements is irrelevant;
-> to check the length, use size method;
-> to check if the set has a value, use has method;
-> to add a value to the set, use add method. If you add more than one element with the same value, the set will still have just one element since it must be unique;
-> to delete an element, use delete method;
-> to delete all the elements in a set, use clear method;
-> best use case for sets is to eliminate duplicates in arrays;
*/

const orderSet = new Set(["Pasta", "Pizza", "Pizza", "Risotto", "Pasta", "Pizza"]);
console.log(orderSet); // only shows the unique values
console.log(new Set("Jonas"));
console.log(orderSet.size);
console.log(new Set("jonasschmedtmann").size);
console.log(orderSet.has("Pizza"));
console.log(orderSet.add("Garlic Bread"));
console.log(orderSet.add("Garlic Bread"));
console.log(orderSet.delete("Risotto"));
//console.log(orderSet.clear());

for (const order of orderSet) console.log(order);

// examples
const staff = ["Waiter", "Chef", "Waitress", "Manager", "Waitress", "Chef", "Waiter"];

const staffUnique = new Set(staff);
console.log(staffUnique);

// create a new array from the set
const staffArray = [...new Set(staff)];
console.log(staffArray);

/*
# MAP
-> map values to keys;
-> keys can be of any type;
-> use new Map to create a new map;
-> to add a key/value, use the set method. The set method can  be chained;
-> to retrieve a value, use the method get, passing the key as parameter;
-> to check if a key exists, use has method;
-> to delete a key, use delete method;
-> to check the length, use size method;
-> to remove all elements, use clear method;
*/

const rest = new Map();
rest.set("name", "Classico Italiano");
rest.set(1, "Firenze, Italy");
rest.set(2, "Lisbon, Portugal");

rest
    .set("categories", ["Italian", "Pizzeria", "Vegetarian", "Organic"])
    .set("open", 11)
    .set("close", 23)
    .set(true, "We are open!")
    .set(false, "We are closed");

const time = 21;
console.log(rest.get(time > rest.get("open") && time < rest.get("close")));
console.log(rest.has("categories"));
console.log(rest.delete(2));
//console.log(rest.clear());
console.log(rest.size);

// use objects as keys
const ar = [1, 2];
rest.set(ar, "Test");
console.log(rest.get(ar));

//rest.set(document.querySelector("h1"), "Heading");

// another way of creating map
const question = new Map([
    ["question", "What is the best programming language?"],
    [1, "C"],
    [2, "Java"],
    [3, "JavaScript"],
    ["answer", 3],
    [true, "Correct!"],
    [false, "Try again"],
]);

// convert object to map - map has the same estructure as object entries
const hoursMap = new Map(Object.entries(openingHours));

// iteration
console.log(question.get("question"));
for (const [key, value] of question) {
    if (typeof key === "number") console.log(`Answer ${key}: ${value}`);
};

//const answer = Number(prompt("Your answer"));
const answer = 2;

console.log(question.get(answer === question.get("answer")));

// convert map to array
console.log([...question]);
console.log([...question.keys()]);
console.log([...question.values()]);

/*
# WHICH DATA TO USE

-> ARRAYS (simple list)
when you need:
    - ORDERED list of values (might contain duplicates);
    - manipulate data;

-> SETS (simple list)
when you need:
    - UNIQUE values;
    - high performance;
    - remove duplicates;

-> OBJECTS (key/value pair)
when you need:
    - functions (methods);
    - to work with JSON;
    - write and access values with . and [] in a easy way;

-> MAPS (key/value pair)
when you need:
    - better performance;
    - keys with ANY data type;
    - iterate or compute size in a easy way;
    - to map key to values;
    - keys that are not strings
*/
