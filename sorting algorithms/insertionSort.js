// implementing insertion sort algorithm

function insertionSort(arr){
    for(let i=1;i<arr.length;i++){
        let curr=arr[i];
        let prev=i-1;
        while(prev>=0 && arr[prev]>curr){
            arr[prev+1]=arr[prev];
            prev--;
        }
        arr[prev+1]=curr;
    }
    return arr;
}

let array1=[1,4,3,6,2,21,19];
console.log(insertionSort(array1));