// sort 0s 1s 2s

function sort012(arr){
    let count0=0;
    let count1=0;
    let count2=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]===0){
            count0++;
        }else if(arr[i]===1){
            count1++;
        }else{
            count2++;
        }
    }
    for(let i=0;i<count0;i++){
        arr[i]=0;
    }
    for(let i=count0;i<count0+count1;i++){
        arr[i]=1;
    }
    for(let i=count0+count1;i<arr.length;i++){
        arr[i]=2;
    }
    return arr;
}

let arr=[0,1,2,0,1,2];
console.log(sort012(arr));

// dutch natinal flag algorithm

function sort1(arr){
    let low=0;
    let high=arr.length-1;
    let mid=0;
    while(mid<=high){
        if(arr[mid]===0){
            [arr[mid],arr[low]]=[arr[low],arr[mid]];
            mid++;
            low++;
        }else if(arr[mid]==1){
            mid++;
        }else{
            [arr[mid],arr[high]]=[arr[high],arr[mid]];
            high--;
        }
    }
    return arr;
}

let arr2=[0,1,2,0,1,1,2,2];
 console.log(sort1(arr2));

 
