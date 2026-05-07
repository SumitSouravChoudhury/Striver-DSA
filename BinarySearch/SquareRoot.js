function SquareRoot(n) {
  if (n <= 1) {
    return n;
  }

  let l = 2,
    r = Math.floor(n / 2);

  while (l <= r) {
    let mid = l + Math.floor((r - l) / 2);

    if (mid * mid === n) {
      return mid;
    } else if (mid * mid < n) {
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }

  return r;
}

console.log(SquareRoot(30));
