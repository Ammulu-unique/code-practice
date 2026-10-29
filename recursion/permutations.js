// print all permutations

function permutation(nums){
    let ans=[];
    let ds=[];
    let freq=new Array(nums.length).fill(false);
    function permute(){
        if(ds.length===nums.length){
            ans.push([...ds]);
            return;
        }
        for(let i=0;i<nums.length;i++){
            if(!freq[i]){ //if element is not present in frequency array mark it as true
                freq[i]=true;
                ds.push(nums[i]);
                permute();
                ds.pop(); //after the permutation of that particular element pop that element from the data structure
                freq[i]=false; //mark it as false
            }
        }
    }
    permute();
    return ans;
}

let nums=[1,2,3];
console.log(permutation(nums));

//another approach

function permutation1(nums){
    let ans=[];
    function permute1(index){
        if(index===nums.length){
            ans.push([...nums]);
            return;
        }
        for(let i=index;i<nums.length;i++){
            [nums[index],nums[i]]=[nums[i],nums[index]]; //swap current element with current index
            permute1(index+1); // move to next index
            [nums[index],nums[i]]=[nums[i],nums[index]]; //undo the swapping (back tracking) for forwading to next element
        }
    }
    permute1(0);
    return ans;
}

console.log(permutation1(nums));