// check if a string is palindrome or not

let string1="teacher";
function palindrome(i,s,n){
    if(i>=n/2){
        return true;
    }
    if(s[i]!=s[n-i-1]){
        return false;
    }
    return palindrome(i+1,s,n);
}
string1=string1.toLowerCase();
string1=string1.replace(/[^a-z0-9]/g,"")
console.log(palindrome(0,string1,string1.length));