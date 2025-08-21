function calculate(numOne:number, numTwo:number) {
  return numOne + numTwo;
}

console.log(calculate(10, 20)); // 30
console.log(calculate(+"10", +"20")); // We Don't Need This To Work
console.log(calculate(+true, +true)); // 2
function printInfo(valueOne:(string|number), valueTwo:(string|number)) {
  return `Value One Is ${valueOne}, Value Two Is ${valueTwo}`;
}
console.log(printInfo(10, 20)); // Value One Is 10, Value Two Is 20
console.log(printInfo("10", "20")); // Value One Is "10", Value Two Is "20"
console.log(printInfo(true, [1, 2, 3])); // We Don't Need This To Work
let arr: ((string|number|boolean|number[]|string[])[]) = ["a","b","c",1,2,3,true,false,[4,5,6],["s","h"],];
console.log(arr)


function reportErrors(username:string, age: number) {
  let rank = "Professor";
  return `Username: ${username}\nAge: ${age}`;
  console.log("We Will Not Reach Here");
}
console.log(reportErrors("Elzero", 40));
let nothing;
let theName: string = "Elzero";
function showMyDetails(a = "", b = "", c:string) {
  return `${a}${b} ${c}`;
}
// Replace ???? With The Available Variables As Argument To Get The Result
console.log(showMyDetails(nothing,theName,"shaaban")); 


function showMsg(user?: number|string, age?: boolean|string|number, country?: boolean|number|string) {
  return `${user}${age}${country}`;
}
console.log(showMsg());
console.log(showMsg("Elzero"));
console.log(showMsg("Elzero", 40));
console.log(showMsg("Elzero", "40", "Egypt"));
// Write The Function Here

// Using The Function => Do Not Edit
function printInConsole(...nums:(string|number|boolean)[]){

    for (let i= 0; i<nums.length; i++){
        console.log(`The Value Is ${nums[i]} And Type  ${typeof(nums[i])}`)
    }
    return ""
    
}
printInConsole(1, 2, 3, 4, 5);
printInConsole("A", "B", "C");
printInConsole(true, false, false, true, true);