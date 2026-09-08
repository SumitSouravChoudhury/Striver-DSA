const arr = [2, 3, 5];

const LongestSubarrayGivenSumPositiveNegative = (arr, k) => {
  let map = new Map();

  let sum = 0;
  let maxLen = 0;

  map.set(0, -1);

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];

    let rem = sum - k;
    if (map.has(rem)) {
      let len = i - map.get(rem);
      maxLen = Math.max(maxLen, len);
    }

    if (!map.has(sum)) {
      map.set(sum, i);
    }
  }

  return maxLen;
};

console.log(LongestSubarrayGivenSumPositiveNegative(arr, 5));
