// implementing counting sort

function countSort(arr){
    let max=arr[0];
    let min=arr[0];
    for(let i=0;i<arr.length;i++){
        if(arr[i]>max){
            max=arr[i];
        }
        if(arr[i]<min){
            min=arr[i];
        }
    }
    let freq=new Array(max-min+1).fill(0);
    for(let i=0;i<freq.length;i++){
        freq[arr[i]]++;
    }

    for(let i=min,j=0;i<=max;i++){
        while(freq[i]>0){
            arr[j++]=i;
            freq[i]--;
        }
    }
    return arr;
}

let arr=[1,2,3,2,4,2,1];
console.log(countSort(arr));