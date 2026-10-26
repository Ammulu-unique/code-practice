// bubble sort implementation using recursion

function bubbleSort(arr,r,c){
    if(r===0){
        return;
    }

    if(r>c){
        if(arr[c]>arr[c+1]){
            [arr[c],arr[c+1]]=[arr[c+1],arr[c]];
        }
        bubbleSort(arr,r,c+1);
    }else{
        bubbleSort(arr,r-1,0); //next row but searching starts from first element of the array
    }
}

let arr=[5,3,1,4,6,1];
bubbleSort(arr,arr.length-1,0);
console.log(arr);

