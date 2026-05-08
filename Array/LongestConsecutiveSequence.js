const arr = [100, 4, 200, 1, 3, 2];

const longestConsecutiveSequence = (arr) => {
  let maxLen = -Infinity;

  const set = new Set();

  for (let i = 0; i < arr.length; i++) {
    set.add(arr[i]);
  }

  for (let i = 0; i < arr.length; i++) {
    if (!set.has(arr[i] - 1)) {
      let j = arr[i];
      let currLen = 0;

      while (set.has(j)) {
        currLen++;
        j++;
      }

      maxLen = Math.max(maxLen, currLen);
    }
  }

  return maxLen;
};

console.log(longestConsecutiveSequence(arr));
