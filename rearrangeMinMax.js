// Rearrange an array in order – smallest, largest, 2nd smallest, 2nd largest, ..
// Difficulty Level : Easy
// Last Updated : 21 Apr, 2021
// Given an array of integers, task is to print the array in the order –
// smallest number, Largest number, 2nd smallest number, 2nd largest number,
// 3rd smallest number, 3rd largest number and so on…..

// Input : arr[] = [5, 8, 1, 4, 2, 9, 3, 7, 6]
// Output :arr[] = {1, 9, 2, 8, 3, 7, 4, 6, 5}

//find the smallest value in the array, push to a new array. take out that value in array
//find the largest value in array, push to new array, take out that value in array
const minMax = (arr) => {
  let newArray = [];
  let minFlag = true;
  for (i = 0; i < arr.length; i++) {
    let indexOfValue;
    let currentValue;
    if (minFlag) {
      currentValue = Math.min(...arr.slice(i));
    } else {
      currentValue = Math.max(...arr.slice(i));
    }
    newArray.push(currentValue);
    indexOfValue = arr.indexOf(currentValue);
    //swap value
    [arr[i], arr[indexOfValue]] = [arr[indexOfValue], arr[i]];
    minFlag = !minFlag;
  }
  return newArray;
};

if (require.main === module) {
  console.log(minMax([5, 8, 1, 4, 2, 9, 3, 7, 6]));
}
