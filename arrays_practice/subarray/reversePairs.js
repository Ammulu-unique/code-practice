//reverse pairs

function reverse(arr){
    let count=0;
    let n=arr.length;
    for(let i=0;i<n;i++){
        for(let j=i+1;j<n;j++){
            if(i<j && arr[i]>2*arr[j]){
                count++;
            }
        }
    }
    return count;
}
let arr=[40,25,19,12,9,6,2];
console.log(reverse(arr));

function merge(arr,low,mid,high){
    let temp=[];
    let left=low;
    let right=mid+1;
    while(left<=mid && right<=high){
        if(arr[left]<arr[right]){
            temp.push(arr[left]);
            left++;
        }else{
            temp.push(arr[right]);
            right++;
        }
    }
    while(left<=mid){
        temp.push(arr[left]);
        left++;
    }
    while(right<=high){
        temp.push(arr[right]);
        right++;
    }
    for(let i=0;i<temp.length;i++){
        arr[i+low]=temp[i];
    }
}
//counting of pairs logic
function countReverse(arr,low,mid,high){
    let right=mid+1;
    let count=0;
    for(let i=low;i<=mid;i++){
        while(right<=high && arr[i]>2*arr[right]){
            right++;
        }
        count=count+right-(mid+1);
    }
    return count;
}

function mergeSort(arr,low,high){
    let count=0;
    if(low>=high){
        return count;
    }
    let mid=Math.floor((low+high)/2);
    count+=mergeSort(arr,low,mid); // counting of pairs for every sub-parts of the array
    count+=mergeSort(arr,mid+1,high); 
    count+=countReverse(arr,low,mid,high);
    merge(arr,low,mid,high);
    return count;
}

function reversePairs(arr){
    return mergeSort(arr,0,arr.length-1);
}

let arr1=[40,25,19,12,9,6,2];
console.log(reversePairs(arr1))