// https://www.codewars.com/kata/closest-elevator/train/javascript

//     _________
//    /         \
//   |   8 KYU   |
//    \_________/

// Given 2 elevators (named 'right' and 'left') in a building with 3 floors (0, 1, 2), 
// design a function that returns the elevator that's closest to the called floor.
// If both elevators are on the same level, return 'right'.

// You can assume that the inputs will always be valid integers between 0-2.

// For example,
// if 'left' is at the ground floor (0)
// and 'right' is at the 1st floor (1),
// a call from the 1st or 2nd floor should return 'right'
// while a call from the ground floor (0) should return 'left'.

// elevator(0, 1, 0); returns 'left';
// elevator(0, 1, 1); returns 'right';
// elevator(0, 1, 2); returns 'right';

// If both elevators are on the same level, return 'right'.
// elevator(0, 0, 0); returns 'right';

// If both elevators are equally distant from the call, return 'right'.
// elevator(0, 2, 1); returns 'right';



//-----------------------------------------------
//      First Solution (For Loop)
//-----------------------------------------------
// By: Me(rfig081) & Zeroth
function elevator(left, right, call) {   
    if (left==right && right==call) {
        return 'right'
    }else if (left==call) {
        return 'left'
    }else if (right==call) {
        return 'right'
    }
    let mathLeft = left + 1;
    let mathRight = right + 1;
    let mathCall = call + 1;    
    let elevLeft = Math.abs(mathLeft - mathCall)
    let elevRight = Math.abs(mathRight - mathCall)

    if (elevLeft == elevRight) {
        return 'right'
    } else if (elevLeft < elevRight)  {
        return 'left'
    } else {
        return 'right'
    }
}

elevator(0, 2, 1)
