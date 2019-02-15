function palindrome(str) {
    let arr = str.toLowerCase().split('')
    let pal =[]

    for(let i=arr.length-1; i>=0; i--) {
        pal.push(arr[i])
    }

    if(arr.join('') === pal.join('')) {
        return true
    }else {
        return false
    }
}

function palindrome(str) {
	var str = str.toLowerCase().replace(/[^a-zA-Z]/ig, '')
    let pal = str.split('').reverse().join('')
    return str === pal
}

palindrome('aBcDeFg')