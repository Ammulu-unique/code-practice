// subsequence

function sub(nums){
    let result=[];
    let ds=[];
    function printF(index){
        if(index>=nums.length){
            result.push([...ds]);
            return;
        }
        ds.push(nums[index]);
        printF(index+1);
        ds.pop();
        printF(index+1);
    }
    printF(0);
    return result;
}

let arr=[3,1,2];
console.log(sub(arr));