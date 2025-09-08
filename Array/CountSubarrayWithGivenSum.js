const arr = [1, 1, 1, 1];
const k = 2;

function countSubarray(arr) {
  let map = new Map();
  let prefixSum = 0,
    count = 0;

  map.set(0, 1);

  for (let i = 0; i < arr.length; i++) {
    prefixSum += arr[i];

    if (map.has(prefixSum - k)) {
      count += map.get(prefixSum - k);
    }

    map.set(prefixSum, (map.get(prefixSum) || 0) + 1);
  }

  return count;
}

console.log(countSubarray(arr));
