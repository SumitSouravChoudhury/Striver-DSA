const arr = [100, 4, 200, 1, 3, 2];

const longestConsecutiveSequence = (arr) => {
  const set = new Set(arr);
  let maxCount = 0;

  for (const num of set) {
    if (!set.has(num - 1)) {
      let current = num;
      let count = 0;

      while (set.has(current)) {
        count++;
        current++;
      }

      maxCount = Math.max(maxCount, count);
    }
  }

  return maxCount;
};

console.log(longestConsecutiveSequence(arr));
