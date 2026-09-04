// finding second largest element in an array 

function bruteforceSL(arr){
    arr.sort((a,b)=>a-b); //sorting all the elements
    let n=arr.length;
    let largest=arr[n-1]; //considering last element as larger element
    let secondLargest=-1;
    for(let i=n-2;i>=0;i--){ //running a reverse loop from n-2 to 0 
        if(arr[i]!=largest){ //make sure to differentiate larger element, if large element is repeated 
            secondLargest=arr[i];
            break;
        }
    }
    return secondLargest;
}

let arr=[1,8,3,4,2,6];
console.log(bruteforceSL(arr)) //time complexity is o(N log N);

function betterSL(arr){
    let large=arr[0];
    for(let i=0;i<arr.length;i++){
        if(arr[i]>large){
            large=arr[i];
        }
    }

    let slarge=-1;
    for(let i=0;i<arr.length;i++){
        if(arr[i]>slarge && arr[i]!=large){
            slarge=arr[i];
        }
    }
    return slarge;
}

let arr1=[1,3,6,5,7];
console.log(betterSL(arr1));

function secondLargestOpt(arr){
    let largest=arr[0];
    let secondLargest=-1;
    for(let i=1;i<arr.length;i++){
        if(arr[i]>largest){
            secondLargest=largest;
            largest=arr[i];
        }else if(arr[i]<largest && arr[i]>secondLargest){
            secondLargest=arr[i];
        }
    }
    return secondLargest;
}

let arr2=[1,2,3,4,5];
console.log(secondLargestOpt(arr2));