// reversing elements of an array

let arr=[1,2,3,4];
function reverse(i,j){
    if(i>=j){
        return;
    }
    // [arr[i],arr[j]]=[arr[j],arr[i]];// using array destructuring
    let temp=arr[i]; // using temp
    arr[i]=arr[j];
    arr[j]=temp;
    reverse(i+1,j-1);
}
reverse(0,arr.length-1);
console.log(arr);

let arr2=[5,6,7];
function reverse2(i,arr,n){
    if(i>=n/2){
        return;
    }
    [arr[i],arr[n-i-1]]=[arr[n-i-1],arr[i]];
    reverse2(i+1,arr,n);
}
reverse2(0,arr2,arr2.length)
console.log(arr2)