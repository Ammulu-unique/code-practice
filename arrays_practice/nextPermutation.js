// next permutation

function permutation(arr){
    let ind=-1;
    let n=arr.length;
    for(let i=n-2;i>=0;i--){
        if(arr[i]<arr[i+1]){
            ind=i;
            break;
        }
    }
    if(ind==-1){
        arr.reverse();
        return arr; // because there is no break point 
    }
    for(let i=n-1;i>=ind;i--){
        if(arr[i]>arr[ind]){
            [arr[i],arr[ind]]=[arr[ind],arr[i]];
            break;
        }
    }
    let left=ind+1;
    let right=n-1;
    while(left<right){
        [arr[left],arr[right]]=[arr[right],arr[left]];
        left++;
        right--;
    }
    return arr;
}

let arr=[2,1,5,4,3,0,0];
console.log(permutation(arr));
