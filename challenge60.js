/* You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

Examples
[2, 4, 0, 100, 4, 11, 2602, 36]
Should return: 11 (the only odd number)

[160, 3, 1719, 19, 11, 13, -21]
Should return: 160 (the only even number) */

function findOutlier(integers) {
  // initialize counters
  let numEvens = 0;
  let numOdds = 0;
  let lastEven;
  let lastOdd;
  
  // iterate through the array
  for (let i = 0; i < integers.length; i++) {
    // check if the number is even
    if (integers[i] % 2 === 0) {
      numEvens++;
      lastEven = integers[i];
    } else { // the number is odd
      numOdds++;
      lastOdd = integers[i];
    }
    
    // check if we've found the outlier
    if (numEvens > 1 && numOdds === 1) {
      return lastOdd;
    } else if (numOdds > 1 && numEvens === 1) {
      return lastEven;
    }
  }
}