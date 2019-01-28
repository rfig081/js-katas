// https://www.codewars.com/kata/build-a-square/train/javascript

//     _________
//    /         \
//   |   7 KYU   |
//    \_________/


// I will give you an integer. Give me back a shape that is as long and wide as the integer. The integer will be a whole number between 0 and 50.

// Example
// n = 3, so I expect a 3x3 square back just like below as a string:



//-----------------------------------------------
//      First Solution ()
//-----------------------------------------------
// By: Me(rfig081)
function generateShape(int){
    let s = '+'.repeat(int)
    for(let i = 0; i < int-1; i++){
      s += '\n' + '+'.repeat(int)
    }
    return s
}