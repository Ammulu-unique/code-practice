//Subarray with k different integers

function kth(arr,k){
    let count=0;
    let n=arr.length;
    for(let i=0;i<n;i++){
        let map=new Map();
        for(let j=i;j<n;j++){
            map.set(arr[j],(map.get(arr[j])||0)+1);
            if(map.size===k){
                count++;
            }else if(map.size>k){
                break;
            }
        }
    }
    return count;
}

let arr=[1,2,1,3,4]

console.log(kth(arr,3));

//better solution

function kth1(arr,k){
    function atmost(arr,k){
        if(k<=0){ //no.of distinct numbers should not be less that or equal to zero
            return 0;
        }
        let l=0;
        let r=0;
        let count=0;
        let map=new Map();
        while(r<arr.length){
            map.set(arr[r],(map.get(arr[r])||0)+1);
            while(map.size>k){
                map.set(arr[l],map.get(arr[l])-1);
                if(map.get(arr[l])===0){
                    map.delete(arr[l]);
                }
                l++;
            }
            count=count+(r-l+1);
            r++;
        }
        return count;
    }
    return atmost(arr,k)-atmost(arr,k-1); 
}

let arr1=[2,1,1,1,3,4,3,2];
console.log(kth1(arr1,3));
