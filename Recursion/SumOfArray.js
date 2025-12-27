function sumOfArray(arr, n) {
  if (n === 1) {
    return arr[0];
  }

  return arr[n - 1] + sumOfArray(arr, n - 1);
}

console.log(sumOfArray([1, 2, 3, 4, 5], 5));
