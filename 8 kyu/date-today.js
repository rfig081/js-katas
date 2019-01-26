// https://www.codewars.com/kata/is-the-date-today/train/javascript

//     _________
//    /         \
//   |   8 KYU   |
//    \_________/

// Write a simple function that takes as a parameter a date object and returns a boolean value representing whether the date is today or not.

// Make sure that your function does not return a false positive by just checking just the day.



//-----------------------------------------------
//        First Solution (setHours to 0)
//-----------------------------------------------
// By: Me(rfig081)
function isToday(date) {
  let today = new Date();
  
  if (date.setHours(0,0,0,0) == today.setHours(0,0,0,0)) {
    return true;
  }

  return false;
}



//-----------------------------------------------
//       Simpler Solution (Without Var)
//-----------------------------------------------
// By: Me(rfig081)
function isToday(date) {
  return new Date().toDateString() == date.toDateString();
}
