// find kth element in two sorted arrays

function kthElement(a, b, k){
    let n1=a.length;
    let n2=b.length;
    if(n1>n2){
        return kthElement(b,a,k);
    }
    let n=n1+n2;
    let low=Math.max(k-n2,0);
    let high=Math.min(k,n1);
    while(low<=high){
        let mid1=Math.floor(low+(high-low)/2);
        let mid2=k-mid1;
        let l1=-Infinity;
        let l2=-Infinity;
        let r1=Infinity;
        let r2=Infinity;
        if(mid1<n1){
            r1=a[mid1];
        }
        if(mid2<n2){
            r2=b[mid2];
        }
        if(mid1-1>=0){
            l1=a[mid1-1];
        }
        if(mid2-1>=0){
            l2=b[mid2-1];
        }
        if(l1<=r2 && l2<=r1){
            return Math.max(l1,l2);
        }
        if(l1>r2){
            high=mid1-1;
        }else{
            low=mid1+1;
        }
    }
    return -1;
}

let arr1=[2,3,6,7,9];
let arr2=[1,4,8,10];

console.log(kthElement(arr1,arr2,5));