/*      JAVASCRIPT THEORY

# OVERVIEW

-> High-Level -> Closer to human languages and further from machine languages. It is quite independent of a particular type of computer. Has strong abstractions from the details of the computer. It manages the resources needed such as memory, making it easier to learn but the programs will never be as fast or as optimized as low-level languages such as C. 

-> Garbage-collected -> One of the powerful tools that takes care of memory management. It's an algorithm inside JS engine which automatically removes all unused objects from the computer memory to avoid clogging.

-> Interpreted or just-in-time-compiled (JIT) -> An interpreted language runs through a program line by line and execute each command.
Just in time compilation is a compilation that is being done during the execution of a program. While the interpreted program is being run, the JIT compiler determines the most frequently used code and compiles it to machine code. This method improves the performance of interpreted programs.

-> Multi-paradigm -> Paradigm is an approach and mindset of structuring code, which will direct your coding style and technique. It can be imperative or declarative.
Types: Procedural programming (organize the code in a linear way), OOP, functional programming.

-> Prototype-based object-oriented -> Almost everything in JS is an object, except with primitive values such as numbers, strings etc.
With objects we have prototype inheritance. For example, we create arrays from an array blueprint (prototype) and this blueprint contains all the array methods so all the arrays we create inherit from the blueprint.

-> First-class functions -> Functions are treated as variables. We can pass them into other functions and return them from functions.

-> Dynamically-typed -> We don't need to assign data types to variables. Types becomes known at runtime and it is automatically changed when reassigned.

-> Single-threaded -> JS runs in one single thread (a set of instructions that is executed in the computer's CPU; the thread is where our code is executed in a machine's processor), which means it can only do one thing at a time.

-> Non-blocking event loop concurrency model -> Due to the single-thread characteristic, long running tasks would block the single thread so to fix that we have the event loop which takes the long running tasks, execute them in the background and puts them back in the main thread once they are finished.

# JS ENGINE AND RUNTIME

.Engine

-> JS engine is a program that executes JS code. It contains a call stack and a heap.
The call stack is where our code is executed by using a execution context.
The heap is an unstructured pool that stores all the objects our application needs (memory).

-> Compilation vs Interpretation -> During compilation, the entire code is converted into machine code at once, and written to a binary file that can be executed by a computer (Step 1 compilation into a portable file and Step 2 execution), even way after the compilation happened.

For interpretation, the interpreter runs through the source code and executes line by line in one step. This process is much more slower than compilation.

JIT compilation fix the delay for interpretation by converting the entire code into machine code at once and then execute immediately. There are 2 steps like the compilation but there is no portable file and the execution happens immediately.

When a piece of code enters the engine, the first step is to parse the code (read). During the parsing, the code is parsed into a data structure called the abstract syntax tree (AST). This works by first splitting each line of code into pieces that are meaningful to the language like the const or function key words and then saving all the pieces into the tree in a structured way. This step also checks for syntax errors and the result tree will be used later to generate the machine code.
The next step is compilation which takes the generated AST and compiles into machine code. This machine code is execute right away in the call stack, due to the Just-in-time compilation (JIT). Since modern JS engines have clever optimization strategies, they create a very un-optimized version of machine code in the beginning, just so it can start executing ASAP. Then, in the background, this code is being optimized e recompiled during the already running program execution and this can happen several times. The parsing, compilation and optimization happen in special threads that we cannot access from our code, so it is completely separated from the main thread that is running in the call stack, executing our own code.

.RunTime

-> The most common one is the browser.

-> JS runtime is a big container that includes all the things we need in order to use JS (engine, web API's and Callback queue).

-> The hearth of any JS runtime is the JS engine but is not enough. In order to work properly we also need access to the Web API's (functionalities provided to the engine but not part of JS) e callback queue (data structure tha contains all the callback functions that are ready to be executed. Ex: we attach event handler functions to DOM elements like a button, to react to certain events like click. This event handler functions are also call callback functions. As the event happens - click, the callback function will be called. So after the event, the callback function is put into the callback queue and when the call stack is empty, the callback function is passed into the stack so it can be executed. This process of moving the callback functions to the call stack to be executed happens by the event loop).

-> JS can exist outside browsers. For example in Node.js. In this case we don't have the web API's and instead we have multiple C++ bindings and the thread pool.

# EXECUTION CONTEXT AND CALL STACK

.Execution Context

-> After compilation and during execution, a global execution context is created for the top level code (code that is not inside any function). An execution context is an environment in which a piece of JS is executed. Stores all the necessary information for some code to be executed such as local variables or arguments passed into a function.
Any JS project has only one global execution context (EC) and its a default context.

After the creation of the global execution context, the execution of the top-level code inside it's executed. After that, functions/methods are executed. For each and every function call, a new execution context will be created, containing all the necessary information to run that specific function. All these execution contexts make the call stack. After the functions are executed, the engine will wait for callback functions to arrive so it can execute the function (ex: callback with click event).

-> Inside the execution context we have:
    - Variable Environment - all variables and function declarations are stored, along with special arguments object that contains all the arguments that are passed into the function that the execution context belongs to.
    - Scope chain - consists of references to variables that are located outside the current function.
    - "this" keyword 

-> Execution context belonging to arrow functions do not get their own arguments object or "this" keyword. Instead, the can use the arguments object and the "this" keyword from their closest regular function parent.

.Call Stack

-> Where execution contexts get stacked on top of each other to keep track of where we are in the program's execution. The execution that is on the top of the stack is the one that is current running. 

# SCOPE AND SCOPE CHAIN

-> Scoping controls how the program's variables are organized and accessed by the JS engine.

-> Lexical scoping: the way variables are organized and accessed is controlled by placement of functions and blocks in the code. So the function that is written inside another function has access to the variables of the parent's function. The rules of where we can access variables are based on exactly where in the code, functions and blocks are written. Doesn't matter where the functions are called.

-> Scope: space or environment in which a certain variable is declared (variable environment in case of functions). There is global scope, function scope and block scope.

-> Scope of a variable: region of our code where a certain variable can be accessed. 

-> Types: 
    - Global scope - outside any function or block; are accessible everywhere.
    - Function/local scope - variables accessible only inside the function.
    - Block scope (everything that is inside curly braces, such as if/else statements and for/while loops) - variables accessible only inside the block (only for let and const). Functions are also block scoped in strict mode.

-> Scope chain: scope has access to variable from all outer scopes (parents). The variables const and let are block scoped while var is function scoped. Siblings functions/scopes don't have access to each other. Even though they have the same parent, they are not written inside one another so they cannot see the variables.

*/

'use strict';

function calcAge(birthYear) {
    const age = 2037 - birthYear;
    console.log(firstName);

    function printAge() {
        const output = `${firstName}, you are ${age} years old, born in ${birthYear}`;
        console.log(output);

        if (birthYear >= 1981 && birthYear <= 1996) {
            //Variables can have the same name when created in different scopes but if you reassign a variable, even if the variable was defined in an outer scope, it will be changed.
            const firstName = "Steven";
            const str = `Oh, and you are a millenial`;
            console.log(str);
        }
    }

    printAge();

    return age
}

const firstName = "Jonas";
calcAge(1991);

/*
# HOISTING

-> Makes some types of variables accessible/usable in the code before they are actually declared.

-> Makes it possible to use functions before actual declaration

-> Before execution, the code is scanned for variable declarations (execution context's creation phase), and for each variable, a new property is created in the variable environment object. 

    .function declarations -> IS HOISTED; has the actual function as INITIAL VALUE; block SCOPE

    .var -> IS HOISTED; has undefined as INITIAL VALUE; function SCOPE

    .let and const -> IS HOISTED in theory but the INITIAL VALUE is set to uninitialized so there is no value to work with. In practice is as if hosting was not happening at all. Those variables are placed in a Temporal Dead Zone (TDZ) and we can't access between the beginning of the scope and the place where the variable is declared. If you try to use the variable before is declared, an error will appear; block SCOPE

        Ex:
        const myName = "Jonas";
        if(myName === "Jonas") {
           TDZ --console.log("Jonas is a ${job}");
           TDZ --const age = 2037 - 1989;
           TDZ --console.log(age);
            const job = "teacher";
            console.log(x); -> Error: ReferenceError: x is not defined
        } 
        Error: ReferenceError: Cannot access 'job' before initialization -> shows that JS put the variable job in the TDZ with an uninitialized value.

    .function expressions and arrows -> behave in the exact same way as variables so it will depend if the function is using var or let/const. Trying hoisting when assigning var to the function will not work since var has undefined as initial value so JS will not understand that the variable is actually a function expression or arrow.

-> the TDZ makes it easier to avoid and catch errors. Accessing variables before declaration is bad practice. Also makes const variables actually work. Const should never be reassigned so it won't be possible to set to undefined first and reassign it later

# THIS KEYWORD

-> special variable that is created for every execution context (every function).It points to the "owner" of the function in which the this keyword is used. The this value is not static. It depends on how the function is called and its value is only assigned when the function is actually called.

-> does not point to the function itself or the variable environment

Ways a function can be called:
- method (function attached to an object) - the this keyword inside the method points to the object that is calling the method
Ex: const jonas = {
    name: "Jonas",
    year: 1989,
    calcAge: function() {
        return 2037 - this.year -> this = jonas
    }
};

- simple normal function - this = undefined on strict mode, otherwise it will point to the global object (window object in the browser)

- arrow functions - don't get their own this keyword so the this will point to the parent function (lexical this). 

TIP: don't use arrow functions as a method

- event listener - this keyword points to the DOM element that the handler is attached to.

# PRIMITIVE vs OBJECTS (PRIMITIVE vs REFERENCE TYPES)

-> primitive types are stored in the call stack, in the execution contexts in which they are declared. First, js will create a unique identifier with the variable name. Then, a piece of memory will be allocated with a certain address and the value will be stored in memory at the specified address. The identifier will point to the address and not the value. The value of an address is immutable so when we reassign a value to a variable, it creates a new address with that value and the variable points to the new address.
-> objects/reference types are stored in the heap, since its almost an unlimited memory pool and objects can be too big for the stack. When a new object is created, we also have a memory address and value, but in the heap instead. The object will not point directly to the memory address in the heap but to another memory address created in the call stack and this memory address will then point to the memory address in the heap by using the memory address as its value. 
When you change an object property value, the value itself (whole object) remains the same and no new memory is created (because of that, you can reassign values to properties even when the variable is declared as const).
 
 */

// Primitive Types
let age = 30;
let oldAge = age;
age = 31; //reassigned value - variable points to a new memory address
console.log(age); // result = 31
console.log(oldAge); // result = 30 -> oldAge remains pointing to the old memory address since it wasn't reassigned

// Reference Types
const me = {
    name: "Jonas",
    age: 30,
};
const friend = me;
friend.age = 27;
console.log("Friend: ", friend); // result = 27 -> it also shows 27 because a property reassignment doesn't not change the value for the address. The object remains the same one. 
console.log("Me: ", me); // result = 27

/* Copying Objects that will have new property values

-> Object.assign: only works on the first level - so if you have an object inside the object, the inner object will still be the same and point to the same place in memory - its a shallow copy

*/

const me2 = {
    name: "Jonas",
    age: 30,
    family: ["Alice", "Bob"],
}
const meCopy = Object.assign({}, me2); // a new object is created in the heap
meCopy.age = 31;
meCopy.family.push("Mary");
meCopy.family.push("John");
console.log("Me: ", me2); // age changed but family property (inner object) didn't due to the shallow copy
console.log("Copy: ", meCopy); // age changed but family property (inner object) didn't due to the shallow copy



