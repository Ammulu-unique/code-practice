// book allocation problem

function pagesAllocated(arr,pages){
    let student=1;
    let pagesCount=0;
    for(let i=0;i<arr.length;i++){
        if(pagesCount+arr[i]<=pages){
            pagesCount+=arr[i];
        }else{
            student++;
            pagesCount=arr[i];
        }
    }
    return student;
}


function allocateBooks(arr,m){
    if(m>arr.length){
        return -1;
    }
    let low=Math.max(...arr);
    let high=arr.reduce((a,b)=>a+b,0);
    for(let pages=low;pages<=high;pages++){
        let countPages=pagesAllocated(arr,pages);
        if(countPages<=m){
            return pages;
        }
    }
    return -1;
}

let arr=[25,46,28,49,24];
console.log(allocateBooks(arr,4));

//using binary serch

function booksAllocated(arr,m){
    if(m>arr.length){
        return -1;
    }
    let low=Math.max(...arr);
    let high=arr.reduce((a,b)=>a+b,0);
    while(low<=high){
        let mid=Math.floor(low+(high-low)/2);
        let students=pagesAllocated(arr,mid);
        if(students>m){
            low=mid+1;
        }else{
            high=mid-1;
        }
    }
    return low;
}
console.log(booksAllocated(arr,4));