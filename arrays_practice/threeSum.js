/*Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
Notice that the solution set must not contain duplicate triplets.*/

function threeSum(arr){
    let n=arr.length;
    let set=new Set();
    for(let i=0;i<n;i++){
        for(let j=i+1;j<n;j++){
            for(let k=j+1;k<n;k++){
                if(arr[i]+arr[j]+arr[k]===0){
                    //to avoid same triplet pairs
                    let triplet=[arr[i],arr[j],arr[k]];
                    triplet.sort((a,b)=>a-b);
                    set.add(triplet.join(","));
                }
            }
        }
    }
    let ans=[];
    for(let value of set){
        ans.push(value.split(",").map(Number));
    }
    return ans;
}

let arr=[-1,0,1,2,-1,-4]
console.log(threeSum(arr));

//better solution using hashset

function threeSum1(arr){
    let set=new Set();
    let n=arr.length;
    for(let i=0;i<n;i++){
        let hashset=new Set();
        for(let j=i+1;j<n;j++){
            let third=-(arr[i]+arr[j]);
            if(hashset.has(third)){
                let temp=[arr[i],arr[j],third];
                temp.sort((a,b)=>a-b);
                set.add(temp.join(","));
            }
            hashset.add(arr[j]);
        }
    }
    let ans=[];
    for(let value of set){
        ans.push(value.split(",").map(Number));
    }
    return ans;
}

console.log(threeSum1(arr));

// optimized solution 

function threesum2(arr){
    let n=arr.length;
    let ans=[];
    arr.sort((a,b)=>a-b);
    for(let i=0;i<n;i++){
        if(i>0 && arr[i]===arr[i-1]){
            continue;
        }else{
            let j=i+1;
            let k=n-1;
            while(j<k){
                let sum=arr[i]+arr[j]+arr[k];
                if(sum<0){
                    j++;
                }else if(sum>0){
                    k--;
                }else{
                    let temp=[arr[i],arr[j],arr[k]];
                    ans.push(temp);
                    j++;
                    k--;
                    while( j<k && arr[j]===arr[j-1]){
                        j++;
                    }
                    while(j<k && arr[k]===arr[k+1]){
                        k--;
                    }
                }
            }
        }
    }
    return ans;
}

console.log(threesum2(arr));
