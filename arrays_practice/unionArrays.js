// union of two  arrays

function unionArray(arr1, arr2) {
  let union = [];
  let set1 = new Set();
  for (let i = 0; i < arr1.length; i++) {
    set1.add(arr1[i]);
  }

  for (let j = 0; j < arr2.length; j++) {
    set1.add(arr2[j]);
  }

  let index = 0;
  for (let value of set1) {
    union[index] = value;
    index++;
  }
  return union;
}

let arr1 = [1, 2, 3, 4, 4, 5];
let arr2 = [1, 2, 3, 4, 5, 6, 7];
// console.log(unionArray(arr1, arr2));

function unionOpt(arr1,arr2){
    let n=arr1.length;
    let m=arr2.length;
    let union=[];
    let i=0;
    let j=0;
    while(i<n && j<m){
        if(arr1[i]<arr2[j]){
            if(union.length ===0 || union[union.length-1]!==arr1[i]){
                union.push(arr1[i]);
            }
            i++;
        }else if(arr2[j]<arr1[i]){
            if(union.length ===0 || union[union.length-1]!==arr2[j]){
                union.push(arr2[j]);
            }
            j++;
        }else{
            if(union.length === 0 || union[union.length-1]!==arr1[i]){
                union.push(arr1[i]);
            }
            i++;
            j++;
        }
    }
    while(j<m){
        if(union.length === 0 || union[union.length-1]!==arr2[j]){
            union.push(arr2[j]);
        }
        j++;
    }
    while(i<n){
        if(union.length === 0 || union[union.length-1]!==arr1[i]){
            union.push(arr1[i]);
        }
        i++;
    }
    return union;
}

console.log(unionOpt(arr1,arr2));
