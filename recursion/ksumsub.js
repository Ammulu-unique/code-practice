// subsequence sum = k

function subk(nums,k){
    let result=[];
    let ds=[];
    let sum=k;
    function printF(index,s){
        if(index===nums.length){
            if(s==sum){
                result.push([...ds]);
            }
            return;
        }
        ds.push(nums[index]);
        s+=nums[index];
        printF(index+1,s);
        ds.pop();
        s-=nums[index];
        printF(index+1,s)
    }
    printF(0,0);
    return result;
}

let arr=[1,2,1];
console.log(subk(arr,2));

//print only one subsequence

function subk1(nums,k){
    let result=[];
    let ds=[];
    let sum=k;
    function printF(index,s){
        if(index===nums.length){
            if(s==sum){
                result.push([...ds]);
                return true;
            }
            return false;
        }
        ds.push(nums[index]);
        s+=nums[index];
        if(printF(index+1,s)===true) return true;
        ds.pop();
        s-=nums[index];
        if(printF(index+1,s)===true) return true;
    }
    printF(0,0);
    return result;
}

console.log(subk1(arr,2));

// count number of subsequences

function subk2(nums,k){
    function printF(index,s){
        if(index===nums.length){
            if(s==k){
                return 1;
            }
            return 0;
        }
        s+=nums[index];
        let right=printF(index+1,s);
        s-=nums[index];
        let left=printF(index+1,s);
        return left+right;
    }
    return printF(0,0);
}

console.log(subk2(arr,2));
