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