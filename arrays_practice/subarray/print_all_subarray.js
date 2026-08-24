// printing all subarrays within array

function subarray(arr){
    for(let i=0;i<arr.length;i++){
        for(let j=i;j<arr.length;j++){
            for(let k=i;k<=j;k++){
                process.stdout.write(arr[k]+" ");
            }
            process.stdout.write(",");
        }
        console.log();
    }
}
let arr1=[1,2,3];
subarray(arr1);