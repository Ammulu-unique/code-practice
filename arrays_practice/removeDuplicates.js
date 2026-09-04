/*Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same.

Consider the number of unique elements in nums to be k​​​​​​​​​​​​​​. After removing duplicates, return the number of unique elements k.

The first k elements of nums should contain the unique numbers in sorted order. The remaining elements beyond index k - 1 can be ignored. */
function removeDuplicates1(arr){
    let set1=new Set();
    for(let i=0;i<arr.length;i++){
        set1.add(arr[i]);
    }
    let index=0;
    for(let value of set1){
        arr[index]=value;
        index++;
    }
    return index;
}



function removeDuplicates(arr){
    let i=0;
    for(let j=0;j<arr.length;j++){
        if(arr[j]!=arr[i]){
            arr[i+1]=arr[j];
            i++;
        }
    }
    return i+1;
}

let arr=[1,1,2,2,2,3,3];
console.log(removeDuplicates1(arr));