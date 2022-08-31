/*JS    - dynamic typing: do not have to manually define the data type of the value stored in a variable. Data types are determined automatically
        - value has type, NOT variable - can assign a value with a different data type to the same variable with no problem
*/


//LECTURE - VALUES AND VARIABLES

/* Notes:
- let PI = 3.1415 -> common practice - capitalize variable when they are constants */

/*Practice Exercise:
1. Declare variables called 'country', 'continent' and 'population' and
assign their values according to your own country (population in millions)
2. Log their values to the console */

let country = "Brazil";

let continent = "America";

let populationBrazil = 212.7;

console.log(country)
console.log(continent)
console.log(populationBrazil)


//LECTURE - DATA TYPES

/*Notes:
- number, string, boolean, undefined(let children), null(empty value), symbol(value tha is unique and cannot be changed), bigInt(larger integers than the number type can hold) */

/*Practice Exercise:
1. Declare a variable called 'isIsland' and set its value according to your
country. The variable should hold a Boolean value. Also declare a variable
'language', but don't assign it any value yet
2. Log the types of 'isIsland', 'population', 'country' and 'language'
to the console */

let isIsland = false;

let language

console.log(isIsland)
console.log(language)


//LECTURE - LET, CONST AND VAR

/*Notes:
- let - variables that can be reassigned - mutable; create unassigned variables; local access; block scope
- const - cannot be changed; needs an initial value
- var - mutable; global access, function scope*/

/*Practice Exercise:
1. Set the value of 'language' to the language spoken where you live (some
countries have multiple languages, but just choose one)
2. Think about which variables should be const variables (which values will never change, and which might change?). Then, change these variables to const.
3. Try to change one of the changed variables now, and observe what happens */
language = "Portuguese";
const myCountry = "Brazil";
const myContinent = "America";
//myCountry = "Italy"; //TypeError: Assignment to constant variable


//LECTURE - BASIC OPERATORS

/*Notes:
- can concatenate strings using + sign
- x (+,-,*,/)= y -> x = x (+,-,*,/) y
- x (++ or --) -> x = x +/- 1
- >, <, >=, <= 
- operator precedence https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence -> */

/*Practice Exercise:
1. If your country split in half, and each half would contain half the population, then how many people would live in each half?
2. Increase the population of your country by 1 and log the result to the console
3. Finland has a population of 6 million. Does your country have more people than Finland?
4. The average population of a country is 33 million people. Does your country have less people than the average country?
5. Based on the variables you created, create a new variable 'description'
which contains a string with this format: 'Portugal is in Europe, and its 11 million people speak portuguese' */

let halfPopulation = populationBrazil / 2;

populationBrazil++;

let populationFinland = 6;

const isBigger = populationBrazil > populationFinland;

let description = myCountry + " is in " + myContinent + ", and its " + populationBrazil + " million people speak " + language;

console.log(halfPopulation, populationBrazil, isBigger)

//LECTURE - STRINGS AND TEMPLATE LITERALS

/*Notes:
- template string - use `` instead of "" -> makes it easier to concatenate strings and variables (adds spaces automatically); to have multiple lines you just need to press enter and continue writing on the next line (no need to add \n)

Ex:
const firstName = "Ellen";
const job = "programmer";
const birthYear = 1990;
const currentYear = 2022;

const intro = "I'm " + firstName + ", a " + (currentYear - birthYear) + " years old " + job + " !";

const introTemplate = `I'm ${firstName}, a ${currentYear - birthYear} years old ${job}!`; */

/*Practice Exercise:
1. Recreate the 'description' variable from the last assignment, this time
using the template literal syntax */

description = `${myCountry} is in ${myContinent}, and its ${populationBrazil} million people speak ${language}`;
console.log(description);

//LECTURE - IF/ELSE STATEMENTS

/*Notes:
- let variables created inside an if/else block cannot be read outside de conditional. In order to do that you need to declare it outside (no need to assign a value) */

/*Practice Exercise:
1. If your country's population is greater that 33 million, log a string like this to the console: 'Portugal's population is above average'. Otherwise, log a string like 'Portugal's population is 22 million below average' (the 22 is the average of 33 minus the country's population)
2. After checking the result, change the population temporarily to 13 and then to 130. See the different results, and set the population back to original */
const average = 33;
const aboveAverage = populationBrazil > average;
if (aboveAverage) {
        console.log(`${myCountry}'s population is above average.`)
} else {
        console.log(`${myCountry}'s population is ${average - populationBrazil} below average.`)
}

//LECTURE - TYPE CONVERSION AND COERCION

/*Notes:
- type conversion - when you manually convert one type to another - you can convert to a number, string or boolean;
        to number: Number("23");
        to string: String(23);
        to boolean: Boolean(value);
- type coercion - when JS automatically convert um type to another behind the scenes; happens when an operator is dealing with 2 values that has two types. Ex: console.log("I am " + 23 + " years old") -> (+) operator converts numbers to string;
-> (-, * and /) operators convert strings to numbers
- falsy and truthy values: values that are not exactly false or true but will become false or true when we try to convert them into a boolean
-> falsy values: number zero, empty string, undefined, null and NaN
-> truthy values: any number that is not zero or any string that is not empty*/

/*Practice Exercise:
1. Predict the result of these 5 operations without executing them:
'9' - '5';
'19' - '13' + '17';
'19' - '13' + 17;
'123' < 57;
5 + 6 + '4' + 9 - 4 - 2;
2. Execute the operations to check if you were right */
//predictions: 4; 617; 23; false; 1143
const first = '9' - '5';
const second = '19' - '13' + '17';
const third = '19' - '13' + 17;
const fourth = '123' < 57;
const fifth = 5 + 6 + '4' + 9 - 4 - 2;

console.log(first, second, third, fourth, fifth);

//LECTURE - EQUALITY OPERATORS

/*Notes:
- (==) compare value and (===) compare value and type */

/*Practice Exercise:
1. Declare a variable 'numNeighbors' based on a prompt input like this:
prompt('How many neighbor countries does your country have?');
2. If there is only 1 neighbor, log to the console 'Only 1 border!' (use loose equality == for now)
3. Use an else-if block to log 'More than 1 border' in case 'numNeighbors' is greater than 1
4. Use an else block to log 'No borders' (this block will be executed when
'numNeighbors' is 0 or any other value)
5. Test the code with different values of 'numNeighbors', including 1 and 0.
6. Change == to ===, and test the code again, with the same values of
'numNeighbors'. Notice what happens when there is exactly 1 border! Why
is this happening?
7. Finally, convert 'numNeighbors' to a number, and watch what happens now when you input 1
8. Reflect on why we should use the === operator and type conversion in this situation */

// const numNeighbors = prompt("How many neighbor countries does your country have?");
// if (Number(numNeighbors) == 1) {
//         console.log("Only 1 border!");
// } else if (numNeighbors > 1) {
//         console.log("More than 1 border");
// } else {
//         console.log("No borders");
// }

//LECTURE - LOGICAL OPERATORS

/*Notes:
- AND table:
                 A
        AND     TRUE    FALSE
B       TRUE    TRUE    FALSE
        FALSE   FALSE   FALSE

- OR table:
                 A
        OR      TRUE    FALSE
B       TRUE    TRUE    TRUE
        FALSE   TRUE    FALSE
*/

/*Practice Exercise:
1. Comment out the previous code so the prompt doesn't get in the way
2. Let's say Sarah is looking for a new country to live in. She wants to live in a country that speaks english, has less than 50 million people and is not an island.
3. Write an if statement to help Sarah figure out if your country is right for her. You will need to write a condition that accounts for all of Sarah's criteria. Take your time with this, and check part of the solution if necessary.
4. If yours is the right country, log a string like this: 'You should live in Portugal :)'. If not, log 'Portugal does not meet your criteria'
5. Probably your country does not meet all the criteria. So go back and temporarily change some variables in order to make the condition true (unless you live in Canada :D) */
if (language === "english" && populationBrazil < 50 && !isIsland) {
        console.log(`You should live in ${myCountry} :)`);
} else {
        console.log(`${myCountry} does not meet your criteria`);
}

//LECTURE - SWITCH STATEMENT

/*Notes:
- */

/*Practice Exercise:
1. Use a switch statement to log the following string for the given 'language':
chinese or mandarin: 'MOST number of native speakers!'
spanish: '2nd place in number of native speakers'
english: '3rd place'
hindi: 'Number 4'
arabic: '5th most spoken language'
for all other simply log 'Great language too :D' */

switch (language) {
        case "chinese":
        case "mandarin":
                console.log("MOST number of native speakers!");
                break;
        case "spanish":
                console.log("2nd place in number of native speakers");
                break;
        case "english":
                console.log("3rd place");
                break;
        case "hindi":
                console.log("Number 4");
                break;
        case "arabic":
                console.log("5th most spoken language");
                break;
        default:
                console.log("Great language too")

}

//LECTURE - TERNARY OPERATOR

/*Notes:
- expression produce value while statement doesn't 
- if/else statement that has only one action each
- else statement is mandatory 
- condition ? if part : else part
- can be assigned to variables 
- since ternary operator is an expression and produces a value, it can be used on template literals -> ex: console.log(`I like to drink ${age >= 18 ? "wine" : "water"}`);
Ex:
- option 1 (not very used)
const age = 23;
age >= 18 ? console.log("You can drink wine") : console.log("You can only drink water");
- option 2
const age = 23;
const drink = age >= 18 ? "you can drink wine" : "you can only drink water";
console.log(drink);
*/

/*Practice Exercise:
1. If your country's population is greater than 33 million, use the ternary operator to log a string like this to the console: 'Portugal's population is above average'. Otherwise, simply log 'Portugal's population is below average'. Notice how only one word changes between these two sentences!
2. After checking the result, change the population temporarily to 13 and then to 130. See the different results, and set the population back to original */