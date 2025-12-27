function sumOdd(arr, n) {
  if (n === 0) {
    return 0;
  }

  return (arr[n - 1] % 2 !== 0 ? arr[n - 1] : 0) + sumOdd(arr, n - 1);
}

console.log(sumOdd([5, 4, 1, 2, 3], 5));
