//left rotate the array by one place

function rotateOneLeft(arr){
    let temp=arr[0];
    let n=arr.length;
    for(let i=1;i<arr.length;i++){
        arr[i-1]=arr[i];
    }
    arr[n-1]=temp;
    return arr;
}

let arr=[1,2,3,4,5,6];
console.log(rotateOneLeft(arr));

// left rotation of array in k places

function leftRotateK(arr,k){
    let temp=[];
    let n=arr.length;
    k=k%n; //always reduce k for minimum rotations
    //pushing elements that need to be shifted into temp.
    for(let i=0;i<k;i++){
        temp.push(arr[i]);
    }
    //shifting the remaining elements to left
    for(let i=k;i<n;i++){
        arr[i-k]=arr[i];
    }
    //now adding temp element to main array
    let j=0;
    for(let i=n-k;i<n;i++){
        arr[i]=temp[j];
        j++;
    }
    return arr;
}

let arr1=[1,2,3,4,5];
console.log(leftRotateK(arr1,2));

// optimized solution

function reverse(arr,start,end){
    while(start<end){
        [arr[start],arr[end]]=[arr[end],arr[start]];
        start++;
        end--;
    }
    return arr;
}

function rotate(arr,k){
    let n=arr.length;
    k=k%n;
    reverse(arr,0,k-1);
    reverse(arr,k,n-1);
    reverse(arr,0,n-1);
}

let arr2=[1,2,3,4,5];
rotate(arr2,2);
console.log(arr2);


