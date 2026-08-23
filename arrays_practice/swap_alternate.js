//swapping alternate elements in an array

function swap_alternate(arr){
    let n=arr.length;
    for(let i=0;i+1<n;i+=2){
        [arr[i],arr[i+1]]=[arr[i+1],arr[i]];
    }
    return arr;
}
let arr1=[1,2,3,4,5];
console.log(swap_alternate(arr1))
