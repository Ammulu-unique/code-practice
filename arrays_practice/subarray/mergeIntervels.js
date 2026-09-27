// merge intervals

function merge(arr){
    let n=arr.length;
    let ans=[];
    arr.sort((a,b)=>a[0]-b[0]);
    for(let i=0;i<n;i++){
        let start=arr[i][0];
        let end=arr[i][1];
        if(ans.length!==0 && end<=ans[ans.length-1][1]){
            continue;
        }
        for(let j=i+1;j<n;j++){
            if(arr[j][0]<=end){
                end=Math.max(end,arr[j][1]);
            }else{
                break;
            }
        }
        ans.push([start,end]);
    }
    return ans;
}

let intervals=[[1,3],[2,6],[8,10],[15,18]];
console.log(merge(intervals));