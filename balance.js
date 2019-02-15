function balance(n) {
    let nArr = n.toString().split('')
    let midD1 = nArr[Math.floor(nArr.length/2)]
    let midD2 = nArr[Math.floor((nArr.length-1)/2)]
    console.log('D1: ' + midD1)
    console.log('D2: ' + midD2)

    let leftSum = 0
    let rightSum = 0
    if(nArr.length % 2 === 1) {
        for(let i = 0; i < Math.floor(nArr.length/2); i++){
            console.log(nArr[i])
            leftSum += nArr[i]  
            console.log(leftSum)          
        }
    }
    console.log(leftSum)    
}

balance(12345)