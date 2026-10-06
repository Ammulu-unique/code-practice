//longest palindromic substring

function palindrome(s,left,right){
    while(left<right){
        if(s[left]!==s[right]){
            return false;
        }
        left++;
        right--;
    }
    return true;
}

function longest1(s){
    let n=s.length;
    let rest="";
    for(let i=0;i<n;i++){
        for(let j=i;j<n;j++){
            if(palindrome(s,i,j)){  // checks if a substring is palindrome or not 
                if(j-i+1>rest.length){ // if it is palindrome, it checks whether the length of palidrome is larger than previous substring
                    rest=s.substring(i,j+1); //if yes then rest will get updated.
                }
            }
        }
    }
    return rest;
}

let s="babad";
console.log(longest1(s));

// optimized version

function palindrome1(s,left,right){
    while(left>=0 && right<s.length && s[left]===s[right]){
        left--;
        right++;
    }
    return right-left-1; // usually its right-left+1 but here it is -1 because to satisfy the edge case when left moves to -1( left and right are 1 position outside the palindrome after expansion.)
}

function longest2(s){
    let n=s.length;
    let start=0;
    let end=0;
    for(let i=0;i<n;i++){
        let len1=palindrome1(s,i,i); //odd case where left and right points to same element
        let len2=palindrome1(s,i,i+1); // even case 
        let max=Math.max(len1,len2);
        if(max>end-start+1){ //keeping track of substring with longest length
            start=i-Math.floor((max-1)/2);
            end=i+Math.floor(max/2);
        }
    }
    return s.substring(start,end+1); //end+1 because end is not included hence we have to add one.
}

let s1="aba"
console.log(longest2(s1));