/* Let's improve Steven's tip calculator even more, this time using loops!
Your tasks:
1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals('tips' and 'totals')
3. Use the 'calcTip' function we wrote before to calculate tips and total values for every bill value in the bills array. Use a for loop to perform the 10 calculations!
Test data: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52

Bonus:
4. Bonus: Write a function 'calcAverage' which takes an array called 'arr' as an argument. This function calculates the average of all numbers in the given array. */

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

const calcTip = (billTotal) =>
    billTotal >= 50 && billTotal <= 300 ? billTotal * 0.15 : billTotal * 0.2

for (let i = 0; i < bills.length; i++) {
    const tip = calcTip(bills[i]);

    tips.push(tip);
    totals.push(tip + bills[i]);
}

console.log(tips);
console.log(totals);

const calcAverage = function (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }

    return sum / (arr.length);
}

console.log(calcAverage(totals));
