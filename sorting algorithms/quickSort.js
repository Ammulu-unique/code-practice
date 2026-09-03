// implementing quick sort algorithm

function partition(arr,low,high){
    let pivot=arr[low];
    let i=low;
    let j=high;
    while(i<j){
        while(arr[i]<=pivot && i<=high-1){
            i++;
        }
        while(arr[j]>=pivot && j>=low+1){
            j--;
        }
        if(i<j){
            [arr[i],arr[j]]=[arr[j],arr[i]];
        }
    }
    [arr[low],arr[j]]=[arr[j],arr[low]];
    return j;
}

function quickSort(arr,low,high){
    if(low<high){
        let partition_index= partition(arr,low,high);
        quickSort(arr,low,partition_index-1);
        quickSort(arr,partition_index+1,high);
    }
}

let arr=[4,6,2,5,7,9,1,3];
quickSort(arr,0,arr.length-1);
console.log(arr);