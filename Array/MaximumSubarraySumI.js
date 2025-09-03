const arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

function kadaneAlgorithm(arr) {
  let sum = 0,
    maxSum = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];

    if (sum < 0) {
      sum = 0;
    }

    if (maxSum < sum) {
      maxSum = sum;
    }
  }

  return maxSum;
}

console.log(kadaneAlgorithm(arr));
