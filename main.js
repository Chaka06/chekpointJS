function countTrue(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === true) {
            count++;
        }
    }
    return count;
}


console.log(countTrue([true, false, false, true, false])); // ➞ 2
console.log(countTrue([false, false, false, false]));      // ➞ 0
console.log(countTrue([]));                                // ➞ 0

//Create a function that takes two numbers as arguments and returns their sum.
function addition(a, b) {
    return a + b;
}

// Test cases
console.log(addition(3, 2));   // ➞ 5
console.log(addition(-3, -6)); // ➞ -9
console.log(addition(7, 3));   // ➞ 10

//Write a function that takes an integer minutes and converts it to seconds.
function convert(minutes) {
    return minutes * 60;
}

// Test cases
console.log(convert(5)); // ➞ 300
console.log(convert(3)); // ➞ 180
console.log(convert(2)); // ➞ 120

//There is a single operator in JavaScript, capable of providing the remainder of a division operation. Two numbers are passed as parameters. The first parameter divided by the second parameter will have a remainder, possibly zero. Return that value.
function remainder(a, b) {
    return a % b;
}

// Test cases
console.log(remainder(1, 3));    // ➞ 1
console.log(remainder(3, 4));    // ➞ 3
console.log(remainder(-9, 45));  // ➞ -9
console.log(remainder(5, 5));    // ➞ 0

//Create a function that takes a number as an argument, increments the number by +1 and returns the result.
function addition(num) {
    return num + 1;
}

// Test cases
console.log(addition(0));  // ➞ 1
console.log(addition(9));  // ➞ 10
console.log(addition(-3)); // ➞ -2

//This is an introduction to how challenges on Edabit work. In the Code tab above you'll see a starter function that looks like this:
function hello() {
    return "hello edabit.com";
}

//Write a function that returns the string "something" joined with a space " " and the given argument a.
function giveMeSomething(a) {
    return "something " + a;
}

// Test cases
console.log(giveMeSomething("is better than nothing")); // ➞ "something is better than nothing"
console.log(giveMeSomething("Bob Jane"));              // ➞ "something Bob Jane"
console.log(giveMeSomething("something"));            // ➞ "something something"

//Create a function that takes the age in years and returns the age in days.
function calcAge(ageInYears) {
    return ageInYears * 365;
}

// Test cases
console.log(calcAge(65)); // ➞ 23725
console.log(calcAge(0));  // ➞ 0
console.log(calcAge(20)); // ➞ 7300

//Create a function that finds the maximum range of a triangle's third edge, where the side lengths are all integers.
function nextEdge(side1, side2) {
    return side1 + side2 - 1;
}

// Test cases
console.log(nextEdge(8, 10)); // ➞ 17
console.log(nextEdge(5, 7));  // ➞ 11
console.log(nextEdge(9, 2));  // ➞ 10

//function points(twoPointers, threePointers) {
function points(twoPointers, threePointers) {
    return (twoPointers * 2) + (threePointers * 3);
}

// Test cases
console.log(points(1, 1));   // ➞ 5
console.log(points(7, 5));   // ➞ 29
console.log(points(38, 8));  // ➞ 100

//Write a function that takes the base and height of a triangle and return its area.
function triArea(base, height) {
    return (base * height) / 2;
}

// Test cases
console.log(triArea(3, 2));   // ➞ 3
console.log(triArea(7, 4));   // ➞ 14
console.log(triArea(10, 10)); // ➞ 50


//Write a function that converts hours into seconds.
function howManySeconds(hours) {
    return hours * 60 * 60;
}

// Test cases
console.log(howManySeconds(2));  // ➞ 7200
console.log(howManySeconds(10)); // ➞ 36000
console.log(howManySeconds(24)); // ➞ 86400

//A student learning JavaScript was trying to make a function. His code should concatenate a passed string name with string "Edabit" and store it in a variable called result. He needs your help to fix this code.
function nameString(name) {
    var result = name + "Edabit";
    return result;
}

// Test cases
console.log(nameString("Mubashir"));   // ➞ "MubashirEdabit"
console.log(nameString("Matt"));       // ➞ "MattEdabit"
console.log(nameString("javaScript")); // ➞ "javaScriptEdabit"

//Fix the code in the code tab to pass this challenge (only syntax errors). Look at the examples below to get an idea of what the function should do.
function cubes(a) {
    return a ** 3;
}

//Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false.
function lessThan100(a, b) {
    return (a + b) < 100;
}

// Test cases
console.log(lessThan100(22, 15)); // ➞ true
console.log(lessThan100(83, 34)); // ➞ false
console.log(lessThan100(3, 77));  // ➞ true






