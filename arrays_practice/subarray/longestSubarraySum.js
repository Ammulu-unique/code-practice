//funding longest sub array sum equals to k

function longestSubarray(arr,k){
    let len=0;
    for(let i=0;i<arr.length;i++){
        let sum=0;
        for(let j=i;j<arr.length;j++){
            sum+=arr[j];
            if(sum===k){
                len=Math.max(len,j-i+1);
            }
        }
    }
    return len;
}

let arr=[1,2,1,1,1,4,6];
// console.log(longestSubarray(arr,3));

//better approach using hashmap

function longestsubarray1(arr,k){
    let map=new Map();
    map.set(0,-1);
    let sum=0;
    let maxlen=0;
    for(let i=0;i<arr.length;i++){
        sum+=arr[i];
        let rem=sum-k;
        if(map.has(rem)){
            let previousIndex=map.get(rem);
            let len=i-previousIndex;
            maxlen=Math.max(len,maxlen);
        }
        if(!map.has(sum)){
            map.set(sum,i);
        }
    }
    return maxlen;
}

console.log(longestsubarray1(arr,3));

//optimal solution using two pointer approach 

function optsol(arr,k){
    let left=0;
    let right=0;
    let n=arr.length;
    let maxlen=0;
    let sum=arr[0];
    while(right<n){
        while(left<=right && sum>k){
            sum-=arr[left];
            left++;
        }
        if(sum===k){
            maxlen=Math.max(maxlen,right-left+1);
        }
        right++;
        if(right<n){
            sum+=arr[right];
        }
    }
    return maxlen;

}
let arr1=[1,2,3,1,1,1,1,3,3];
console.log(optsol(arr1,6));