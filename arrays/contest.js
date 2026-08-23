// A Contest
// A Contest is held and a total of N participants took part in the contest. You are already given the scores of the participants in the form of an array (of size N).
// The contestant who has a score greater than or equal to the score of the K-th Participant (where K<=N) will advance to the next round, as long as the contestant has a positive score.
// Calculate the total number of participants who will advance to the next round.

function participants(arr,n,k){
    let count=0;
    for(let i=0;i<n;i++){
        if((arr[i]>0) && (arr[i]>=arr[k-1])){
            count++;
        }
    }
    return count;
}

let arr=[10,9,8,7,7,7,5,5];
let n=arr.length;
console.log(participants(arr,n,2));

