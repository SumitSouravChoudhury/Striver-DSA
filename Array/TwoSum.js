const arr = [2, 6, 5, 8, 11];
let target = 14;

const twoSum = (arr) => {
  const map = new Map();

  for (let i = 0; i < arr.length; i++) {
    if (map.has(target - arr[i])) {
      return [map.get(target - arr[i]), i];
    }
    map.set(arr[i], i);
  }

  return [];
};

console.log(twoSum(arr));
