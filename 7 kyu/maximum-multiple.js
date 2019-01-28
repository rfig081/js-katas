// https://www.codewars.com/kata/maximum-multiple/train/javascript

//     _________
//    /         \
//   |   7 KYU   |
//    \_________/

// Task
// Given a Divisor and a Bound , Find the largest integer N , Such That ,

// Conditions :
// N is divisible by divisor
// N is less than or equal to bound
// N is greater than 0.

// Notes
// The parameters (divisor, bound) passed to the function are only positve values .
// It's guaranteed that a divisor is Found .



//-----------------------------------------------
//      First Solution ()
//-----------------------------------------------
// By: Me(rfig081)
function maxMultiple(divisor, bound){
    for(let i = bound; i >= 0; i--){
        if(i%divisor === 0){
            return i
        }
    }
}