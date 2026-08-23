// finding unique occurrences

function unique_occurrences(arr) {
  let ans = [];
  
  for (let i = 0; i < arr.length; i++) {
    let alreadyseen = false;
    //step1-check if element is repested or not
    for (let k = 0; k < i; k++) {
      if (arr[k] == arr[i]) {
        alreadyseen = true;
        break;
      }
    }
    //step2- if repeated ignore the element and move forward
    if (alreadyseen) {
      continue;
    }
    //step3- storing the unique occurences
    let count1 = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] == arr[j]) {
        count1++;
      }
    }
    ans.push(count1);
  }
  //step4- checking if numbers occurrence count is unique or not
  for(let i=0;i<ans.length;i++){
    for(let j=i+1;j<ans.length;j++){
        if(ans[i]==ans[j]){
            return false;
        }
    }
  }
  return true;
}
let arr = [1, 2, 2, 1, 1,3];
console.log(unique_occurrences(arr));
