const arr = [1, 2, -1, 2, -3, 4, 2];

function findLongestSubarray(arr, k) {
  let prefixSum = 0,
    maxLen = 0;
  let map = new Map();

  for (let i = 0; i < arr.length; i++) {
    prefixSum += arr[i];

    if (prefixSum === k) {
      maxLen = i + 1;
    }

    if (map.has(prefixSum - k)) {
      maxLen = Math.max(maxLen, i - map.get(prefixSum - k));
    }

    if (!map.has(prefixSum)) {
      map.set(prefixSum, i);
    }
  }

  return maxLen;
}

console.log(findLongestSubarray(arr, 3));
