//https://www.geeksforgeeks.org/find-minimum-element-in-a-sorted-and-rotated-array/
// Write a function rotate(ar[], d, n) that rotates arr[] of size n by d elements. 

let r = [1,2,3,4,5,6,7] 
//rotate by 2
let num = 2
//output: [3,4,5,6,7,1,2]
//output: 1
function main(r, num) {
  //extract the first indice of the array, and put it at the end of the array
  //do this n times
  for (i=0; i<num; i++){
    let value = r.shift()
    r.push(value)
  }
  //mutate array
  return r
}

if (require.main === module) {
    console.log(main(r, num));

}
