// subarray sum evaluation 

function subarray_sum(arr){
    for(let i=0;i<arr.length;i++){
        for(let j=i;j<arr.length;j++){
            let sum=0;
            for(let k=i;k<=j;k++){
                sum+=arr[k];
            }
            process.stdout.write(sum+" ");
        }
        console.log();
    }
}

let arr1=[1,2,3,4];
subarray_sum(arr1);