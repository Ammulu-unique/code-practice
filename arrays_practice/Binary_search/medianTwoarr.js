// median of two sorted arrays

// brute force approach

function median1(arr1,arr2){
    let n1=arr1.length;
    let n2=arr2.length;
    let i=0;
    let j=0;
    let arr3=[]
    while(i<n1 && j<n2){
        if(arr1[i]<=arr2[j]){
            arr3.push(arr1[i]);
            i++;
        }else{
            arr3.push(arr2[j]);
            j++;
        }
    }
    while(i<n1){
        arr3.push(arr1[i]);
        i++;
    }
    while(j<n2){
        arr3.push(arr2[j]);
        j++;
    }
    let n=n1+n2;
    if(n%2==1){
        return arr3[n/2];
    }else{
        return (arr3[n/2]+arr3[(n/2)-1])/2;
    }
}

let arr1=[1,3,4,7,10,12];
let arr2=[2,3,6,15];
console.log(median1(arr1,arr2));

//using binary search

function median2(arr1,arr2){
    let n1=arr1.length;
    let n2=arr2.length;
    let n=n1+n2;
    if(n2<n1){
        return median1(arr2,arr1);
    }
    let low=0;
    let high=n1;
    let left=Math.floor((n1+n2+1)/2);
    while(low<=high){
        let mid1=Math.floor(low+(high-low)/2);
        let mid2=left-mid1;
        let l1=-Infinity;
        let l2=-Infinity;
        let r1=Infinity;
        let r2=Infinity;
        if(mid1<n1){
            r1=arr1[mid1];
        }
        if(mid2<n2){
            r2=arr2[mid2];
        }
        if(mid1-1>=0){
            l1=arr1[mid1-1];
        }
        if(mid2-1>=0){
            l1=arr2[mid2-1];
        }
        if(l1<=r2 && l2<=r1){
            if(n&2==1){
                return Math.max(l1,l2);
            }else{
                return (Math.max(l1,l2)+Math.min(r1,r2))/2;
            }
        }
        if(l1<r2){
            low=mid1+1;
        }else{
            high=mid1-1;
        }

    }
    return 0;
}

console.log(median2(arr1,arr2));