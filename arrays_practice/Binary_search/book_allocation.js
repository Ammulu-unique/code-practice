/*Problem Statement: Given an array ‘arr of integer numbers, ‘ar[i]’ represents the number of pages in the ‘i-th’ book. There are a ‘m’ number of students, and the task is to allocate all the books to the students.
Allocate books in such a way that:

Each student gets at least one book.
Each book should be allocated to only one student.
Book allocation should be in a contiguous manner.
You have to allocate the book to ‘m’ students such that the maximum number of pages assigned to a student is minimum. If the allocation of books is not possible. return -1 */

function isPossible(arr,n,m,mid){
    let studentCount=1;
    let pageCount=0;
    for(let i=0;i<n;i++){
        if(pageCount+arr[i]<=mid){
            pageCount+=arr[i];
        }else{
            studentCount++;
            if(studentCount>m || arr[i]>mid ){
                return false;
            }
            pageCount=arr[i];
        }
    }
    return true;
}

function bookAllocation(arr,n,m){
    let start=0;
    let sum=0;
    let ans=-1;
    for(let i=0;i<n;i++){
        sum+=arr[i];
    }
    let end=sum;
    let mid=Math.floor(start+(end-start)/2);
    while(start<=end){
        if(isPossible(arr,n,m,mid)){
            ans=mid;
            end=mid-1;
        }else{
            start=mid+1;
        }
        mid=Math.floor(start+(end-start)/2);
    }
    return ans;
}

let arr=[10,20,30,40];
console.log(bookAllocation(arr,arr.length,2));