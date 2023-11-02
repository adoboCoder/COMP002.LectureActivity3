// conditional code
console.log("conditional code");

let inputVariable = 54; // variable to use on examples

// if statement
if (inputVariable % 2 == 0) {
    console.log("Input number is even"); // this code will only run if it meets the if condition
}

// if-else statement
if (inputVariable % 5 == 0){
    console.log("Input number is divisible by 5"); // this code will only run if it meets the if condition
} else {
    console.log("Input number is NOT divisible by 5"); // this code executes if it does NOT meet any of the previous if conditions
}

// if/else-if/else statement
inputVariable = 0; // change the value of inputVariable to 0
if (inputVariable % 2 == 0){
    console.log("Input number is Even."); // this condition executes first, so the other if/else clause will no longer execute.
} else if (inputVariable % 2 == 1){
    console.log("Input number is Odd.");
} else {
    console.log("Input number is 0 or invalid."); // even though the inputVariable is 0, this clause will not execute because a previous if condition was met.
}

// nested if statements
inputVariable = 75;

if (inputVariable >= 50) {
    console.log("Input number is greater than or equal to 50");
    if (inputVariable % 5 == 0){
        console.log("Input number is also divisible by 5.");
    }
} else {
    console.log("Input number is less than 50.");
}

// switch
inputVariable = 5;

switch (inputVariable) {
    case 1: console.log("Input is 1.")
            break; // do not forget the break; in between cases unless you want
    case 2: console.log("Input is 2.")
            break;
    case 3: console.log("Input is 3.")
            break;
    case 4: console.log("Input is 4.")
            break;
    case 5: console.log("Input is 5.") // this line will execute
            break;
    default: console.log("Input is not between 1-5.");
            break;
}

// looping statements
console.log("looping statements");

// for-loop
// 3 statements inside the for loop
// 1. typically, the looping variable
// 2. loop condition
// 3. statement to execute in between iterations
// note: i++ is equal to i = i + 1
for (let i = 1; i < 10; i++){
    console.log(i);
}

// while-loop
// note: loopingVariable += 5 is the same as loopingVariable = loopingVariable + 5
let loopingVariable = 0;
while (loopingVariable <= 20){
    console.log(loopingVariable);
    loopingVariable += 5;
}

// do-while
// do-while vs while loops: do-while loops are guaranteed to run at least once
let loopingVariable2 = 50;

do {
    // this set of code is guaranteed to run at least once
    console.log(loopingVariable2);
    loopingVariable += 25;
} while (loopingVariable2 < 50);