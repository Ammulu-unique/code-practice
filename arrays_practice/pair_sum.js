//pair sum

function pair_sum(arr,sum){
    let ans=[];
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i]+arr[j]==sum){
                ans.push(i,j);
            }
        }
    }
    return ans;
}
let arr=[1,2,3,4];
console.log(pair_sum(arr,7));

//optimized version
function optimisedVersion(arr,k){
    let map=new Map();
    for(let i=0;i<arr.length;i++){
        let num=arr[i];
        let moreNeeded=k-num;
        if(map.has(moreNeeded)){
            return [map.get(moreNeeded),i];
        }
        map.set(num,i);
    }
}
console.log(optimisedVersion(arr,7));

