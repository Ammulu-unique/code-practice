//Given a binary array nums, return the maximum number of consecutive 1's in the array.

function maxConsecutive(arr){
    let count=0;
    let max=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]!==0){
            count++;
            max=Math.max(count,max);
        }else{
            count=0;
        }
    }
    return max;
}

let arr=[1,1,0,1,1,1];
console.log(maxConsecutive(arr));