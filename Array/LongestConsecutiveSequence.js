const arr = [3, 8, 5, 7, 6];

function longestConsecutiveSequence(arr) {
  let set = new Set(arr);
  let maxNum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (!set.has(arr[i] - 1)) {
      let j = arr[i];
      while (set.has(j)) {
        j++;
      }

      maxNum = Math.max(maxNum, j - arr[i]);
    }
  }

  return maxNum;
}

console.log(longestConsecutiveSequence(arr));
