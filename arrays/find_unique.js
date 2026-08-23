// find unique element

function unique_element(arr){
    let n=arr.length;
    let ans=0;
    for(let i=0;i<n;i++){
        ans=ans^arr[i];
    }
    return ans;
}

let arr=[1,2,3,2,1];
console.log(unique_element(arr));