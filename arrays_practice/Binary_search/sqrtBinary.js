// Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well.

function binarySqrt(x){
    let start=0;
    let end=x;
    let ans=-1;
    while(start<=end){
        let mid=Math.floor(start+(end-start)/2);
        let square=mid*mid;
        if(square==x){
            return mid;
        }else if(square<x){
            ans=mid;
            start=mid+1;
        }else{
            end=mid-1;
        }
    }
    return ans;
}

function sqrt(a){
    return binarySqrt(a);
}

console.log(sqrt(8));