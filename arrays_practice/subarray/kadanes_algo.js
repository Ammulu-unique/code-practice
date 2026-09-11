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

//if interviewer asks about print the specific max sum subarray

function maxSum1(arr){
    let sum=0;
    let max=-Infinity;
    let start=0;
    let anStart=0;
    let anEnd=0;
    for(let i=0;i<arr.length;i++){
        sum+=arr[i];
        if(sum>max){
            max=sum;
            anStart=start;
            anEnd=i;
        }
        if(sum<0){
            sum=0;
            start=i+1;
        }
    }
    return [anStart,anEnd];
}

console.log(maxSum1(arr))