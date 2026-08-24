//Given an integer array nums of length n where all the integers of nums are in the range [1, n] and each integer appears at most twice, return an array of all the integers that appears twice.
// You must write an algorithm that runs in O(n) time and uses only constant auxiliary space, excluding the space needed to store the output

function find_duplicates(arr){
    let ans=[];
    for(let i=0;i<arr.length;i++){
        // Get the original positive value because some elements may already be negative
        let values=Math.abs(arr[i]);
        let index=values-1
        if(arr[index]<0){
            ans.push(values);
        }else{
            arr[index]=-arr[index];
        }
    }
    return ans;
}

let arr1=[4,3,2,7,8,2,3,1];
console.log(find_duplicates(arr1));