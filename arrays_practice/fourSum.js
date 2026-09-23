// 4Sum

function fourSum1(arr,target){
    let n=arr.length;
    let set=new Set();
    for(let i=0;i<n;i++){
        for(let j=i+1;j<n;j++){
            for(let k=j+1;k<n;k++){
                for(let l=k+1;l<n;l++){
                    let sum=arr[i]+arr[j];
                    sum+=arr[k];
                    sum+=arr[l];
                    if(sum===target){
                        let temp=[arr[i],arr[j],arr[k],arr[l]];
                        temp.sort((a,b)=>a-b);
                        set.add(temp.join(","));
                    }
                }
            }
        }
    }
    let ans=[];
    for(let value of set){
        ans.push(value.split(",").map(Number));
    }
    return ans;
}
let arr=[1,0,-1,0,-2,2]
console.log(fourSum1(arr,0))

// better solution using hashset

function fourSum2(arr,target){
    let n=arr.length;
    let set=new Set();
    for(let i=0;i<n;i++){
        for(let j=i+1;j<n;j++){
            let hashset=new Set();
            for(let k=j+1;k<n;k++){
                let sum=arr[i]+arr[j];
                sum+=arr[k];
                let fourth=target-(sum);
                if(hashset.has(fourth)){
                    let temp=[arr[i],arr[j],arr[k],fourth];
                    temp.sort((a,b)=>a-b);
                    set.add(temp.join(","));
                }
                hashset.add(arr[k]);
            }
        }
    }
    let ans=[];
    for(let value of set){
        ans.push(value.split(",").map(Number));
    }
    return ans;
}
console.log(fourSum2(arr,0));