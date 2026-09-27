//merge two sorted arrays without extra space

function merge(arr1,arr2,n,m){
    let left=0;
    let right=0;
    let index=0;
    let arr3=new Array(n+m);
    while(left<=n && right<=m){
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