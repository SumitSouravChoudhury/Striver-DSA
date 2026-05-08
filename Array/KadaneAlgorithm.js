const arr = [-2, -3, -7, -2, -10, -4];

const largestSubarr = (arr) => {
  let sum = 0,
    max = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];

    if (sum > max) {
      max = sum;
    }

    if (sum < 0) {
      sum = 0;
    }
  }

  return max;
};

console.log(largestSubarr(arr));
