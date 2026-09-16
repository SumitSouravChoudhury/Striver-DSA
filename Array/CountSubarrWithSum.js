const arr = [3, 1, 2, 4];
const k = 6;

const countSubarr = (arr, k) => {
  const map = new Map();
  map.set(0, 1);
  let sum = 0,
    count = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];

    if (map.has(sum - k)) {
      count += map.get(sum - k);
    }

    map.set(sum, (map.get(sum) || 0) + 1);
  }

  return count;
};

console.log(countSubarr(arr, k));
