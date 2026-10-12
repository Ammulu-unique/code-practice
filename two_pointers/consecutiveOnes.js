// Max Consecutive Ones

function ones(arr, k) {
  let n = arr.length;
  let maxlen = 0;
  for (let i = 0; i < n; i++) {
    let zeroes = 0;
    for (let j = i; j < n; j++) {
      if (arr[j] === 0) {
        zeroes++;
      }
      if (zeroes <= k) {
        let len = j - i + 1;
        maxlen = Math.max(maxlen, len);
      } else {
        break;
      }
    }
  }
  return maxlen;
}

let arr = [1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0];
console.log(ones(arr, 2));

//better solution

function ones1(arr, k) {
  let l = 0;
  let r = 0;
  let maxlen = 0;
  let zeroes = 0;
  while (r < arr.length) {
    if (arr[r] === 0) {
      zeroes++;
    }
    while (zeroes > k) {
      // while: shrink until the window becomes valid.
      // if: shrink only once; works for the maximum-length version
      // because we only need to track the best length found so far.
      if (arr[l] === 0) {
        zeroes--;
      }
      l++;
    }
    if (zeroes <= k) {
      let len = r - l + 1;
      maxlen = Math.max(maxlen, len);
    }
    r++;
  }
  return maxlen;
}

console.log(ones1(arr, 2));
