// binary search using recursion

function binarySearch1(arr,target,start,end){
    if(start>end){
        return -1;
    }
    let mid=Math.floor(start+(end-start)/2);
    if(arr[mid]===target){
        return mid;
    }
    if(arr[mid]<target){
        return binarySearch1(arr,target,mid+1,end);
    }
    return binarySearch1(arr,target,start,mid-1);
}

let arr=[1,2,3,56,76,89];
console.log(binarySearch1(arr,76,0,arr.length-1));