const arr = [10, 5, 2, 7, 1, 9];
let k = 15;

const longestSubarrayGivenSum = (arr, k) => {
  let i = 0,
    sum = 0,
    maxLen = 0;

  for (let j = 0; j < arr.length; j++) {
    sum += arr[j];

    while (sum > k) {
      sum -= arr[i];
      i++;
    }

    if (sum === k) {
      maxLen = Math.max(maxLen, j - i + 1);
    }
  }

  return maxLen;
};

console.log(longestSubarrayGivenSum(arr, k));
