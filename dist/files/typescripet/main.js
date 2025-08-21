"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function calculate(numOne, numTwo) {
    return numOne + numTwo;
}
console.log(calculate(10, 20)); // 30
console.log(calculate(+"10", +"20")); // We Don't Need This To Work
console.log(calculate(+true, +true)); // 2
function printInfo(valueOne, valueTwo) {
    return `Value One Is ${valueOne}, Value Two Is ${valueTwo}`;
}
console.log(printInfo(10, 20)); // Value One Is 10, Value Two Is 20
console.log(printInfo("10", "20")); // Value One Is "10", Value Two Is "20"
console.log(printInfo(true, [1, 2, 3])); // We Don't Need This To Work
let arr = ["a", "b", "c", 1, 2, 3, true, false, [4, 5, 6], ["s", "h"],];
console.log(arr);
function reportErrors(username, age) {
    let rank = "Professor";
    return `Username: ${username}\nAge: ${age}`;
    console.log("We Will Not Reach Here");
}
console.log(reportErrors("Elzero", 40));
let nothing;
let theName = "Elzero";
function showMyDetails(a = "", b = "", c) {
    return `${a}${b} ${c}`;
}
// Replace ???? With The Available Variables As Argument To Get The Result
console.log(showMyDetails(nothing, theName, "shaaban"));
function showMsg(user, age, country) {
    return `${user}${age}${country}`;
}
console.log(showMsg());
console.log(showMsg("Elzero"));
console.log(showMsg("Elzero", 40));
console.log(showMsg("Elzero", "40", "Egypt"));
// Write The Function Here
// Using The Function => Do Not Edit
function printInConsole(...nums) {
    for (let i = 0; i < nums.length; i++) {
        console.log(`The Value Is ${nums[i]} And Type  ${typeof (nums[i])}`);
    }
    return "";
}
printInConsole(1, 2, 3, 4, 5);
printInConsole("A", "B", "C");
printInConsole(true, false, false, true, true);
//# sourceMappingURL=main.js.map