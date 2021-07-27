/*
function secondLargestNumber(numbers){
    let first = numbers[0]
    let second = 0
    for (let i=0; i<numbers.length; i++ ){
        if(numbers[i] > first){
            second = first;
            first = numbers[i]
        }
        if(numbers[i]>second && numbers[i]<first){
            second = numbers[i]
        }
    }
    return second
}
*/

function secondLargestNumber2(numbers){
    numbers.sort()
    return numbers[1]
}

let nums = [4, 6, 30, 1, 62]
//console.log(secondLargestNumber2(nums))
document.write(secondLargestNumber2(nums))