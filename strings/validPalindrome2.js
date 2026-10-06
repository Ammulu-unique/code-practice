//Valid Palindrome II
// brute force approach
function valid(s){
    let n=s.length;
    if(isPalindrome(s)){
        return true;
    }
    for(let i=0;i<n;i++){
        let newString=s.slice(0,i)+s.slice(i+1);
        if(isPalindrome(newString)){
            return true;
        }
    }
    return false;
}
function isPalindrome(s){
    let n=s.length;
    let left=0;
     let right=n-1;
    while(left<right){
        if(s[left]!==s[right]){
            return false;
        }
        left++;
        right--;
    }
    return true;
}

let s="abcd"
console.log(valid(s));

//optimized version

function isPalindrome1(s,left,right){
    while(left<right){
        if(s[left]!==s[right]){
            return false;
        }
        left++;
        right--;
    }
    return true;
}

function valid1(s){
    let left=0;
    let right=s.length-1;
    while(left<right){
        if(s[left]!==s[right]){
            return isPalindrome1(s,left+1,right) || isPalindrome1(s,left,right-1);
        }
        left++;
        right--;
    }
    return true;
}

console.log(valid1(s));