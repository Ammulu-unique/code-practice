//finding maximum element in an array

let arr=[3,4,52,6];
let max=arr[0];
for(let i=1;i<arr.length;i++){
    if(arr[i]>max){
        max=arr[i];
    }
}
console.log("maximum element is: "+max);
