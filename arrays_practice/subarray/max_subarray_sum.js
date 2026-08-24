// finding maximum subarray sum

function max_subarray_sum(arr){
    let max_sum=-Infinity;
    for(let i=0;i<arr.length;i++){
        for(let j=i;j<arr.length;j++){
            let curr_sum=0;
            for(let k=i;k<=j;k++){
                curr_sum+=arr[k];
            }
            max_sum=Math.max(max_sum,curr_sum);
        }
    }
    return max_sum;
}
let arr=[1,2,3,4];
console.log(max_subarray_sum(arr));