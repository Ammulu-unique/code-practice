//merge two sorted arrays with extra space

function merge(arr1,arr2,n,m){
    let left=0;
    let right=0;
    let index=0;
    let arr3=new Array(n+m);
    while(left<n && right<m){
        if(arr1[left]<arr2[right]){
            arr3[index]=arr1[left];
            index++,left++;
        }else{
            arr3[index]=arr2[right];
            index++,right++;
        }
    }
    while(left<n){
        arr3[index]=arr1[left];
        left++,index++;
    }
    while(right<m){
        arr3[index]=arr2[right];
        right++,index++;
    }
    for(let i=0;i<n+m;i++){
        if(i<n){
            arr1[i]=arr3[i];
        }else{
            arr2[i-n]=arr3[i];
        }
    }
    return [arr1,arr2];
}

let arr1=[1,4,8];
let arr2=[2,3,7];

console.log(merge(arr1,arr2,arr1.length,arr2.length))

// merge two sorted array without extra space

function merge2(arr1,arr2,n,m){
    let right=0;
    let left=n-1;
    while(left>=0 && right<m){
        if(arr1[left]>arr2[right]){
            [arr1[left],arr2[right]]=[arr2[right],arr1[left]];
            left--;
            right++;
        }else{
            break;
        }
    }
    arr1.sort((a,b)=>a-b);
    arr2.sort((a,b)=>a-b);
    return [arr1,arr2];
}

console.log(merge2(arr1,arr2,arr1.length,arr2.length));

// optimal solution using gap

function swapNumber(arr1,arr2,index1,index2){
    if(arr1[index1]>arr2[index2]){
        [arr1[index1],arr2[index2]]=[arr2[index2],arr1[index1]];
    }
}

function merge3(arr1,arr2,n,m){
    let len=m+n;
    let gap=Math.floor(len/2)+(len%2);
    while(gap>0){
        let left=0;
        let right=left+gap;
        while(right<len){
            if(left<n && right>=n){
                swapNumber(arr1,arr2,left,right-n);
            }else if(left>=n){
                swapNumber(arr2,arr2,left-n,right-n);
            }else{
                swapNumber(arr1,arr1,left,right);
            }
            left++;
            right++;
        }
        if(gap===1){
            break;
        }else{
            gap=Math.floor(gap/2)+gap%2;
        }
    }
    return [arr1,arr2];
}

console.log(merge3(arr1,arr2,arr1.length,arr2.length));