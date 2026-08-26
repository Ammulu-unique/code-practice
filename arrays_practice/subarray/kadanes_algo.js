// finding max sum of subarrays using kadane's algorithm

function maxSum(arr){
    let currSum=0;
    let max_Sum=-Infinity;
    for(let i=0;i<arr.length;i++){
        currSum+=arr[i];
        max_Sum=Math.max(currSum,max_Sum);
        if(currSum<0){
            currSum=0;
        }
    }
    return max_Sum;
}

let arr=[1,2,-5,4,5];
console.log(maxSum(arr));