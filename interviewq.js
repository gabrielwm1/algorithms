//
let r = [4, 3, 2, 1];
function main(r) {
  // [1, 5, 4, 3, 2]
  //   [1, 2, 4, 3, 5]
  // for each element, at index i, check that the value is ith lowest. if not, increase count
  // of swap variable. find where the ith value is, and swap it for current value.
  let newArray = r.slice().sort();
  let swapCount = 0;
  for (let i = 0; i < r.length; i++) {
    // [1, 2, 3, 45];
    if (r[i] != newArray[i]) {
      let valueToSearch = newArray[i];
      //create function that takes parameter

      // let indexOfValue = r.findIndex(valueToSearch)
      let indexOfValue = r.findIndex((e) => e === valueToSearch);

      //swap the value of r[indexOfValue] with r[i]
      [r[i], r[indexOfValue]] = [r[indexOfValue], r[i]];

      swapCount++;
    }
  }
  return swapCount;
}

if (require.main === module) {
  //   main();
  console.assert(main([1, 5, 4, 3, 2]) === 2);
  console.assert(main([4, 3, 2, 1]) === 2);
  //   console.log(console.assert(main([1, 5, 4, 3, 2]) === 2));
  //   console.log(main([1, 5, 4, 3, 2]));
}
