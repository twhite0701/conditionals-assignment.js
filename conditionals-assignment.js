
/** DONE
 * @difficulty easy, ~3 minutes
 *
 * Write a function that takes a single parameter `n` and returns `true` if `n` is an odd number, false otherwise.
 *
 * HINTS:
 * - You can use the modulo operator, `%` to calculate the remainder of the number when divided by another number.
 *
 * @param {number} n number to check if it's odd
 * @returns {boolean} `true` if the number is odd, `false` if the number is even
 */
function isOdd(n) { if (n % 2 === 0) {
                result=false;
            }   else {
                result=true;
            } 
            return result;
        };

/** ?????????????????????????
 * @difficulty intermediate/hard, ~10 minutes
 *
 * Write a function that can generate a random 5 digit personal identification number (PIN).
 *
 * The function should generate a number between 10000 and 99998 and return it. The PIN number should be an even number
 *99998
 * HINTS:
 * - You can use the Math's random method to generate a number between 0 and 1
 * - You can multiply this number to generate a number between ~900 and ~89000
 * - You can then add to this number to ensure it has 5 digits
 * - You can use the Math's round, ceil or trunc to be left with a 5 digit integer
 * - You can use the `isOdd` function defined above to check if you need to + 1
 *
 * @returns the pin number
 */ 

 //generate 5 digit random #
 /*var random = Math.floor(Math.random()*100000);

 //return 2 different answers depending on if the result is even
function generateRandomInt (n) {
    if (n %2 === 0) {
        random = console.log(Math.floor(Math.random()*100000));
    }
    else {random = console.log(Math.floor(Math.random()*100000)+1);}
};

function generateRandomInt (n) {
    // if statement console.log can be divided by 2, then leave the statement
    if (n %2 == 0) {
        console.log(Math.floor(Math.random(n)*100000));
    }
    // if statement console.log cannot be divided by 2, then add 1 to the statement
    else {
        console.log(Math.floor(Math.random(n)*100000)+1);
    }
};

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; 
    //The maximum is exclusive and the minimum is inclusive
  }
  */


  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    const randomnum = (Math.floor(Math.random() * (max - min) ) + min);

    //if statement is divisible by 2, then return to me the statement as is 
    if (randomnum %2 == 0) 
    {
       return  randomnum;
    }
    //if statement is not divisible by 2, then return to me the statement +1
    else {
        return (randomnum+1);
    }
    //The maximum is exclusive and the minimum is inclusive
  };

  


/*   DONE
 * @difficulty easy ~3 minutes
 *
 * Write a function that accepts an object representing a user. The object will contain two 
 * properties, `givenName` and `loggedIn`. The `givenName` is a string and `loggedIn` is a boolean.
 * The function should return either a greeting or a prompt to log in.
 * If logged in, the string should be `Hello given name`.
 * If not logged in, the string should be `Welcome, please log in`.
 *
 * For example, the function can be used like so
 *
 * ```js
 * const user1 = { givenName: 'Samwise Gamgee', loggedIn: false };
 * greetLoggedInUser(user1); // `Welcome, please log in`
 *
 * const user2 = { givenName: 'Aragorn', loggedIn: true };
 * greetLoggedInUser(user2); // `Hello, Aragorn!`
 * ```
 *
 * @param {object} user an object containing a properties of `givenName` and `loggedIn`
 * @returns {string} Saying either `'Hello '` and the user's given name, OR, `'Welcome, please log in'`.
 */

const user1 = { 
    givenName: 'Samwise Gamgee', 
    loggedIn: false 
};
const user2 = { 
    givenName: 'Aragorn', 
    loggedIn: true 
};

const user = {givenName: 'name',
loggedIn: true,};

function greetUser (user) {
    if (user.loggedIn === true) {
        return `Hello ${user.givenName}`;
        } else {
            return'Welcome, please log in';
        }
};


/** DONE
 * @difficulty intermediard ~5 minutes
 *
 * Write a function that accepts a number in kilowatt hours (KWH).
 * Then, calculates the total electricity bill.
 *
 * The first 40 cost $0.26 per kwh,
 * the next 600 kwh cost $0.32 per kwh,
 * any kwh in excess of this costs $0.37 per kwh.
 *
 * @param {number} kwh amount of electricity us kilowatt hours (KWH)
 * @returns {number} the total bill
 *function accepts a number in (KWH)
 calculate total electricity bill
    first K0, cost $0.26 per KWH
    second KWH 600, cost $0.32 KWH
    if KWH > of ^^ parameters, cost $0.37 KWH
*/
function calculateElcBill(kwh) {
    if (kwh <=400) {
        cost=.26
    } else if (kwh <= 600) {
        cost=0.32
    } else {
        cost=.37}
    return cost*kwh
}

/** ??????????????????????
 * @difficulty intemediate, ~5 mins
 *
 * Write a function accepts a user account object containing properties to describe the user's credit.
 *
 * Calculate if the credit limit has been exceeded.
 * If the credit limit was exceeded return the string `'Credit limit exceeded'`,
 * otherwise return the string `'Credit available'`.
 *
 * To calculate whether the credit limit has exceeded, the credit used musn't exceeded the credit limit. 
 * The credit used is the sum of the credit taken before the month and the total charges, minus the extra credits made available during the month.
 *
 * For example:
 * 1. function accepts account object
 * 2. object parameters describe user credit
 * 3. calculate if credit limit exceeded
 * 4. if credit limit exceeded, return string 'Credit limit exceeded' (else return string 'Credit available')
 * 5. credit used = credit taken before month + total charges - extra creidts made available during month
 * 
 * 
 * ```js
 * const userOne = {
 *   creditTakenBeginningOfMonth: 0,
 *   totalChargesInMonth: 1,
 *   creditsAvailableInMonth: 2,
 *   creditLimit: 1,
 * }
 * doesUserHaveCredit(userOne) // returns 'Credit available';
 *
 * const userTwo = {
 *   creditTakenBeginningOfMonth: 0,
 *   totalChargesInMonth: 4,
 *   creditsAvailableInMonth: 2,
 *   creditLimit: 1,
 * }
 * doesUserHaveCredit(userTwo) // returns 'Credit limit exceeded';
 *
 * const userThree = {
 *   creditTakenBeginningOfMonth: 3,
 *   totalChargesInMonth: 1,
 *   creditsAvailableInMonth: 2,
 *   creditLimit: 1,
 * }
 * doesUserHaveCredit(userThree) // returns 'Credit limit exceeded';
 * ```
 *
 * @param {object} userAccount an object containing a properties of
 * - `creditTakenBeginningOfMonth`, the starting credit available before the month
 * - `totalChargesInMonth`, the total credits taken from the account in a month
 * - `creditsAvailableInMonth`, the amount of extra credits available in the month
 * - `creditLimit`, the maximum amount of credits allowed taken at the end of the month
 * @returns {string} stating if credit is available in the month or has been exceeded
 */

const creditUsed = userAccount.creditTakenBeginningOfMonth +
                    userAccount.totalChargesInMonth -
                    userAccount.creditsAvailableInMonth;


//userObject
const userAccount = {
   creditTakenBeginningOfMonth: 1,
   totalChargesInMonth: 1,
   creditsAvailableInMonth: 1,
   creditLimit: 1,
};

//credit Used vs. Credit available
//you can put any object into the (userAccount) as long as it has the exact same parameters
// creditUsed outside the function, you don't technically have a userAccount object yet because it hasn't passed through the function
function doesUserHaveCredit(userAccount) {const creditUsed = userAccount.creditTakenBeginningOfMonth +
    userAccount.totalChargesInMonth -
    userAccount.creditsAvailableInMonth;
    if (creditUsed > userAccount.creditLimit) {
        return "Credit limit exceeded"
    } else {
        return "Credit available"
    }
};  

//

const userThree = {
    creditTakenBeginningOfMonth: 3,
    totalChargesInMonth: 1,
    creditsAvailableInMonth: 2,
    creditLimit: 1,
    };




/**
 * @difficulty hard, ~20 minutes
 *
 * Write a function that accepts a single 5 digit number `num`.
 *
 * First validate `num`, if it's not 5 digits, return the string `'Incorrect input'`.
 *
 * Next, determine if the number is a palindrome or not.
 *
 * A palindrome is a number that is the same read backward as well as forward. Return `true` if the number is a palindrome.
 *
 * For example
 *
 * ```js
 * isPalindromeNumber(12321) // true
 * isPalindromeNumber(12345) // false
 * isPalindromeNumber(01010) // true
 * isPalindromeNumber(11010) // false
 * ```
 *
 * HINTS:
 * - You can use division, modulo operators and `Math.trunc` to calculate the first, last, second and second to last digits.
 * - Once you have the 4 digits, you can compare to check if they are palindromes.
 *
 * @param {number} num a 5 digit number to check if it is a palindrome
 * @returns {Boolean} `true` if the number is a palindrome, `false` otherwise
 * 
 * 
 * 
 * 
 */

function isPalindromeNumber(num) {
    const numAsString = num.toString();
    if (numAsString.length !== 5) {
        return `'Incorrect input'`
    } else {
        return numAsString[0] === numAsString[4] && numAsString[1] === numAsString[3]
    }
};

