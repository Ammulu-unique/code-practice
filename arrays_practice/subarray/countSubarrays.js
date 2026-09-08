//Given an array of integers nums and an integer k, return the total number of subarrays whose sum equals to k.

function countSubarraysSum(arr,k){
    let sum=0;
    let count=0;
    let map=new Map();
    map.set(0,1);
    for(let i=0;i<arr.length;i++){
        sum+=arr[i];
        let rem=sum-k;
        if(map.has(rem)){
            count+=map.get(rem);
        }
        map.set(sum,((map.get(sum)||0)+1));
    }
    return count;
}

arr=[1,2,3,1,1,1,1,4,2,3];
console.log(countSubarraysSum(arr,3));