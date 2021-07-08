// Consider an array of distinct numbers sorted in increasing order. The array has been rotated (clockwise) 
//k number of times. Given such an array, find the value of k.

// Input : arr[] = {15, 18, 2, 3, 6, 12}
// Output: 2
// Explanation : Initial array must be {2, 3,
// 6, 12, 15, 18}. We get the given array after 
// rotating the initial array twice.

// Input : arr[] = {7, 9, 11, 12, 5}
// Output: 4

// Input: arr[] = {7, 9, 11, 12, 15};
// Output: 0
let r = [7, 9, 11, 12, 5]
//rotate by 2
function main(r, num) {
//figure out how many rotations an array has undergone

//find the minimum value of the array
let minimum = Math.min(...r)
//find the index where that minimum value is 
let indexOfMin = r.findIndex((e) => e === minimum)
//if the index of min = 2, then it is 2 clockwise rotations away from it's initial position
  return indexOfMin
}

if (require.main === module) {
    console.log(main(r));

}
