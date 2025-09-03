const arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

function maxSubarray(arr) {
  let maxSum = -Infinity,
    sum = 0,
    start = -1,
    ansStart = -1,
    ansEnd = -1;

  for (let i = 0; i < arr.length; i++) {
    if (sum === 0) {
      start = i;
    }

    sum += arr[i];

    if (maxSum < sum) {
      ansStart = start;
      ansEnd = i;
      maxSum = sum;
    }

    if (sum < 0) {
      sum = 0;
    }
  }

  return [ansStart, ansEnd];
}

console.log(maxSubarray(arr));
