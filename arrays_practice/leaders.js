// leaders in an array

function leader(arr){
    let n=arr.length;
    let ans=[];
    for(let i=0;i<n;i++){
        let isLeader=true;
        for(let j=i+1;j<n;j++){
            if(arr[j]>arr[i]){
                isLeader=false;
                break;
            }
        }
        if(isLeader){
            ans.push(arr[i]);
        }
    }
    return ans;
}

let arr=[10,22,12,3,0,6];
console.log(leader(arr));

//optimal version

function leader1(arr){
    let max=-Infinity;
    let ans=[];
    let n=arr.length;
    for(let i=n-1;i>=0;i--){
        if(arr[i]>max){
            ans.push(arr[i]);
        }
        max=Math.max(max,arr[i]);
    }
    ans.reverse();
    return ans;
}
console.log(leader1(arr));