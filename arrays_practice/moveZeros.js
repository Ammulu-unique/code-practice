// move zeros in an array to the end

function moveZeros(arr){
    let temp=[];
    for(let i=0;i<arr.length;i++){
        if(arr[i]!==0){
            temp.push(arr[i]);
        }
    }
    let j=0;
    for(let i=0;i<temp.length;i++){
        arr[i]=temp[j];
        j++;
    }
    for(let i=temp.length;i<arr.length;i++){
        arr[i]=0;
    }

    return arr;
}

let arr=[1,2,0,4,0,0,5,6];
console.log(moveZeros(arr));

function optimizedsol(arr){
    let n=arr.length;
    let j=0;
    for(let i=0;i<n;i++){
        if(arr[i]!==0){
            [arr[i],arr[j]]=[arr[j],arr[i]];
            j++;
        }
    }
    return arr;
}

let arr1=[1,2,0,9,6,0,0,4];
console.log(optimizedsol(arr1));