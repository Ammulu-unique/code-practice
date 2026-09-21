// spiral matrix

function spiralMatrix(arr) {
  let n = arr.length;
  let m = arr[0].length;
  let top = 0;
  let bottom = n - 1;
  let left = 0;
  let right = m - 1;
  let ans = [];
  while (top <= bottom && left <= right) {
    for (let i = left; i <= right; i++) {
      ans.push(arr[top][i]);
    }
    top++;
    for (let i = top; i <= bottom; i++) {
      ans.push(arr[i][right]);
    }
    right--;
    if (top <= bottom) {
      for (let i = right; i >= left; i--) {
        ans.push(arr[bottom][i]);
      }
      bottom--;
    }
    if (left <= right) {
      for (let i = bottom; i >= top; i--) {
        ans.push(arr[i][left]);
      }
      left++;
    }
  }
  return ans;
}

let arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(spiralMatrix(arr));
