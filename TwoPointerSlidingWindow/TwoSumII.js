function twoSum(arr, target) {
  let sum = arr[0],
    start = 0;

  for (let i = 1; i < arr.length - 1; i++) {
    while (sum > target) {
      sum -= arr[start];
      start++;
    }

    if (sum === target) {
      return [start, i - 1];
    }

    sum += arr[i];
  }
}

const arr = [2, 3, 4, 8, 11, 13, 17];

console.log(twoSum(arr, 16));
