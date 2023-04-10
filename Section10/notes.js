'use strict';

/* # DEFAULT PARAMETERS
*/
const bookings = [];

const createBooking = function (flightNum, numPassengers = 1, price = 199 + numPassengers) {

    // old way to define default parameters (ES5)
    //numPassengers = numPassengers || 1;
    //price = price || 199;

    const booking = {
        flightNum,
        numPassengers,
        price
    }
    console.log(booking);
    bookings.push(booking);
}

createBooking("LH123");
createBooking("LH123", 2, 800);
createBooking("LH123", 2);
// if you want to specify the last parameter but not the middle one, you cannot skip it. A nice trick would be use undefined as the value
createBooking("LH123", undefined, 800);

/* # HOW PASSING ARGUMENTS WORKS: VALUE VS REFERENCE
*/
const flight = "LH123";
const jonas = {
    name: "Jonas Schmedtmann",
    passport: 23456889053
};

const checkIn = function (flightNum, passenger) {
    flightNum = "LH999";
    passenger.name = "Mr. " + passenger.name;

    passenger.passport === 23456889053
        ? console.log("Checked in")
        : console.log("Wrong passport")

}

checkIn(flight, jonas);
console.log(flight, jonas); // since jonas is an object, the value will be changed by the function

const newPassport = function (person) {
    person.passport = Math.trunc(Math.random() + 100000000000);
}

newPassport(jonas);
checkIn(flight, jonas);

/* # FIRST-CLASS VS HIGHER-ORDER FUNCTIONS

-> FIRST-CLASS FUNCTIONS
- treated as values; type of object;
- since they are values, it can be stored in variables or properties

const add = (a, b) => a + b; -> function expression
const counter = {
    value: 23,
    inc: function() { this.value++; } -> object method
}

- pass functions as arguments to other functions (callbacks)

const greet = () => console.log("Hey Jonas");
btnClose.addEventListener("click", greet) -> greet function passed as value

- return functions from functions
- call methods on functions

counter.inc.bind(someOtherObject) -> bind is a method used on counter function

-> HIGHER-ORDER FUNCTIONS
- because JS has first-class functions, makes it possible to write and use high-order functions
- either a function that receives another function as an argument (callback functions) or a function that returns a new function or both

const greet = () => console.log("Hey Jonas");
btnClose.addEventListener("click", greet) -> addEventListener is a higher-order function that receives the greet function (callback) as an input

function count() { -> higher-order function returning another function
    let counter = 0;
    return function() {
        counter++;
    }
}
*/

const oneWord = function (str) {
    return str.replaceAll(" ", "").toLowerCase();
}

const upperFirstWord = function (str) {
    const [first, ...others] = str.split(" ");
    return [first.toUpperCase(), ...others].join(" ");
}

// higher-order function
const transformer = function (str, func) {
    console.log(`Transformed string: ${func(str)}`);
    console.log(`Transformed by: ${func.name}`);
}

transformer("JavaScript is the best", upperFirstWord);
transformer("JavaScript is the best", oneWord);