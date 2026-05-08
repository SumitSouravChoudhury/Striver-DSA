const arr = [2, -1, 7, -2, -10, -4];

const subarrLargestSum = (arr) => {
  let sum = 0,
    start = 0,
    ansStart = -1,
    ansEnd = -1,
    max = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];

    if (sum > max) {
      max = sum;
      ansStart = start;
      ansEnd = i;
    }

    if (sum < 0) {
      sum = 0;
      start = i + 1;
    }
  }

  return arr.slice(ansStart, ansEnd + 1);
};

console.log(subarrLargestSum(arr));
