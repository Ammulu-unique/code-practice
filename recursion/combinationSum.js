// combination sum

function combinationSum(candidates,target){
    let ans=[];
    let ds=[];
    function findCombinations(index,target){
        if(index===candidates.length){
            if(target===0){ 
                ans.push([...ds]);
            }
            return;
        }
        if(candidates[index]<=target){ //take the current element
            ds.push(candidates[index]);
            findCombinations(index,target-candidates[index]); //reuse the current element
            ds.pop(); //backtracking
        }
        findCombinations(index+1,target); //take the next element
    }
    findCombinations(0,target);
    return ans;
}

let candidates=[2,3,6,7];
console.log(combinationSum(candidates,7));