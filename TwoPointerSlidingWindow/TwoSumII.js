function twoSum(arr, target) {
  let l = 0,
    r = arr.length - 1;

  while (l < r) {
    if (arr[l] + arr[r] === target) {
      return [l + 1, r + 1];
    } else if (arr[l] + arr[r] > target) {
      r--;
    } else {
      l++;
    }
  }
}

const arr = [2, 3, 4, 8, 11, 13, 17];

console.log(twoSum(arr, 15));
