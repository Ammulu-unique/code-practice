// Given the sorted rotated array nums of unique elements, return the minimum element of this array.
// You must write an algorithm that runs in O(log n) time.

function pivotRotated(arr){
    let start=0;
    let end=arr.length-1;
    while(start<end){
        let mid=Math.floor(start+(end-start)/2);
        if(arr[mid]>arr[end]){
            start=mid+1;
        }else{
            end=mid;
        }
    }
    return arr[start];
}

let arr=[3,4,5,1,2];
console.log(pivotRotated(arr));