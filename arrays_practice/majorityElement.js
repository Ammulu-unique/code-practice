// Given an array nums of size n, return the majority element.
// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

function majorityElement(arr){
    for(let i=0;i<arr.length;i++){
        let count=0;
        for(let j=0;j<arr.length;j++){
            if(arr[i]===arr[j]){
                count++;
            }
        }
        if(count>Math.floor(arr.length/2)){
            return arr[i];
        }
    }
    return 0;
}

let arr2=[1,2,3,4];
let arr1=[1,2,6,6,7,6,6];
console.log(majorityElement(arr2));
console.log(majorityElement(arr1));

//using hash map

function majorityElement2(arr){
    let map=new Map();
    let count=1;
    for(let i=0;i<arr.length;i++){
        let number=arr[i];
        if(map.has(number)){
            map.set(number,map.get(number)+1);
        }else{
            map.set(number,count);
        }
    }

    for(let [key,value] of map){
        if(value>Math.floor(arr.length/2)){
            return key;
        }
    }
    
}

let arr3=[1,2,3,2,2,2,4];
console.log(majorityElement2(arr3));

// using more's voting algorithm

function majorityElement3(arr){
    let count=0;
    let mj;
    for(let i=0;i<arr.length;i++){
        if(count===0){
            count=1;
            mj=arr[i];
        }else if(arr[i]===mj){
            count++;
        }else{
            count--;
        }
    }
    let count1=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]===mj){
            count1++;
        }
    }
    if(count1>Math.floor(arr.length/2)){
        return mj;
    }
}

let arr4=[7,7,5,7,5,1,5,7,5,5,7,7,5,5,5,5];
console.log(majorityElement3(arr4))