/*
## 1. Verbal questions

    Write answers to the following questions as comments. 

1.  What is the difference between a **parameter** and an **argument**?
2.  Within a function, what is the difference between **return** and 
    **console.log**?
3.  What are the implications of the ability of a function to return a value?
*/

// 1. 
//  Parameters are the placeholder names declared in the fuction. Arguments 
//  are the actual values passed to and recieved by the function.

// 2. 
//  **return** ends function execution and specifies a value to be returned to
//  the function caller.  The **console** object provides access to the browser's
//  debugging console. **.log()** is a method of the console object that outputs 
//  a message to the console.  **return** does not display values to the
//  console, rather it 'returns' it to whatever called it. The output value of 
//  a function can not come from a console.log.

// 3. 
//  Functions that have the ability to return values allows programmers
//  to create large programs by 'dividing and conquering'. Functions reduce 
//  repetition by outsourcing repetitive operations.  It also fosters
//  collaboration by allowing for modularization.

/*
## 2. Palindrome again.
Write a function `checkPalindrome` that accepts a single argument, a string. 
Yes, you've done it before, but do it again. Later in this assignment we're 
gonna beef up our palindrome function some. See if you can do it without 
looking back at your previous answer. The function should return true if 
the string is a palindrome, false if not. Make sure your function will give 
the correct answer for words with **capital letters**.

console.log(checkPalindrome("Radar"));
    => true

console.log(checkPalindrome("Borscht"));
    => false
*/

function checkPalindrome(string) {
    string = string.toLowerCase();
    reverse = string.split('').reverse().join('');
    return string == reverse;
}
console.log(checkPalindrome("Radar"));
console.log(checkPalindrome("Borscht"));

/*
## 3. Digit Sum
Write a function `sumDigits` that accepts a number and returns the sum of its
digits.

console.log(sumDigits(42));
    => 6;
*/

function sumDigits(number) {
    sum = 0;
    numStr = number.toString();
    numArr = numStr.split('');
    for (let i = 0; i < numArr.length; i++) {
        sum += parseInt(numArr[i]);
    }
    return sum;
}
console.log(sumDigits(42));

/*
## 4. Pythagoras
Write a function `calculateSide` that takes two arguments: `sideA` and 
`sideB`, and returns the solution for sideC using the Pythagorean theorem.

**_restriction_**: for this problem, do NOT use `Math.hypot()` 
(but for the rest of time, once you've done this problem feel free)

console.log(calculateSide(8, 6));
    => 10
*/

function calculateSide(sideA, sideB) {
    sideC = Math.sqrt(Math.pow(sideA, 2) + Math.pow(sideB, 2));   
    return sideC;
}
console.log(calculateSide(8, 6));

/*
## 5. Sum Array
Write a function `sumArray` that takes an **array** as an argument.
The array should contain numbers. The function should return the sum of the 
numbers in the array. **Do not use `.reduce()`**.

Expected result:
console.log(sumArray([1, 2, 3, 4, 5, 6]));
    => 21
*/

function sumArray(array) {
    sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += parseInt(array[i]);
    }
    return sum;
}
console.log(sumArray([1, 2, 3, 4, 5, 6]));

/*
## 6. Prime Numbers
A Prime number is a number that is not evenly divisible by another number 
except 1 and itself. To test whether a number is Prime, you only need to test 
as far as the **square root** of that number. This is advisable for 
optimization and testing large numbers.

### Step One
Write a function called `checkPrime` that will test whether a number is Prime.
The function will return true (Boolean) if Prime, false if not.

### Step Two
Write another function called `printPrimes` that will print (console log) all
the Primes up to an arbitrary limit. For example, if you invoke your function
with `printPrimes(97)`, it will print all the Prime numbers up to and
including 97. This function can **call on** the previous `checkPrime`
function.
*/

function checkPrime(number) {
    if (number === 0 || number === 1) {
        return false
    } else {
        for (let i = 2; i < number; i++) {
            if (number % i === 0) {
                return false;
            } else {
                return true;
            }
        }
    }
}

function printPrimes(number) {
    for (let i = 0; i <= number; i++) {
        if (checkPrime(i) === true) {
            console.log(i)
        }
    }
}

printPrimes(97);