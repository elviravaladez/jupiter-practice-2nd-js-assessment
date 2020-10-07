"use strict";

/**
 * Write your solutions here.
 *
 * **Note**: While normally it is good practice to wrap your javascript in an
 * immediately invoked function expression (iife), you should _not_ do that
 * here. If you do, the automated tests will not be able to see your functions.
 * If you don't know what an iffe is, don't worry about it :)
 *
 * This file is for defining the following functions. See README.md for more detail.
 */


//TODO: Define a function named isOdd that takes in any input and returns true if the input is an odd number, return false for any other situation. You do not need to consider floating-point and decimal numbers.
function isOdd(num) {
    return num % 2 === 1;
}

//TODO: Define a function named isVowel that takes in a single character and returns true if the character is a vowel. *Not including the letter 'y'

function isVowel(char) {
    if(char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u' || char === 'A' || char === 'E' || char === 'I' || char === 'O' || char === 'U' ) {
        return true;
    } else {
        return false;
    }
}



//TODO: Define a function named combineStrings that takes in two parameters, if both parameters are strings, then return a concatenated string of both parameters. Otherwise, return false.

function combineStrings(par1, par2) {
    if(typeof par1 === 'string' && typeof par2 === "string") {
        return par1 + par2;
    }
    return false; //didn't use else, because the only instance when this doesn't work is when if it doesn't meet the if statement above
}


//TODO: Define a function named sumArgs that takes in three parameters, if they are numbers then add them together. Otherwise return false.
function sumArgs(num1, num2, num3) {
    if(typeof num1 === "number" && typeof num2 === "number" && typeof num3 === "number") {
        return num1 + num2 + num3;
    }
    return false;
}



//TODO: Define a function named truncateString that takes in a string as the first parameter and a number as the second parameter. Truncate (shorten) the string by the length based on the argument passed in. For example, truncateString("hello world",1) would return "hello worl"

// function truncateString(str, num) {
//     if(typeof num === "number" && typeof str === "string") {
//         if(num >= str.length) {
//             return "";
//         }
//         return str.slice(str,str.length - num);
//     } else {
//         return false;
//     }
// }


function truncateString(str, num) {
    if(typeof str === "string" && typeof num == "number") {
        var myString = str.substring(0, str.length - num);
        return myString;
    } else {
        return false;
    }
}

//.substring() is set for the edge-case that here in the above todo
//extracts the char from a string, between 2 specified indices, and returns new sub string

//TODO: Define a function named `reverseSign` that takes in a number as the first parameter. Reverse the sign of the argument passed in, return false if the argument is not a number. For example, `reverseSign(1)` would return `-1`.

function reverseSign(num) {
    if(isNaN(num) || num === "" || typeof num === "boolean" || typeof num === "object") {
        return false;
    } else if(Number(num)) {
        return num * -1;
    }
}


//TODO: Define a function named `makeUppercase` that takes in a string as the first parameter. Return the argument passed in entirely uppercased, return false if the argument is not a string. For example, `makeUppercase("test")` would return `"TEST"`.

//checking for isNaN will return true if it is a number in quotes

function makeUppercase(str) {
    if(typeof str === "string" && isNaN(str)) {
        return str.toUpperCase();
    } else {
        return false;
    }
}




//TODO: Define a function named `isMultiple` that takes in two `number` parameters. Return `true` if one argument is a multiple of the other, `false` otherwise. For example, `isMultiple(2, 6)` would return `true`.


function isMultiple(num1, num2) {
    if(num1 === num2) {
        return false;
    } else if(num2 % num1 === 0) {
        return true;
    } else {
        return false;
    }
}


//TODO: Define a function named `canPurchase` that takes in two `number` parameters, `billAmount` & `availableCash`. Return `true` if `availableCash` is greater than `billAmount`, `false` otherwise. For example, `canPurchase(10, 20)` would return `true`.

function canPurchase(billAmount, availableCash) {
    if(availableCash > billAmount) {
        return true;
    } else {
        return false;
    }
}


//TODO: Define a function named `getInitials` that takes in two `string` parameters, `first` & `last`. Return the names combined and formatted as initials, return `false` if either parameter is invalid. For example, `getInitials("John", "Snow")` would return `"J.S."`

function getInitials(first, last) {
    if(typeof first === "string" && typeof last === "string" && isNaN(first) && isNaN(last) && first.length > 0 && last.length > 0) { //can also use first !== "" && last !== "" to check to make sure first and last are NOT empty strings
        return first.substring(0, 1) + "." + last.substring(0,1) + ".";
    } else {
        return false;
    }
}
