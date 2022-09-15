//to activate strict mode, the statement has to come first - used to have a more secure js. Also create visible errors to help coding.
"use strict";

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive!");