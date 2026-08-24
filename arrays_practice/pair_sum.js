//pair sum

function pair_sum(arr,sum){
    let ans=[];
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i]+arr[j]==sum){
                let min=Math.min(arr[i],arr[j]);
                let max=Math.max(arr[i],arr[j]);
                ans.push([min,max]);
            }
        }
    }
    return ans;
}
let arr=[1,2,3,4];
console.log(pair_sum(arr,7));