function SquareRoot(n) {
  if (n <= 1) {
    return n;
  }

  let l = 2,
    r = Math.floor(n / 2);

  while (l <= r) {
    let mid = l + Math.floor((r - l) / 2);

    if (n > mid ** 2) {
      l = mid + 1;
    } else if (n < mid ** 2) {
      r = mid - 1;
    } else {
      return mid;
    }
  }

  return r;
}

console.log(SquareRoot(10));
