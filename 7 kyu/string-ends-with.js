// https://www.codewars.com/kata/string-ends-with/train/javascript

//     _________
//    /         \
//   |   7 KYU   |
//    \_________/

// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).



//-----------------------------------------------
//      First Solution
//-----------------------------------------------
// By: Me(rfig081)
function stringEnds(str, ending){
    let toRemove = str.length - ending.length     
    let strArr = str.split('')

    for (let x = 0; x <= toRemove-1; x++) {
        strArr.shift()
    }

    return strArr.join('') == ending
}



//-----------------------------------------------
//      Simpler Solution
//-----------------------------------------------
// By: alwaysup2late, Poimen, odaba, SteffenVogel_79, iamchingel, secondID (plus 346 more warriors)
function solution(str, ending){
    return str.endsWith(ending);
}