// https://www.codewars.com/kata/do-you-speak-english

//     _________
//    /         \
//   |   8 KYU   |
//    \_________/

// Given a string of arbitrary length with any ascii characters. Write a function to determine whether the string contains the whole word "English".

// The order of characters is important -- a string "abcEnglishdef" is correct but "abcnEglishsef" is not correct.

// Upper or lower case letter does not matter -- "eNglisH" is also correct.

// Return value as boolean values, true for the string to contains "English", false for it does not.



//-----------------------------------------------
//      First Solution (includes Method)
//-----------------------------------------------
// By: Me(rfig081)
function spEng(sentence) {
    sentence = sentence.toLowerCase();
    let substring = 'english';

    if (sentence.includes(substring)) {
        return true;
    } else {
        return false;
    }
}



//-----------------------------------------------
//     Simpler Solution (includes Method)
//-----------------------------------------------
// By: Me(rfig081)
function spEng(sentence) {
    return sentence.toLowerCase().includes('english');
}



//-----------------------------------------------
//     Simpler Solution (indexOf Method)
//-----------------------------------------------
// By: Me(rfig081)
function spEng(sentence) {
    return sentence.toLowerCase().indexOf('english')!=-1;
}