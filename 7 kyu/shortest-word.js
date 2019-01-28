// https://www.codewars.com/kata/shortest-word/train/javascript

//     _________
//    /         \
//   |   7 KYU   |
//    \_________/

// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.



//-----------------------------------------------
//      First Solution ()
//-----------------------------------------------
// By: Me(rfig081)
function findShort(s){
    let sentenceArr = s.split(' ')
    let wordsArr = []

    for(let i = 0; i < sentenceArr.length; i++){
        let wordLength = sentenceArr[i].split('').length
        wordsArr.push(wordLength)
    }
    
    let sortedWordsArr = wordsArr.sort((a,b) => {return a-b})
    return sortedWordsArr[0]
}