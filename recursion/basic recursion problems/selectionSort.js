// selection sort

function selection(arr,r,c,max){
    if(r==0){
        return;
    }
    if(r>c){
        if(arr[c]>arr[max]){
            selection(arr,r,c+1,c);
        }else{
            selection(arr,r,c+1,max);
        }
    }else{
        [arr[r-1],arr[max]]=[arr[max],arr[r-1]];
        selection(arr,r-1,0,0);
    }
}

let arr=[11,25,12,22,64];
selection(arr,arr.length-1,0,0);
console.log(arr);