/*
287. Find the Duplicate Number
Given an array of n + 1 integers where each number is in the range [1, n],
find the duplicate number without modifying the array and using O(1) extra space.
*/

function find_duplicate(nums){
    let slow=nums[0];
    let fast=nums[0];
    do{
        slow=nums[slow];
        fast=nums[nums[fast]];
    }while(slow!==fast);
    slow=nums[0];
    while(slow!==fast){
        slow=nums[slow];
        fast=nums[fast];
    }
    return slow;
}

let arr=[1,3,4,2,2];
console.log(find_duplicate(arr));