//count palindromic substrings

function palindrome(s){
    let left=0;
    let right=s.length-1;
    while(left<right){
        if(s[left]!==s[right]){
            return false;
        }
        left++;
        right--;
    }
    return true;
}

function palindromicSubstrings(s){
    let n=s.length;
    let count=0;
    let sub="";
    for(let i=0;i<n;i++){
        for(let j=i;j<n;j++){
            sub=s.substring(i,j+1);
            if(palindrome(sub)){
                count++;
            }
        }
    }
    return count;
}

let s="aaa";
console.log(palindromicSubstrings(s));

//optimized version

function palindrome1(s,left,right){
    let count=0;
    while(left>=0 && right<s.length && s[left]===s[right]){
        count++;
        left--;
        right++;
    }
    return count;
}

function countsubstring(s){
    let count=0;
    let n=s.length;
    for(let i=0;i<n;i++){
        count+=palindrome1(s,i,i);
        count+=palindrome1(s,i,i+1);
    }
    return count;
}

console.log(countsubstring(s));