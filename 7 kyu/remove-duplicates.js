// https://www.codewars.com/kata/simple-remove-duplicates/train/javascript

//     _________
//    /         \
//   |   7 KYU   |
//    \_________/

// In this Kata, you will remove the left-most duplicates from a array/list of integers and return the result.



//-----------------------------------------------
//      First Solution ()
//-----------------------------------------------
// By: Me(rfig081)
function solve(arr){
    let resultArr = []
    for(let i = arr.length-1; i >= 0; i--){
      if(resultArr.includes(arr[i])){
        continue
      }else{
        resultArr.unshift(arr[i])
      }
    }
    return resultArr
}