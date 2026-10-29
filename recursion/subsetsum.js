// subset sum

function subset(candidates){
    let sumans=[];
    function combination(index,sum){
        if(index===candidates.length){
            sumans.push(sum);
            return;
        }
        combination(index+1,sum+candidates[index]);
        combination(index+1,sum);
    }
    combination(0,0);
    sumans.sort((a,b)=>a-b);
    return sumans;
}

let candidates=[3,1,2];
console.log(subset(candidates)); //also refer to geeksforgeeks question about subsequence sum