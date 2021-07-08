//Given an array with all distinct elements, find the largest three elements. Expected time complexity is O(n) and extra space is O(1). 
// Examples :

// Input: arr[] = {10, 4, 3, 50, 23, 90}
// Output: 90, 50, 23

let r = [10, 4, 3, 50, 23, 90]

function main(r) {
    //sort the array

    //.sort() method turns things into strings and compares alphabetically...so use this callback
    let sortedArray = r.sort((a,b)=> {return a-b})
    //3,4,10,23,50,90

    //create temp array
    let tempArray = []

    //find the max
    //put that max in tempArray
    //take off that max from sortedArray

    for (let i=0; i<3; i++){
        tempArray.push(sortedArray.pop())
    }
   

    return tempArray
    //take off last value of array and put in temp array

    //do this 3 times
}

if (require.main === module) {
    console.log(main(r));

}