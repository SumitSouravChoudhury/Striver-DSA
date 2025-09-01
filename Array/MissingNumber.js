const arr = [1, 2, 4, 5];

function findMissing(arr) {
  let n = arr.length + 1;
  let sum = 0;
  let actual_sum = (n * (n + 1)) / 2;

  for (let i = 0; i < n - 1; i++) {
    sum += arr[i];
  }

  return actual_sum - sum;
}

console.log(findMissing(arr));
