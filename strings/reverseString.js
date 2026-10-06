//reverse string
//strings are immutable in js to give hello direct we can use split array method
function reverse(s){
    let arr=s.split("");
    let n=arr.length;
    let left=0;
    let right=n-1;
    while(left<=right){
        [arr[left],arr[right]]=[arr[right],arr[left]];
        left++;
        right--;
    }
    return arr.join("");
}

console.log(reverse("hello"))