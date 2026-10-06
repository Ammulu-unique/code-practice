// palindrome

function valid(s){
    let left=0;
    let right=s.length-1;
    while(left<right){
        while(left<right && !/[a-zA-Z0-9]/.test(s[left])){
            left++;
        }
        while(left<right && !/[a-zA-Z0-9]/.test(s[right])){
            right--;
        }
        if(s[left].toLowerCase()!==s[right].toLowerCase()){
            return false;
        }
        left++;
        right--;
    }
    return true;
}

let s="A man, a plan, a canal: Panama"
let s1="race a car"
console.log(valid(s));
console.log(valid(s1));