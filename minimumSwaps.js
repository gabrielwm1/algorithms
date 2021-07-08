//Given an array of n positive integers and a number k. Find the minimum number of 
//swaps required to bring all the numbers less than or equal to k together.

//Input:  arr[] = {2, 1, 5, 6, 3}, k = 3
// Output: 1

// Explanation: 
// To bring elements 2, 1, 3 together, swap 
// element '5' with '3' such that final array
// will be-
// arr[] = {2, 1, 3, 6, 5}

// Input:  arr[] = {2, 7, 9, 5, 8, 7, 4}, k = 5
// Output: 2

//example output

//is 2 greater than 5 ? no
// is 7 greater than 5 ? yes
// swap 7 with first value found in array less than 5 after current position
// check if there is a value in the array thats less than 5, if yes, swap that first value found.
// if no, swap value with 5
// is 9 greater than 5 ? yes
// check if there is a value in the array thats less than 5, if yes, swap that first value found.
// if no, swap value with 5
// swap 9 with first value found in array less than 5 after current position

//goal: all values before 5 need to be less than 5

let r = [2, 1, 5, 6, 3]
let k = 3

function main(r, k) {
    let swapCount= 0
    // for each element at index i, check if the value is greater than k
    // if value is greathan than k, swap it with the first value found in the array thats less k
    // but dont need to mutate the actual array, just increase the counter and update current index
    // if no value is found, swap with k, and, increase count, and return
    for (let i=0; i<r.length; i++){
        if (r[i] > k){
            for (let j=i+1; j<r.length; j++){
                if (r[j] <= 5) {
                    swapCount++
                }
            }
        }
    }
    return swapCount
}
   


if (require.main === module) {
    console.log(main([2, 7, 9, 5, 8, 7, 4], 5));

}

// {2, 7, 9, 5, 8, 7, 4}

//COULDN'T GET THIS SOLUTION