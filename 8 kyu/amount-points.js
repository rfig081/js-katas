// https://www.codewars.com/kata/total-amount-of-points/train/javascript

//     _________
//    /         \
//   |   8 KYU   |
//    \_________/

// Our football team finished the championship. The result of each match look like "x:y". Results of all matches are recorded in the array.

// For example: ["3:1", "2:2", "0:1", ...]

// Write a function that takes such list and counts the points of our team in the championship. Rules for counting points for each match:
// if x>y - 3 points
// if x<y - 0 point
// if x=y - 1 point

// Notes:
// there are 10 matches in the championship
// 0 <= x <= 4
// 0 <= y <= 4



//-----------------------------------------------
//      First Solution (Remove Colon)
//-----------------------------------------------
// By: Me(rfig081)
function points(games) {
    let gamesStr = games.join('');

    let colonRemoved = gamesStr.replace(/:/g, '');
    
	let gamesArr = colonRemoved.split('');

    let pts = 0;
    for (let index = 0; index < gamesArr.length; index+=2) {
        let nxtIndex = index + 1;
        
        if (gamesArr[nxtIndex] < gamesArr[index]) {
            pts += 3;            
        }else if (gamesArr[nxtIndex] == gamesArr[index]) {
            pts++;
        }
    }
    return pts;
}



//-----------------------------------------------
//              Simpler Solution
//-----------------------------------------------
// By: Zeroth
function points(games){
    let x_points = 0
    for(let i = 0; i < games.length; i++){
        let holder = games[i].split(":")
        let x = parseInt(holder[0])
        let y = parseInt(holder[1])
        if(x > y){
            x_points += 3
        }else if(x === y){
            x_points++
        }
    }
    return x_points
}
