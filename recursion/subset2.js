// subset2

function subset(nums){
    let anslist=[];
    let ds=[];
    function lists(index){
        anslist.push([...ds]);
        for(let i=index;i<nums.length;i++){
            if(i>index && nums[i]===nums[i-1]){
                continue;
            }
            ds.push(nums[i]);
            lists(i+1);
            ds.pop();
        }
    }
    nums.sort((a,b)=>a-b);
    lists(0);
    return anslist;
}

let nums=[1,2,2];
console.log(subset(nums));