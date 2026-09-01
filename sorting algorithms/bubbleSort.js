// implementing bubbleSort

function bubbleSort(arr){
    for(let i=0;i<arr.length-1;i++){
        let didswap=0;
        for(let j=0;j<arr.length-i-1;j++){
            if(arr[j]>arr[j+1]){
                [arr[j],arr[j+1]]=[arr[j+1],arr[j]];
                didswap=1;
            }
        }
        if(didswap===0){
            break;
        }
    }
    return arr;
}

let arr=[1,5,3,6,3,2];
console.log(bubbleSort(arr));