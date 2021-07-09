//Given an array of n positive integers. We are required to write a program
// to print the minimum product of k integers of the given array.



// Input : 198 76 544 123 154 675
//          k = 2
// Output : 9348
// We get minimum product after multiplying
// 76 and 123.

// Input : 11 8 5 7 5 100
//         k = 4
// Output : 1400
let r =[11,8,5,7,5,100]
k= 4
function main(r, k) {
    //sort the array of numbers in ascending orders
    
    r.sort((a,b) => {return a-b})

    //etract the first k elements from array and push those toa new array
    let newArray = []
    for (i=0; i<k; i++){
        newArray.push(r[i])
    }
    let num = 1
    //iterate over array. check if there is another value at i+1, multiply and store in number
    //note: instead of checking for index at i+1, just go until k-1. 
    for (j=0; j<k; j++){
        //so first will be 5 *5, then 25*7, then 25*7*8
        num = num * newArray[j]
    }
    return num
    //multiply those values together
    //return that value
}

if (require.main === module) {
        console.log(main(r, k));
    
}
    