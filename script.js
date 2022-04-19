function sumTwoSmallestNumbers(numbers) {  
    numbers.sort( (a,b)=>{
        if (a > b) {
            return 1};
        if (a == b) return 0;
        if (a < b){
            return -1;
        } 
    })
    let sum = numbers[0] + numbers[1]
    console.log(sum)
    return sum
}


let arrNum = [15,6,7,1]

sumTwoSmallestNumbers(arrNum)