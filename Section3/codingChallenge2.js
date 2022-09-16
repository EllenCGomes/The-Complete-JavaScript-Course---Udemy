/* Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.
Your tasks:
1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above. Use the function type you like the most. Test the function using a bill value of 100
2. And now let's use arrays! So create an array 'bills' containing the test data below
3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before
4. Bonus: Create an array 'total' containing the total values, so the bill + tip
Test data: 125, 555 and 44 */

const calcTip = (billTotal) => //{
    // if (billTotal >= 50 && billTotal <= 300) {
    //     return billTotal * 0.15
    // }

    // return billTotal * 0.2
    //return 
    billTotal >= 50 && billTotal <= 300 ? billTotal * 0.15 : billTotal * 0.2
//}

const tip = calcTip(100);
console.log(tip);

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

console.log(tips);

//const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

const calcTotal = (bills, tips, index) => bills[index] + tips[index]

const total = [calcTotal(bills, tips, 0), calcTotal(bills, tips, 1), calcTotal(bills, tips, 2)]

console.log(total);