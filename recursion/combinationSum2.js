// combination sum 2

function combination2(candidates,target){
    let ans=[];
    let ds=[];
    function findCombinations(index,target){
        if(target===0){
            ans.push([...ds]);
            return;
        }
        for(let i=index;i<candidates.length;i++){
            if(i>index && candidates[i]===candidates[i-1]){ //skips duplicates
                continue;
            }
            if(candidates[i]>target){ //if not suitable 
                break;
            }
            ds.push(candidates[i]); 
            findCombinations(i+1,target-candidates[i]); //considers next element
            ds.pop();
        }
    }
    candidates.sort((a,b)=>a-b); //sorting is required for correct order
    findCombinations(0,target);
    return ans;
}

let arr=[1,1,1,2,2];
console.log(combination2(arr,4));