//reversing element in an array

function reverse_array(arr) {
  let n = arr.length;
  let result = "";
  for (let i = n - 1; i >= 0; i--) {
    result += arr[i] + " ";
  }
  return result;
}
let arr1 = [1, 2, 3];
console.log(reverse_array(arr1)); //does not modify original array it returns reversed string

//two pointer approach

function reverse_array1(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    // let temp = arr[left];
    // arr[left] = arr[right];
    // arr[right] = temp;
    [arr[left],arr[right]]=[arr[right],arr[left]]; //using array destructuring 
    left++;
    right--;
  }
  return arr;
}

console.log(reverse_array1(arr1)); //modifies the original array
//reversing using reverse array method
let arr2 = [3, 4, 5];
let reverse = arr2.reverse();
console.log(reverse); //modifies original array js built-in method
