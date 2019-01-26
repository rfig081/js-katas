// https://www.codewars.com/kata/they-say-that-only-the-name-is-long-enough-to-attract-attention-they-also-said-that-only-a-simple-kata-will-have-someone-to-solve-it-this-is-a-sadly-story-number-1-are-they-opposite

//     _________
//    /         \
//   |   8 KYU   |
//    \_________/

// They say that only the name is long enough to attract attention. They also said that only a simple Kata will have someone to solve it series #1:
// Are they opposite?

// #Task
// Give you two strings: s1 and s2. If they are opposite, return true; otherwise, return false. Note: The result should be a boolean value, instead of a string.

// The opposite means: All letters of the two strings are the same, but the case is opposite. you can assume that the string only contains letters or it's a empty string. 
// Also take note of the edge case - if both strings are empty then you should return false/False.



//-----------------------------------------------
//         First Solution (While Loop)
//-----------------------------------------------
// By: Me(rfig081)
function isOpposite(s1,s2) {
	let index = 0;
    let s1Character = '';
    let secondString = '';
    let opposite = true;

    if (s1 == '' && s2 == '') {
        return !opposite;
    }

    else {
        while (index < s1.length) {
            s1Character = s1.charAt(index);
            if (s1Character == s1Character.toUpperCase()) {
                secondString += s1Character.toLowerCase();
            }
            if (s1Character == s1Character.toLowerCase()){
                secondString += s1Character.toUpperCase();
            }
            index++;
        }
    
        if ( s2 === secondString) {
            return opposite;
        }
    
        else {
            return !opposite;
        }
    }   
}



//-----------------------------------------------
//          First Solution (For Loop)
//-----------------------------------------------
// By: Me(rfig081)
function isOpposite(s1,s2) {
	let index = 0;
    let s1Character = '';
    let secondString = '';
    let opposite = true;

	if (s1 == '' && s2 == '') {
        return !opposite;
    }
	
	for (; index < s1.length; index++) {
          	s1Character = s1.charAt(index);
            if (s1Character == s1Character.toUpperCase()) {
                secondString += s1Character.toLowerCase();
            }
            if (s1Character == s1Character.toLowerCase()){
                secondString += s1Character.toUpperCase();
            }
        }
    
        if ( s2 === secondString) {
            return opposite;
        }
    
        else {
            return !opposite;
        }
}



//-----------------------------------------------
//      Simpler Solution (For Loop)
//-----------------------------------------------
// By: sbgm40, nini18, Ludaxord, Odai-kakhi, Laura2810
function isOpposite(s1,s2) {
	if (s1 == s2 || s1.toLowerCase() != s2.toLowerCase()) {
        return false;
    }  

    for (let index = 0; index < s1.length ; index++) {
        if (s1.charAt(index) == s2.charAt(index)) {
            return false;
        }
    }

    return true;
}



//-----------------------------------------------
//      Simpler Solution (Map)
//-----------------------------------------------
// By: henkler
function isOpposite(s1,s2) {
    return s1.split('')
    .map(c => c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase())
    .join('') === s2 && s1 !== '';   
}