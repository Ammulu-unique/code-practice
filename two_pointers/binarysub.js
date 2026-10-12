//Binary subarray with k sum

function sum1(arr,k){
    function atmost(k){
        if(k<0){
            return 0;
        }
        let l=0;
        let r=0;
        let sum=0;
        let count=0;
        while(r<arr.length){
            sum=sum+arr[r];
            while(sum>k){
                sum=sum-arr[l];
                l++;
            }
            count=count+(r-l+1);
            r++;
        }
        return count;
    }
    return atmost(k)-atmost(k-1);
}

let arr=[1,0,1,0,1]
console.log(sum1(arr,2))
