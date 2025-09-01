const arr = [2, 3, 5, 1, 9];
const k = 10;

function findLongestSubarray(arr, k) {
  let n = arr.length;
  let i = 0,
    j = 0,
    maxLen = 0;
  let sum = arr[0];

  while (j < n) {
    while (i <= j && sum > k) {
      sum -= arr[i];
      i++;
    }

    if (sum === k) {
      maxLen = Math.max(maxLen, j - i + 1);
    }

    j++;
    if (j < n) {
      sum += arr[j];
    }
  }

  return maxLen;
}

console.log(findLongestSubarray(arr, 10));
