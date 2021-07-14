//Maximum sum of i*arr[i] among all rotations of a given array

// Input: arr[] = {8, 3, 1, 2}
// Output: 29

let r = [8, 3, 1, 2];
let n = 4;
// {8, 3, 1, 2} = 8*0 + 3*1 + 1*2 + 2*3 = 11
// {3, 1, 2, 8} = 3*0 + 1*1 + 2*2 + 8*3 = 29
// {1, 2, 8, 3} = 1*0 + 2*1 + 8*2 + 3*3 = 27
// {2, 8, 3, 1} = 2*0 + 8*1 + 3*2 + 1*3 = 17
//iterate over the array
//for each element at index j, num = r[j] * j
//add num to variable numCount
//push num count to valueArray
//rotate array, and do this n-1 times

//calculate the maximum of valueArray. find the index of that number.

function main(r, n) {
  //rotation iteration
  let valueArray = [];
  for (i = 0; i < n - 1; i++) {
    let numCount = 0;
    for (j = 0; j < n; j++) {
      let num = r[j] * j;
      numCount += num;
    }
    valueArray.push(numCount);
    //rotate array
    let newVal = r.shift();
    r.push(newVal);
  }
  //now we should have an array of values
  return Math.max(...valueArray);
}

if (require.main === module) {
  console.log(main(r, n));
}
