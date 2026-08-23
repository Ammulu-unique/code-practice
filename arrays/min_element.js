//minimum element in js

let arr=[1,2,3,4];
let min=arr[0];
for(let i=1;i<arr.length;i++){
    if(arr[i]<min){
        min=arr[i];
    }
}
console.log("minimum element is: ",min);