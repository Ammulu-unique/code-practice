// Given an array nums of size n, return the majority element.
// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

function majorityElement(arr){
    for(let i=0;i<arr.length;i++){
        let count=0;
        for(let j=0;j<arr.length;j++){
            if(arr[i]===arr[j]){
                count++;
            }
        }
        if(count>Math.floor(arr.length/2)){
            return arr[i];
        }
    }
    return 0;
}

let arr=[1,2,3,4];
let arr1=[1,2,6,6,7,6,6];
console.log(majorityElement(arr));
console.log(majorityElement(arr1));