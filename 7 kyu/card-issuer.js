// https://www.codewars.com/kata/credit-card-issuer-checking

//     _________
//    /         \
//   |   7 KYU   |
//    \_________/

// Given a credit card number we can determine who the issuer/vendor is with a few basic knowns.

// Complete the function getIssuer() that will use the values shown below to determine the card issuer for a given card number. 
// If the number cannot be matched then the function should return the string Unknown.

// | Card Type  | Begins With          | Number Length |
// |------------|----------------------|---------------|
// | AMEX       | 34 or 37             | 15            |
// | Discover   | 6011                 | 16            |
// | Mastercard | 51, 52, 53, 54 or 55 | 16            |
// | VISA       | 4                    | 13 or 16      |



//-----------------------------------------------
//      First Solution ()
//-----------------------------------------------
// By: Me(rfig081)
function getIssuer(number) {
    let numberString = number.toString()
    let numberOne = numberString.slice(0,1)
    let amex_max_length = 15
    let discover_max_length = 16
    let mastercard_max_length = 16
    let visa_max_length1 = 16
    let visa_max_length2 = 13
    
    if(numberOne != '3' && numberOne != '4' && numberOne != '5' && numberOne != '6')
    {
      return "Unknown"
    }
    else{
  //   AMEX
      if(numberOne == '3' && amex_max_length === numberString.split('').length){
        let numberTwo = numberString.slice(1,2)
        if(numberTwo == '4' || numberTwo == '7' ){
          return "AMEX"
        }else{
          return "Unknown"
        }
      }
      
  //   Discover
      if(numberOne == '6' && discover_max_length === numberString.split('').length){
        let numberTwo = numberString.slice(1,2)
        let numberThree = numberString.slice(2,3)
        let numberFour = numberString.slice(3,4)
        if(numberTwo == '0' && numberThree == '1' &&  numberFour == '1'){
          return "Discover"
        }else{
          return "Unknown"
        }
      }
      
  //   Mastercard
      if(numberOne == '5' && mastercard_max_length === numberString.split('').length){
        let numberTwo = numberString.slice(1,2)
        if(numberTwo == '1' || numberTwo == '2' || numberTwo == '3' || numberTwo == '4' || numberTwo == '5'){
          return "Mastercard"
        }else{
          return "Unknown"
        }
      }
      
  //   Visa
      if(numberOne == '4' && (visa_max_length1 === numberString.split('').length || visa_max_length2 === numberString.split('').length)){
        return "VISA"
      }
      else{
        return "Unknown"
      }
    }
  }