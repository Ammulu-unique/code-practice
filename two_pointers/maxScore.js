// maximum points you can obtain from cards

function points(cardPoints,k){
    let n=cardPoints.length;
    let lsum=0;
    let rsum=0;
    let maxSum=lsum; // initializing early to avoid if k=0
    for(let i=0;i<k;i++){
        lsum+=cardPoints[i]; // first adding k number of cards from front to get left sum
    }
    let lindex=n-1;
    for(let i=k-1;i>=0;i--){ //now removing each card point from the k-1 position and simultaneously adding last element from the end of array.
        lsum-=cardPoints[i];
        rsum+=cardPoints[lindex];
        lindex--;
        maxSum=Math.max(maxSum,lsum+rsum); //maxsum tracking.
    }
    return maxSum;
}

let arr=[6,2,3,4,7,2,1,7,1];
console.log(points(arr,4));