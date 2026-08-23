//searching a key using linear search

function linear_search(arr,key) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === key) {
      console.log("element fount at " + i);
      break;
    }
  }
}
let arr=[1,2,3,66,7]
console.log(linear_search(arr,3));
