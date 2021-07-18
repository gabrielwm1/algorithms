//Given an integer array nums, find the contiguous subarray
// (containing at least one number) which has the largest sum and return its sum.

// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.

const maxSum = (arr) => {
  //create mechanism to identify starting and ending indecies
  //when done with the loop, splice the array with the range calculated, return that new array
  let runningSum = 0;
  let runningDiff = 0;

  let diffArray = [];
  for (i = 0; i < arr.length; i++) {
    //for each element at index i, calculate the differnce between running sum and arr[0]/
    //store those values to an array
    //the maxium value in that array will correspond to the index which cuts off the range
    // the minimum value in that array will corresond to the starting point of the range
    runningSum += arr[i];
    runningDiff = runningSum - arr[i];
    diffArray.push(runningDiff);
  }
  let newStartingIndex = diffArray.findIndex(
    (e) => e === Math.min(...diffArray)
  );
  let newEndingIndex = diffArray.findIndex((e) => e === Math.max(...diffArray));
  //slice the original array with range newStarting index and newEndingIndex
  let slicedArray = arr.slice(newStartingIndex, newEndingIndex);
  let newRunningSum = 0;
  for (j = 0; j < slicedArray.length; j++) {
    newRunningSum += slicedArray[j];
  }
  return newRunningSum;
};

if (require.main === module) {
  console.log(maxSum([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
}
