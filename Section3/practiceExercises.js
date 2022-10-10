//LECTURE - FUNCTIONS

/* Notes:
-  code that can de reused
- not all functions need to return something (does not produce value)
Ex: function logger() {
        console.log("My name is Jonas");
    }

    //calling / running / invoking function
    logger();

- function with parameter:
Ex: function fruitProcessor(apples, oranges) {
        const juice = `juice with ${apples} apples and ${oranges} oranges.`;
        return juice;
    }

    //saving the result in a variable
    const appleJuice = fruitProcessor(5, 0);
    console.log(appleJuice);
*/

/*Practice Exercise:
1. Write a function called 'describeCountry' which takes three parameters: 'country', 'population' and 'capitalCity'. Based on this input, the function returns a string with this format: 'Finland has 6 million people and its capital city is Helsinki'.
2. Call this function 3 times, with input data for 3 different countries. Store the returned values in 3 different variables, and log them to the console. */

const describeCountry = function (country, population, capitalCity) {
    return `${country} has ${population} million people and its capital city is ${capitalCity}`
};

const brazil = describeCountry("Brazil", 202, "Brasilia");
const ireland = describeCountry("Ireland", 5, "Dublin");
const finland = describeCountry("Finland", 6, "Helsinki");

console.log(brazil)
console.log(ireland)
console.log(finland)

//LECTURE - FUNCTIONS DECLARATIONS VS EXPRESSIONS

/* Notes:
- function declaration (can be called/used before be defined/declared):
Ex: function calcAge(birthYear) {
    return 2037 - birthYear;
}
    const age = calcAge(1991);

- function expression (produce value; cannot be called before be defined -> needs to be initialized first; stored in a variable) / anonymous function:
Ex: const calcAge = function (birthYear) {
    return 2037 - birthYear;
}
    const age = calcAge(1991);  
*/

/*Practice Exercise:
1. The world population is 7900 million people. Create a function declaration called 'percentageOfWorld1' which receives a 'population' value, and returns the percentage of the world population that the given population represents. For example, China has 1441 million people, so it's about 18.2% of the world population.
2. Call 'percentageOfWorld1' for 3 populations of countries of your choice, store the results into variables, and log them to the console.
3. Create a function expression which does the exact same thing, called
'percentageOfWorld2', and also call it with 3 country populations (can be the same population. */

function percentageOfWorld1(population) {
    return (population / 7900) * 100;
}

const populationBrazil = percentageOfWorld1(212).toFixed(1);
const populationChina = percentageOfWorld1(1441).toFixed(1);
const populationIreland = percentageOfWorld1(5).toFixed(1);

console.log(populationBrazil, populationChina, populationIreland);

const percentageOfWorld2 = function (population) {
    return (population / 7900) * 100;
}

const populationGermany = percentageOfWorld1(84).toFixed(1);
const populationTurkey = percentageOfWorld1(85).toFixed(1);
const populationIndia = percentageOfWorld1(1417).toFixed(1);

console.log(populationGermany, populationTurkey, populationIndia);

//LECTURE - ARROW FUNCTIONS

/* Notes:
- quick one line functions; has no "this" keyword

(one line/one parameter)
    const calcAge = birthYear => 2037 - birthYear
    const age = calcAge(1991);

(one parameter/multiple lines)
    const yearsUntilRetirement = birthYear => {
        const age = 2037 - birthYear;
        const retirement =  65 - age;
        return retirement;
    }

(multiple parameters and lines)
    const yearsUntilRetirement = (birthYear, firstName) => {
        const age = 2037 - birthYear;
        const retirement = 65 - age;
        return `${firstName} retires in ${retirement} years;
    }
*/

/*Practice Exercise:
1. Recreate the last assignment, but this time create an arrow function called 'percentageOfWorld3'. */

const percentageOfWorld3 = (population) => (population / 7900) * 100;

const populationAustralia = percentageOfWorld3(26).toFixed(1);
const populationCanada = percentageOfWorld3(38).toFixed(1);
const populationSpain = percentageOfWorld3(47).toFixed(1);

console.log(populationAustralia, populationCanada, populationSpain);

//LECTURE - FUNCTIONS CALLING OTHER FUNCTIONS

/* Notes:
-  const cutPieces = function(fruit) {
        return fruit * 4;
    };

    const fruitProcessor = function(apples, oranges) {
        const applePieces = cutPieces(apples);
        const orangePieces = cutPieces(oranges);

        const juice = `Juice with ${applesPieces} pieces of apple and ${orangePieces} pieces of orange.`;

        return juice;
    }
    console.log(fruitProcessor(2, 3));
*/

/*Practice Exercise:
1. Create a function called 'describePopulation'. Use the function type you like the most. This function takes in two arguments: 'country' and
'population', and returns a string like this: 'China has 1441 million people, which is about 18.2% of the world.'
2. To calculate the percentage, 'describePopulation' call the  'percentageOfWorld1' you created earlier.
3. Call 'describePopulation' with data for 3 countries of your choice. */

const describePopulation = function (country, population) {
    const percentage = percentageOfWorld1(population).toFixed(1);
    return `${country} has ${population} million people, which is about ${percentage}% of the world.`
}

const Brazil = describePopulation("Brazil", 212);
console.log(Brazil);

//LECTURE - INTRODUCTION TO ARRAYS

/* Notes:
-  ways of creating an array:
Ex: const friends = ["Michael", "Steven", "Peter"] which is a literal syntax OR const years = new Array(1990, 1985, 2002);
- get array length -> name_array.length;
- get last element -> name_array(name_array.length - 1) - the length starts counting from 1 while the array starts counting from zero;
- since an array is not a primitive element, you can declare an array using const and still change element values. You can't change the whole array, though.
- an array accepts different types of values:
Ex: const firstName = "Jonas";
const jonas = [firstName, "Schmedtmann", 2037-1991, "teacher", friends];
- functions can be called inside arrays:
Ex: const calcAge = function(birthYear) {
    return 2037 - birthYear;
}
const years = [1990, 2002, 1985, 2020];
const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[2]), calcAge(years[years.length - 1])];
*/

/*Practice Exercise:
1. Create an array containing 4 population values of 4 countries of your choice. You may use the values you have been using previously. Store this array into a variable called 'populations'.
2. Log to the console whether the array has 4 elements or not (true or false).
3. Create an array called 'percentages' containing the percentages of the world population for these 4 population values. Use the function
'percentageOfWorld1' that you created earlier to compute the 4
percentage values. */

const populations = [212, 1441, 5, 84];
console.log(populations.length == 4);

const percentage = [percentageOfWorld1(populations[0]).toFixed(1), percentageOfWorld1(populations[1]).toFixed(1), percentageOfWorld1(populations[2]).toFixed(1), percentageOfWorld1(populations[3]).toFixed(1)];
console.log(percentage);

//LECTURE - BASIC ARRAY OPERATORS (METHODS)

/* Notes:

-> TO ADD

- push method - add an element to the end of an array and return the length of the new array. If you store the method in a variable it will show the length
Ex: const friends = ["Michael", "Steven", "Peter"];
    //friends.push("Jay");
const newLength = friends.push("Jay");
console.log(newLength); -> value will be 4

- unshift method - add an element to the beginning of an array. Also return the length of the new array
Ex: friends.unshift("John")

-> TO REMOVE

- pop method - opposite of push - removes the last element of an array. Returns the element that was removed
Ex: const popped = friends.pop();
console.log(popped) -> value will be "Jay"

- shift method - opposite of unshift - removes the first element of an array. Also returns the element that was removed
Ex: friends.shift();

-> OTHERS

- index of method - gives the element index in an array. If you search for an element that is not in the array, it will return -1
Ex: console.log(friends.indexOf("Steven"))

- includes method - returns a boolean saying if the element is in an array or not
Ex: console.log(friends.includes("Steven")); -> value will be true
*/

/*Practice Exercise:
1. Create an array containing all the neighboring countries of a country of your choice. Choose a country which has at least 2 or 3 neighbors. Store the array into a variable called 'neighbors'.
2. At some point, a new country called 'Utopia' is created in the neighborhood of your selected country. So add it to the end of the 'neighbors' array.
3. Unfortunately, after some time, the new country is dissolved. So remove it from the end of the array.
4. If the 'neighbors' array does not include the country ‘Germany’, log to the console: 'Probably not a central European country :D'.
5. Change the name of one of your neighboring countries. To do that, find the index of the country in the 'neighbors' array, and then use that index to change the array at that index position. For example, you can search for 'Sweden' in the array, and then replace it with 'Republic of Sweden'.
 */

const neighbors = ["Uruguai", "Venezuela", "Bolivia"];

neighbors.push("Utopia");
console.log(neighbors);

neighbors.pop();
console.log(neighbors);

if (!neighbors.includes("Germany")) {
    console.log("Probably not a central European country.");
}

neighbors[neighbors.indexOf("Venezuela")] = "Republica da Venezuela";
console.log(neighbors)

//LECTURE - INTRODUCTION TO OBJECTS

/* Notes:
- has a key(properties)/value structure
- easiest way to create is with object literal syntax, created with curly braces
Ex:
const jonas = {
    firstName: "Jonas",
    lastName: "Schmedtmann",
    age: 2037 - 1991,
    job: "teacher",
    friends: ["Michael", "Peter", "Steven"]
};
*/

/*Practice Exercise:
1. Create an object called 'myCountry' for a country of your choice, containing properties 'country', 'capital', 'language', 'population' and 'neighbors' (an array like we used in previous assignments. */

const myCountry = {
    country: "Brazil",
    capital: "Brasilia",
    language: "portuguese",
    population: 212,
    neighbors: ["Uruguay", "Argentina", "Paraguay", "Bolivia", "Peru", "Colombia", "Venezuela", "Guyana", "Suriname", "French Guiana"]
}

//LECTURE - DOT VS BRACKET NOTATION

/* Notes:
- to get the data you can use the dot or square brackets notation
Ex: console.log(jonas.lasName); or console.log(jonas["lastName"]);
The difference between the two is that with the square brackets you can create an expression.
Ex 1: const nameKey = "Name";
console.log(jonas["first" + nameKey]);

Ex 2: const interestedIn = prompt("What do you want to know about Jonas? Choose between firstName, lastName, age, job or friends");
jonas[interestedIn] ? console.log(jonas[interestedIn]) : console.log("Wrong request")

- assign new data:
Ex: jonas.location = "Portugal";
jonas["twitter"] = "@jonasschmedtman";*/

/*Practice Exercise:
1. Using the object from the previous assignment, log a string like this to the console: 'Finland has 6 million finnish-speaking people, 3 neighboring countries and a capital called Helsinki.'
2. Increase the country's population by two million using dot notation, and then decrease it by two million using brackets notation. */

console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbors.length} neighboring countries and a capital called ${myCountry.capital}`)

myCountry.population = 214;
myCountry["population"] = 212;

console.log(myCountry);

//LECTURE - OBJECT METHODS

/* Notes:
-  property that holds a function value
Ex: const jonas = {
    firstName: "Jonas",
    lastName: "Schmedtmann",
    birthYear: 1991,
    job: "teacher",
    friends: ["Michael", "Peter", "Steven"]

    calcAge: function () {
        return 2037 - this.birthYear;
    }

    ALSO AN OPTION
    calcAge: function() {
        this.age = 2037 - this.birthYear;
        return this.age
    }
};

    console.log(jonas.calcAge());
    console.log(jonas["calcAge"]());

    ALSO AN OPTION
    console.log(jonas.age);
*/

/*Practice Exercise:
1. Add a method called 'describe' to the 'myCountry' object. This method will log a string to the console, similar to the string logged in the previous assignment, but this time using the 'this' keyword.
2. Call the 'describe' method.
3. Add a method called 'checkIsland' to the 'myCountry' object. This
method will set a new property on the object, called 'isIsland'.
'isIsland' will be true if there are no neighboring countries, and false if there are. Use the ternary operator to set the property. */

const myCountry2 = {
    country: "Brazil",
    capital: "Brasilia",
    language: "portuguese",
    population: 212,
    neighbors: ["Uruguay", "Argentina", "Paraguay", "Bolivia", "Peru", "Colombia", "Venezuela", "Guyana", "Suriname", "French Guiana"],

    describe: function () {
        console.log(`${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbors.length} neighboring countries and a capital called ${this.capital}`);
    },

    checkIsland: function () {
        this.isIsland = (this.neighbors.length === 0) ? true : false;

        return this.isIsland;
    }
};

myCountry2.describe();
myCountry2.checkIsland();
console.log(myCountry2);

//LECTURE - FOR LOOP

/* Notes:
-  keeps running while the condition is true
    for (let i = 1; i <= 10; i++) {
        console.log(`Lifting weight repetition: ${i}` )
    }
*/

/*Practice Exercise:
1. There are elections in your country! In a small town, there are only 50 voters. Use a for loop to simulate the 50 people voting, by logging a string like this to the console (for numbers 1 to 50): 'Voter number 1 is currently voting'. */

for (let i = 1; i <= 50; i++) {
    console.log(`Voter number ${i} is currently voting`)
}

//LECTURE - LOOPING ARRAYS, BREAKING AND CONTINUING

/* Notes:
const jonas = [
    "Jonas",
    "Schmedtmann",
    2037 - 1991,
    "teacher",
    ["Michael", "Peter", "Steven"],
];

const types = [];

for (let i = 0; i < jonas.length; i++) {

    console.log(jonas[i], typeof jonas[i]);

    types[i] = typeof jonas[i] OR types.push(typeof jonas[i]);
}

- continue -> exit de current iteration of the loop and continue to the next one;

for (let i = 0; i < jonas.length; i++) {
    if(typeof jonas[i] !== "string") continue; -> if this condition is true, it won't move to the next line and the loop will start again analyzing the next i 

    console.log(jonas[i], typeof jonas[i]);

- break -> terminate the whole loop
for (let i = 0; i < jonas.length; i++) {
    if(typeof jonas[i] === "number") break; -> if this condition is true, the whole loop will stop

    console.log(jonas[i], typeof jonas[i]);

*/

/*Practice Exercise:
1. Let's bring back the 'populations' array from a previous assignment.
2. Use a for loop to compute an array called 'percentages2' containing the percentages of the world population for the 4 population values. Use the function 'percentageOfWorld1' that you created earlier.
3. Confirm that 'percentages2' contains exactly the same values as the
'percentages' array that we created manually in the previous assignment, and reflect on how much better this solution is. */

const populations2 = [212, 1441, 5, 84];
const percentages2 = [];

for (let i = 0; i < populations2.length; i++) {
    let percentage2 = percentageOfWorld1(populations2[i]).toFixed(1);
    percentages2.push(percentage2);
}

console.log(percentages2);

//LECTURE - LOOPING BACKWARDS AND LOOPS IN LOOPS

/* Notes:

- Looping backwards:
const jonas = [
    "Jonas",
    "Schmedtmann",
    2037 - 1991,
    "teacher",
    ["Michael", "Peter", "Steven"],
];

for (let i = jonas.length-1; i >= 0; i--) {
    console.log(jonas[i]);
}

- Loops in loops:
for (let i = 1; i < 4; i++) {
    console.log(`Starting exercise ${i}`);

    for (let j = 1; j < 6; j++) {
        console.log(`Lifting weight repetition ${j}`);
    }
}

*/

/*Practice Exercise:
1. Store this array of arrays into a variable called 'listOfNeighbors'
[['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 'Russia']];
2. Log only the neighboring countries to the console, one by one, not the entire arrays. Log a string like 'Neighbor: Canada' for each country.
3. You will need a loop inside a loop for this. This is actually a bit tricky, so don't worry if it's too difficult for you! But you can still try to figure this out anyway. */

const listOfNeighbors = [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 'Russia']];

for (let i = 0; i < listOfNeighbors.length; i++) {
    for (let j = 0; j < listOfNeighbors[i].length; j++) {
        console.log(`Neighbor: ${listOfNeighbors[i][j]}`);
    }
}

//LECTURE - WHILE LOOP

/* Notes:

-  using a counter variable:

    for (let j = 1; j < 6; j++) {
        console.log(`Lifting weight repetition ${j}`);
    }

  ------------------------------------------------------

    let i = 1;

    while (i <= 10) {
        console.log(`Lifting weight repetition ${i}`);
        i++;
    }

- without counter variable:

    let dice = Math.trunc(Math.random() * 6) + 1;

    while (dice !== 6) {
        console.log(`You rolled a ${dice}`);
        dice = Math.trunc(Math.random() * 6) + 1;
    }
*/

/*Practice Exercise: 
1. Recreate the challenge from the lecture 'Looping Arrays, Breaking and Continuing', but this time using a while loop (call the array 'percentages3').
2. Reflect on what solution you like better for this task: the for loop or the while loop? */

const populations3 = [212, 1441, 5, 84];
const percentages3 = [];

let i = 0;
while (i < populations3.length) {
    let percentage3 = percentageOfWorld1(populations3[i]).toFixed(1);
    percentages3.push(percentage3);
    i++;
}

console.log(percentages3);


