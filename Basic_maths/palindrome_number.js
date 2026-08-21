//checking palindrome of a number;
function palindrome(x){
    let rev=0;
    let m=x;
    if(x<0){
        return false;
    }
    while(x!=0){
        let r=x%10;
        rev=rev*10+r;
        x=Math.trunc(x/10);
    }
    if(rev==m){
        return true;
    }else{
        return false;
    }
}

console.log(palindrome(121)); 
console.log(palindrome(-121));