const arr = [6, -2, 2, -8, 1, 7, 4, -10];

const longestSubarray = (arr) => {
  const map = new Map();

  let sum = 0,
    max = 0;

  map.set(0, -1);

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];

    if (map.has(sum)) {
      max = Math.max(max, i - map.get(sum));
    } else {
      map.set(sum, i);
    }
  }

  return max;
};

console.log(longestSubarray(arr));
