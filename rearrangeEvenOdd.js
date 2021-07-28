// Rearrange array such that even index elements are smaller and odd index
// elements are greater

// Given an array, rearrange the array such that :

// If index i is even, arr[i] <= arr[i+1]
// If index i is odd, arr[i] >= arr[i+1]
// Input  : arr[] = {2, 3, 4, 5}
// Output : arr[] = {2, 4, 3, 5}

//
// Input  :arr[] = {6, 4, 2, 1, 8, 3}
// Output :arr[] = {4, 6, 1, 8, 2, 3}

4, 6, 2, 1, 8, 3;
6, 4, 1, 2, 8, 3;
6, 4, 1, 8, 2, 3;
//rules: if i is even, value must be less than value at next index
//if i is odd, value must be greater or equal to value at next index

//oddFlag
const minMax = (arr) => {
  let evenFlag = true;
  for (i = 0; i < arr.length - 1; i++) {
    if (evenFlag) {
      if (arr[i] > arr[i + 1]) {
        //swap value
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
      }
    } else {
      if (arr[i] < arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
      }
    }
    evenFlag = !evenFlag;
  }
  return arr;
};

if (require.main === module) {
  console.log(minMax([6, 4, 2, 1, 8, 3]));
}
