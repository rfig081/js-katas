// https://www.codewars.com/kata/product-of-maximums-of-array-array-series-number-2/train/javascript

//     _________
//    /         \
//   |   7 KYU   |
//    \_________/

// Task
// Given an array/list [] of integers , Find the product of the k maximal numbers.

// Notes
// Array/list size is at least 3 .
// Array/list's numbers Will be mixture of positives , negatives and zeros
// Repeatition of numbers in the array/list could occur.



//-----------------------------------------------
//      First Solution ()
//-----------------------------------------------
// By: Me(rfig081)
function maxProduct(numbers, size){
    let sortedArr = numbers.sort((a,b) => {return a-b})
    let pointer = sortedArr.length - 1
    let result = 1
    for(let i = size; i > 0; i--){
      result *= sortedArr[pointer]
      pointer--
    }
    
    return result
}