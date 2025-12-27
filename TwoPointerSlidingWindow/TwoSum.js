function twoSum(arr, target) {
  let map = new Map();

  for (let i = 0; i < arr.length; i++) {
    map.set(arr[i], i);
  }

  for (let i = 0; i < arr.length; i++) {
    if (map.has(target - arr[i]) && map.get(target - arr[i]) !== i) {
      return [i, map.get(target - arr[i])];
    }
  }
}

const arr = [7, 2, 12, 16];

console.log(twoSum(arr, 14));
