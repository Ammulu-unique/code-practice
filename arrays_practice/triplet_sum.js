// finding triplet sum in an array

function triplet_sum(arr,sum){
    let ans=[];
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            for(let k=j+1;k<arr.length;k++){
                if(arr[i]+arr[j]+arr[k]==sum){
                    ans.push([arr[i],arr[j],arr[k]]);
                }
            }
        }
    }
    return ans;
}

let arr=[1,2,3,4];
console.log(triplet_sum(arr,6));