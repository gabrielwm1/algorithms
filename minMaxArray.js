//Write a function to return minimum and maximum in an array. Your program should make the minimum number of comparisons.
// let r = [3, 2, 1, 4, 5][
// initialize currentMin and currentMax to 0
// for each element at index I, ask _, and set that value to the new min or new max

// const INFINITY = 10000;
// const NEG_INFINITY = -10000;

//declare min and max
//initialixe in and max to r[i]
//iterate over the array and ask if r[i] < min. and r[i]>max. if so, min or max = r[i]

const minMax = (arr) => {
  let min = arr[0];
  let max = arr[0];
  for (i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return [min, max];
};

if (require.main === module) {
  console.log(minMax([1, 2, 89, -100, 5]));
}
