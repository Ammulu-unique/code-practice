// Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.
// You must write an algorithm with O(log n) runtime complexity.

function pivotElement(arr){
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
    return start;
}

function binarySearch(arr,s,e,key){
    let start=s;
    let end=e;
    while(start<=end){
        let mid=Math.floor(start+(end-start)/2);
        if(arr[mid]===key){
            return mid;
        }else if(arr[mid]<key){
            start=mid+1;
        }else{
            end=mid-1;
        }
    }
    return -1;
}

function searchKey(nums,target){
    let pivot=pivotElement(nums);
    if(target>=nums[pivot] && target<=nums[nums.length-1]){
        return binarySearch(nums,pivot,nums.length-1,target);
    }else{
        return binarySearch(nums,0,pivot-1,target);
    }
}

let nums=[4,5,6,7,0,1,2];
console.log(searchKey(nums,6));

 