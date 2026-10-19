//check if an array is sorted or not 

function sort(arr,index){
    if(index===arr.length-1){
        return true;
    }
    return arr[index] < arr[index+1] && sort(arr,index+1);
}

let arr=[1,2,3];
console.log(sort(arr,0));